import React, { FunctionComponent } from "react";
import { IconButton } from "@mui/material";
import { TToolbarComponentProps } from "components/richText/components/Toolbar";
import { ImageSvg } from "svg";

const Image: FunctionComponent<TToolbarComponentProps> = () => {
  return (
    <IconButton>
      <ImageSvg />
    </IconButton>
  );
};

export default Image;
