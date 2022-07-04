import React from "react";
import { ReactNode } from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import themeOptions from "./themeOptions";
import GlobalStyling from "./globalStyles";
import overrides from "./overrides";
import { CssBaseline } from "@mui/material";

interface Props {
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { children } = props;
  const themeConfig = themeOptions();
  let theme = createTheme(themeConfig);
  const mergeComponentOverrides = () => deepmerge({ ...overrides() }, {});
  theme = createTheme(theme, {
    components: { ...mergeComponentOverrides() },
  });
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling() as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
