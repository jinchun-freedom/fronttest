// ** MUI Theme Provider
import { deepmerge } from "@mui/utils";
import { ThemeOptions } from "@mui/material";

import Palette from "./palette";
import Shadows from "./shadows";

const themeOptions = (): ThemeOptions => {
  const mergedThemeConfig = {
    palette: Palette(),
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
    shadows: Shadows(),
    shape: {
      borderRadius: 5,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette["primary"],
      },
    },
  });
};

export default themeOptions;
