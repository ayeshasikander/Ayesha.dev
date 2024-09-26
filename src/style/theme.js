// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primaryColor: "#08D665",
    secondaryColor: "#992400ef",
    bg_color: "#0B0D0C",
    color_dark: "#252525",
    color_white: "#ffffff",
    color_gray: "#d9d9d9",
    color_blue_dark: "#363070",
    color_green: "#5baa8b",
    color_mehndi: "#ceb745",
    color_green_light: "#8cc6c7",
    color_pink: "#e59a94",
    color_pink_light: "#efe3e3",
    color_medium_pink: "#f3b5c0",
    color_dark_orange: "#d08e2c",
    color_dark_yellow: "#e1a63c",
    color_blue: "#295ef5",
    color_deep_orange: "#ea6a45",
    color_icon: "#959595",
    bg_quote_color: "#f8f8f8",
    bg_uploads: "#f3f6ff",
  },
  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Rubik', sans-serif",

    // descFamily: "'Rubik', sans-serif",
    // body: "'Rubik', sans-serif",

  },
});

export default theme;
