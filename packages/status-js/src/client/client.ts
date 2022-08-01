/**
 * @see https://specs.status.im/spec/1
 */

import { hexToBytes } from 'ethereum-cryptography/utils'
import {
  discovery,
  getPredefinedBootstrapNodes,
  Waku,
  WakuMessage,
} from 'js-waku'

import { ApplicationMetadataMessage } from '../protos/application-metadata-message'
import { Account } from './account'
import { Community } from './community/community'
import { handleWakuMessage } from './community/handle-waku-message'

export interface ClientOptions {
  publicKey: string
  environment?: 'production' | 'test'
}

class Client {
  public waku: Waku
  public readonly wakuMessages: Set<string>
  /**
   * Tracks open connections which had their streams silently destroyed
   * and closes them so new connections can be automatically created.
   *
   * For example, in case of a websocket in browser which did not
   * have its close event emitted.
   *
   * Note: Detection of the stream removal depends on active (by user)
   * or pasive (with `Waku.relayKeepAlive`) message sending.
   *
   * Note: This is only a workaround (@see https://github.com/libp2p/js-libp2p/issues/939).
   */
  #wakuDisconnectionTimer: ReturnType<typeof setInterval>

  public account?: Account
  public community: Community

  constructor(
    waku: Waku,
    wakuDisconnectionTimer: ReturnType<typeof setInterval>,
    options: ClientOptions
  ) {
    // Waku
    this.waku = waku
    this.wakuMessages = new Set()
    this.#wakuDisconnectionTimer = wakuDisconnectionTimer

    // Community
    this.community = new Community(this, options.publicKey)
  }

  static async start(options: ClientOptions) {
    // Waku
    const fleet =
      options.environment === 'test'
        ? discovery.predefined.Fleet.Test
        : discovery.predefined.Fleet.Prod
    /**
     * >only connects to 1 remote node because of the limited number of nodes
     * >run by Status and the limited number of connections provided by these nodes
     * >
     * >@see https://forum.vac.dev/t/waku-v2-scalability-studies/142/2
     */
    const peers = getPredefinedBootstrapNodes(fleet)
    const waku = await Waku.create({
      bootstrap: {
        default: false,
        peers: [
          '/dns4/node-01.gc-us-central1-a.go-waku.test.statusim.net/tcp/443/wss/p2p/16Uiu2HAmPz63Xc6AuVkDeujz7YeZta18rcdau3Y1BzaxKAfDrBqz',
        ],
      },
      relayKeepAlive: 15,
      libp2p: { config: { pubsub: { enabled: true, emitSelf: true } } },
    })
    await waku.waitForRemotePeer()
    const wakuDisconnectionTimer = setInterval(async () => {
      const connectionsToClose: Promise<void>[] = []

      for (const connections of waku.libp2p.connectionManager.connections.values()) {
        for (const connection of connections) {
          if (!connection.streams.length) {
            connectionsToClose.push(connection.close())
          }
        }
      }

      await Promise.allSettled(connectionsToClose)
    }, 10 * 1000)

    // Client
    const client = new Client(waku, wakuDisconnectionTimer, options)

    // Community
    await client.community.start()

    return client
  }

  public async stop() {
    clearInterval(this.#wakuDisconnectionTimer)
    await this.waku.stop()
  }

  public createAccount = async (): Promise<Account> => {
    this.account = new Account()

    await this.community.requestToJoin()

    return this.account
  }

  // TODO?: should this exist
  // public deleteAccount = () => {
  //   this.account = undefined
  // }

  public sendWakuMessage = async (
    type: keyof typeof ApplicationMetadataMessage.Type,
    payload: Uint8Array,
    contentTopic: string,
    symKey: Uint8Array
  ) => {
    if (!this.waku) {
      throw new Error('Waku not started')
    }

    if (!this.account) {
      throw new Error('Account not created')
    }

    const signature = await this.account.sign(payload)

    const message = ApplicationMetadataMessage.encode({
      type: type as ApplicationMetadataMessage.Type,
      signature,
      payload,
    })

    const wakuMesage = await WakuMessage.fromBytes(message, contentTopic, {
      sigPrivKey: hexToBytes(this.account.privateKey),
      symKey,
    })

    await this.waku.relay.send(wakuMesage)
  }

  public handleWakuMessage = (wakuMessage: WakuMessage): void => {
    handleWakuMessage(wakuMessage, this, this.community)
  }
}

export async function createClient(options: ClientOptions): Promise<Client> {
  const client = await Client.start(options)

  return client
}

export type { Client }
