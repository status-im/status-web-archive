import React from 'react'

import { useCommunity } from '~/src/protocol'
import { Button, CopyInput, Dialog, Flex, Grid, Text } from '~/src/system'

export const CommunityDialog = () => {
  const {  identity, publicKey='0xTODO' } = useCommunity()
  const { displayName, description} = identity


  return (
    <Dialog title={displayName}>
      <Dialog.Body>
        <Text>{description}</Text>
      </Dialog.Body>
      <Dialog.Separator />
      <Dialog.Body>
        <Grid gap={3}>
          <CopyInput label="Community Public Key" value={publicKey} />
          <Text size="13" color="gray">
            To access this community, paste community public key in Status
            desktop or mobile app.
          </Text>
        </Grid>
      </Dialog.Body>
      <Dialog.Separator />
      <Dialog.Body>
        <Flex
          gap={4}
          justify="center"
          align="center"
          direction="column"
          css={{ padding: '8px 0 16px', color: '$accent-1' }}
        >
          <svg
            width="171"
            height="64"
            viewBox="0 0 171 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.3005 0C14.4611 0 0 14.3269 0 32C0 49.6731 14.4611 64 32.3005 64C50.14 64 64.6022 49.6731 64.6022 32C64.6022 14.3269 50.14 0 32.3005 0Z"
              fill="#4360DF"
            />
            <path
              d="M32.4695 30.5975C34.0987 30.7644 35.7266 30.9312 37.7289 30.8215C43.1524 30.5232 46.4384 27.7758 46.205 23.6695C45.967 19.4912 41.5961 16.9175 37.2229 17.1587C30.0952 17.5495 24.8531 23.7255 24.2639 30.7815C25.2321 30.5587 26.2512 30.4238 27.2113 30.3712C29.2136 30.2615 30.8416 30.4284 32.4695 30.5964V30.5975ZM18.4984 39.7312C18.7225 43.5609 22.8635 45.9209 27.0068 45.6992C33.7613 45.3404 38.7261 39.6798 39.2841 33.2112C38.3667 33.4169 37.402 33.5392 36.4915 33.5884C34.5955 33.6889 33.053 33.5347 31.5094 33.3827C29.9669 33.2284 28.4245 33.0752 26.5273 33.1769C21.3892 33.4501 18.2777 35.9678 18.4972 39.7324L18.4984 39.7312Z"
              fill="white"
            />
            <path
              d="M77.1738 37.3143H81.8509C81.8509 38.0971 82.0739 38.6594 82.521 39.0011C82.9682 39.3429 83.5413 39.5131 84.2426 39.5131C84.8203 39.5131 85.294 39.408 85.6591 39.1966C86.0346 38.976 86.2218 38.6194 86.2218 38.1269C86.2218 37.8354 86.1409 37.6 85.9792 37.4183C85.8267 37.2286 85.5875 37.0629 85.2628 36.9223C84.8579 36.7422 84.4405 36.591 84.0138 36.4697C83.5054 36.3189 82.8965 36.128 82.186 35.8983C81.5764 35.7076 80.972 35.5014 80.3731 35.28C79.8456 35.0762 79.3484 34.8025 78.8954 34.4663C78.4761 34.1531 78.1326 33.7514 77.8902 33.2903C77.6568 32.8286 77.5401 32.256 77.5401 31.5726C77.5401 30.7897 77.6972 30.112 78.0127 29.5383C78.3282 28.9648 78.7833 28.4781 79.3367 28.1223C79.9064 27.7509 80.5869 27.4754 81.3783 27.2937C82.2372 27.0956 83.1169 26.9996 83.9988 27.008C85.1658 27.008 86.171 27.1383 87.0144 27.4C87.8579 27.6606 88.5476 28.0171 89.0861 28.4697C89.6245 28.9211 90.0208 29.4537 90.2738 30.0663C90.5384 30.6789 90.6701 31.3371 90.6701 32.04H85.963C85.963 31.4274 85.8012 30.9497 85.4754 30.6091C85.1611 30.2663 84.6782 30.096 84.0288 30.096C83.532 30.096 83.1045 30.2069 82.7498 30.4274C82.394 30.6389 82.216 30.96 82.216 31.392C82.216 31.6834 82.2969 31.92 82.4598 32.1006C82.6331 32.272 82.8815 32.4263 83.2062 32.568C83.5309 32.7086 83.933 32.8537 84.4101 33.0046C84.8873 33.1451 85.435 33.3154 86.0554 33.5166C86.7256 33.6971 87.3495 33.8983 87.9283 34.1189C88.5072 34.3406 89.0144 34.6114 89.4512 34.9326C89.8983 35.2446 90.2484 35.6411 90.5026 36.1234C90.7672 36.5954 90.8989 37.1977 90.8989 37.9314C90.8989 38.7954 90.7163 39.5337 90.3501 40.1463C89.9846 40.7488 89.4777 41.2553 88.8723 41.6229C88.2634 42.0046 87.5528 42.2754 86.7406 42.4366C85.9283 42.608 85.0745 42.6926 84.1814 42.6926C81.9572 42.6926 80.231 42.2354 79.0017 41.3211C77.7839 40.3977 77.1738 39.0629 77.1738 37.3143ZM92.0866 30.9257V27.4149H94.4483V23H99.2005V27.4149H102.627V30.9257H99.2005V36.2434C99.2005 36.7966 99.2513 37.2377 99.353 37.5691C99.4547 37.8914 99.5956 38.1474 99.7793 38.3383C99.9723 38.5189 100.201 38.64 100.464 38.6994C100.739 38.7497 101.043 38.7749 101.378 38.7749C101.582 38.7749 101.841 38.7703 102.156 38.76C102.47 38.7406 102.745 38.7097 102.978 38.6686V42.2857C102.623 42.3463 102.176 42.4011 101.637 42.4514C101.014 42.5057 100.389 42.5308 99.7643 42.5269C99.2051 42.5269 98.617 42.4869 97.9966 42.4069C97.3815 42.3281 96.7927 42.1116 96.275 41.7737C95.7481 41.4309 95.3114 40.9097 94.9659 40.2069C94.6205 39.4937 94.4483 38.5189 94.4483 37.2834V30.9257H92.0866ZM104.349 34.8423C104.349 33.728 104.527 32.6937 104.882 31.7394C105.219 30.8313 105.731 29.9967 106.391 29.2823C107.033 28.5953 107.803 28.038 108.66 27.6411C109.537 27.236 110.495 27.0299 111.463 27.0377C112.589 27.0377 113.566 27.2743 114.387 27.7463C115.219 28.2183 115.844 28.816 116.261 29.5394V27.4137H121.028V42.2857H116.261V40.1909C115.885 40.8743 115.28 41.4571 114.447 41.9394C113.615 42.4217 112.621 42.6629 111.463 42.6629C110.467 42.6629 109.533 42.4617 108.66 42.0594C107.803 41.6623 107.033 41.1046 106.391 40.4171C105.733 39.696 105.221 38.8574 104.882 37.9463C104.519 36.9511 104.339 35.9 104.349 34.8423ZM109.086 34.8423C109.086 35.3554 109.173 35.848 109.345 36.3189C109.527 36.7817 109.772 37.1829 110.076 37.5246C110.392 37.856 110.767 38.1269 111.204 38.3383C111.641 38.5394 112.128 38.64 112.666 38.64C113.204 38.64 113.692 38.5394 114.128 38.3383C114.554 38.1424 114.937 37.866 115.255 37.5246C115.57 37.1829 115.814 36.7817 115.986 36.3189C116.169 35.8571 116.261 35.3646 116.261 34.8423C116.261 34.3303 116.169 33.848 115.986 33.3966C115.819 32.9536 115.572 32.5449 115.255 32.1909C114.949 31.8385 114.57 31.5558 114.143 31.3623C113.679 31.1555 113.175 31.0525 112.666 31.0606C112.127 31.0606 111.641 31.1611 111.204 31.3623C110.774 31.5581 110.39 31.8403 110.076 32.1909C109.771 32.5429 109.527 32.9451 109.345 33.3966C109.172 33.848 109.086 34.3303 109.086 34.8423ZM123.588 30.9257V27.4149H125.948V23H130.701V27.4149H134.128V30.9257H130.701V36.2434C130.701 36.7966 130.752 37.2377 130.853 37.5691C130.954 37.8914 131.097 38.1474 131.28 38.3383C131.473 38.5189 131.701 38.64 131.965 38.6994C132.239 38.7497 132.544 38.7749 132.879 38.7749C133.083 38.7749 133.342 38.7703 133.656 38.76C133.971 38.7406 134.245 38.7097 134.478 38.6686V42.2857C134.124 42.3463 133.677 42.4011 133.138 42.4514C132.515 42.5057 131.89 42.5309 131.264 42.5269C130.706 42.5269 130.117 42.4869 129.498 42.4069C128.882 42.328 128.294 42.1115 127.776 41.7737C127.248 41.4309 126.811 40.9097 126.467 40.2069C126.121 39.4937 125.948 38.5189 125.948 37.2834V30.9257H123.588ZM136.84 36.2434V27.4149H141.577V35.0377C141.577 36.1029 141.77 36.9726 142.156 37.6457C142.542 38.3086 143.232 38.64 144.228 38.64C145.223 38.64 145.954 38.3029 146.421 37.6297C146.898 36.9474 147.137 36.0274 147.137 34.8731V27.4149H151.904V42.2857H147.137V40.1611C146.72 40.9451 146.086 41.5577 145.233 41.9989C144.379 42.4411 143.359 42.6617 142.171 42.6617C141.135 42.6617 140.282 42.5017 139.612 42.1806C138.993 41.8905 138.443 41.4746 137.998 40.96C137.519 40.386 137.194 39.7022 137.053 38.9714C136.911 38.2171 136.84 37.3086 136.84 36.2434ZM154.981 37.3143H159.658C159.658 38.0971 159.881 38.6594 160.328 39.0011C160.774 39.3429 161.349 39.5131 162.049 39.5131C162.628 39.5131 163.1 39.408 163.466 39.1966C163.842 38.976 164.029 38.6194 164.029 38.1269C164.029 37.8354 163.948 37.6 163.785 37.4183C163.634 37.2286 163.395 37.0629 163.07 36.9223C162.665 36.7424 162.248 36.5912 161.821 36.4697C161.313 36.3189 160.704 36.128 159.993 35.8983C159.384 35.7076 158.779 35.5015 158.18 35.28C157.653 35.0764 157.156 34.8026 156.703 34.4663C156.283 34.153 155.94 33.7513 155.698 33.2903C155.464 32.8286 155.347 32.256 155.347 31.5726C155.347 30.7897 155.505 30.112 155.819 29.5383C156.135 28.9649 156.59 28.4782 157.144 28.1223C157.714 27.7509 158.393 27.4754 159.186 27.2937C160.045 27.0955 160.924 26.9996 161.806 27.008C162.973 27.008 163.978 27.1383 164.822 27.4C165.664 27.6606 166.355 28.0171 166.893 28.4697C167.432 28.9211 167.827 29.4537 168.081 30.0663C168.348 30.6906 168.483 31.3623 168.477 32.04H163.77C163.77 31.4274 163.609 30.9497 163.283 30.6091C162.968 30.2663 162.486 30.096 161.836 30.096C161.338 30.096 160.912 30.2069 160.556 30.4274C160.201 30.6389 160.023 30.96 160.023 31.392C160.023 31.6834 160.104 31.92 160.267 32.1006C160.439 32.272 160.689 32.4263 161.014 32.568C161.338 32.7086 161.739 32.8537 162.216 33.0046C162.695 33.1451 163.242 33.3154 163.862 33.5166C164.532 33.6971 165.157 33.8983 165.736 34.1189C166.315 34.3406 166.822 34.6114 167.258 34.9326C167.706 35.2446 168.056 35.6411 168.31 36.1234C168.573 36.5954 168.706 37.1977 168.706 37.9314C168.706 38.7954 168.523 39.5337 168.157 40.1463C167.792 40.7489 167.285 41.2554 166.68 41.6229C166.071 42.0046 165.36 42.2754 164.548 42.4366C163.734 42.608 162.882 42.6926 161.989 42.6926C159.765 42.6926 158.038 42.2354 156.809 41.3211C155.591 40.3977 154.981 39.0629 154.981 37.3143Z"
              fill="currentColor"
            />
          </svg>
          <Button href="https://status.im/get">Download Status for Mac</Button>
        </Flex>
      </Dialog.Body>
    </Dialog>
  )
}
