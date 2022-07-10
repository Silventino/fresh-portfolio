import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import * as colors from "twind/colors";
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
        primary: {
          50: "#353353",
          100: "#353353",
          200: "#353353",
          300: "#353353",
          400: "#353353",
          500: "#353353",
          600: "#353353",
          700: "#353353",
          800: "#353353",
          900: "#353353",
        },
        selectedText: {
          500: "#ffd15c",
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
