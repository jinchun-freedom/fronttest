import React, { FunctionComponent } from "react";
import { IconButton } from "@mui/material";
import { TToolbarComponentProps } from "components/richText/components/Toolbar";
import { AlignCenterSvg as Center } from "svg";

const AlignCenter: FunctionComponent<TToolbarComponentProps> = () => {
  return (
    <IconButton>
      <Center />
    </IconButton>
  );
};

export default AlignCenter;
