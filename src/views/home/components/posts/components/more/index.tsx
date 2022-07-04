import React, { FunctionComponent } from "react";
import { IconButton } from "@mui/material";
import { TToolbarComponentProps } from "components/richText/components/Toolbar";
import { MoreSvg } from "svg";

const More: FunctionComponent<TToolbarComponentProps> = () => {
  return (
    <IconButton>
      <MoreSvg />
    </IconButton>
  );
};

export default More;
