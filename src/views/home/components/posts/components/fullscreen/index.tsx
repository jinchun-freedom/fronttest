import React, { FunctionComponent } from "react";
import { IconButton } from "@mui/material";
import { TToolbarComponentProps } from "components/richText/components/Toolbar";
import { FullScreenSvg } from "svg";

const FullScreen: FunctionComponent<TToolbarComponentProps> = (props) => {
  return (
    <IconButton onClick={props.onMouseDown}>
      <FullScreenSvg />
    </IconButton>
  );
};

export default FullScreen;
