import { myColors } from "./utils/constants.ts";
import * as colors from "twind/colors";
import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
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
} as Options;
