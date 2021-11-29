export type Theme = {
  primary: string;
  secondary: string;
  tertiary: string;
  bodyBackgroundColor: string;
  sectionBackgroundColor: string;
  guestNameColor: string;
  iconColor: string;
  iconUserColor: string;
  iconTextColor: string;
  activeChannelBackground: string;
  notificationColor: string;
  inputColor: string;
  border: string;
  buttonBg: string;
  buttonBgHover: string;
  buttonNoBg: string;
  buttonNoBgHover: string;
  skeletonLight: string;
  skeletonDark: string;
  redColor: string;
  mentionColor: string;
  mentionBg: string;
  mentionBgHover: string;
};

export const lightTheme: Theme = {
  primary: "#000",
  secondary: "#939BA1",
  tertiary: "#4360DF",
  bodyBackgroundColor: "#fff",
  sectionBackgroundColor: "#F6F8FA",
  guestNameColor: "#887AF9",
  iconColor: "#D37EF4",
  iconUserColor: "#717199",
  iconTextColor: "rgba(255, 255, 255, 0.7)",
  activeChannelBackground: "#E9EDF1",
  notificationColor: "#4360DF",
  inputColor: "#EEF2F5",
  border: "#EEF2F5",
  buttonBg: "rgba(67, 96, 223, 0.1)",
  buttonBgHover: "rgba(67, 96, 223, 0.2)",
  buttonNoBg: "rgba(255, 45, 85, 0.1)",
  buttonNoBgHover: "rgba(255, 45, 85, 0.2)",
  skeletonLight: "#F6F8FA",
  skeletonDark: "#E9EDF1",
  redColor: "#FF2D55",
  mentionColor: "#0DA4C9",
  mentionBg: "#E5F8FD",
  mentionBgHover: "#BDE7F2",
};

export const darkTheme: Theme = {
  primary: "#fff",
  secondary: "#909090",
  tertiary: "#88B0FF",
  bodyBackgroundColor: "#000",
  sectionBackgroundColor: "#252525",
  guestNameColor: "#887AF9",
  iconColor: "#D37EF4",
  iconUserColor: "#717199",
  iconTextColor: "rgba(0, 0, 0, 0.7)",
  activeChannelBackground: "#2C2C2C",
  notificationColor: "#887AF9",
  inputColor: "#373737",
  border: "#373737",
  buttonBg: "rgba(134, 158, 255, 0.2)",
  buttonBgHover: "rgba(67, 96, 223, 0.3)",
  buttonNoBg: "rgba(255, 92, 123, 0.2)",
  buttonNoBgHover: "rgba(255, 45, 85, 0.3)",
  skeletonLight: "#2E2F31",
  skeletonDark: "#141414",
  redColor: "#FF5C7B",
  mentionColor: "#0DA4C9",
  mentionBg: "#E5F8FD",
  mentionBgHover: "#BDE7F2",
};

export default { lightTheme, darkTheme };
