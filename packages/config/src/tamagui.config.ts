import { shorthands } from "@tamagui/shorthands";
import { tokens } from "@tamagui/themes/v2";
import { themes } from "@tamagui/themes/v2-themes";
import { createTamagui } from "tamagui";
import { animations } from "./animations";
import { fonts } from "./fonts";
import { media } from "./mediaQueries";

export const config = createTamagui({
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: false,
  onlyAllowShorthands: true,
  shorthands,
  fonts,
  // themes,
  tokens,
  media,
  settings: {
    allowedStyleValues: "somewhat-strict",
  },

  themes: {
    dark: {
      //tła
      background: "#000",
      background2: tokens.color.gray5Dark,
      background3: tokens.color.gray8Dark,
      background4: tokens.color.gray11Dark,
      buttonBackground: "red",
      buttonBackgroundHover: "#333333",

      //bordery
      borderColor: tokens.color.gray8Dark,
      borderHover: tokens.color.gray10Dark,
      borderPress: tokens.color.gray10Dark,
      borderFocus: "#fff",

      //teksty
      color: tokens.color.gray12Dark,
      color1: tokens.color.gray10Dark,
      color2: tokens.color.gray5Dark,
      color3: "white",

      //cienie
      shadowColor: tokens.color.gray8Dark,
    },
    light: {
      //tła
      background: "#fff",
      background2: tokens.color.gray5Light,
      background3: tokens.color.gray8Light,
      background4: tokens.color.gray11Light,
      buttonBackground: "blue",
      buttonBackgroundHover: "#333333",

      //bordery
      borderColor: tokens.color.gray8Light,
      borderHover: tokens.color.gray10Light,
      borderPress: tokens.color.gray10Light,
      borderFocus: tokens.color.gray10Light,

      //teksty
      color: "#000",
      color1: tokens.color.gray10Light,
      color2: tokens.color.gray5Light,
      color3: "black",

      //cienie
      shadowColor: tokens.color.gray8Light,
    },
  },

});
// console.log("init tamagui",config.themes );
// for the compiler to find it
export default config;
