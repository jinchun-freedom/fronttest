import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Container from "components/Container";
import { BackSvg } from "svg";
import { styled, Typography } from "@mui/material";

//@ts-ignore
const Main = ({ children, bgcolor = "transparent" }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const ContainerComponent = styled(Container)(() => ({
    display: "flex",
    cursor: "pointer",
  }));

  return (
    <Box sx={{ background: theme.palette.customColors.background }}>
      <AppBar
        position={"sticky"}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <ContainerComponent paddingY={1}>
          <BackSvg />
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            color="text.primary"
            ml={"2px"}
            mt={"1px"}
            sx={{ fontSize: 14 }}
          >
            Back
          </Typography>
        </ContainerComponent>
      </AppBar>

      <main>{children}</main>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
