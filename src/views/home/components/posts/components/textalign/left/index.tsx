import React, { FunctionComponent } from "react";
import { IconButton } from "@mui/material";
import { TToolbarComponentProps } from "components/richText/components/Toolbar";
import { AlignLeftSvg as Left } from "svg";

const AlignLeft: FunctionComponent<TToolbarComponentProps> = () => {
  return (
    <IconButton>
      <Left />
    </IconButton>
  );
};

export default AlignLeft;
