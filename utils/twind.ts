import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import * as colors from "twind/colors";
import { myColors } from "./constants.ts";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Times", "serif"],
    },
    extend: {
      colors: {
        ...colors,
        primaryBG: {
          500: myColors.primaryBG,
        },
        secondaryBG: {
          500: myColors.secondaryBG,
        },
        selectedText: {
          500: myColors.selectedText,
        },
      },
    },
  },
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Roboto:wght@300;500;700;900&display=swap')",
  },
};
if (IS_BROWSER) setup(config);
