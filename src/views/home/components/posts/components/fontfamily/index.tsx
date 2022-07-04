import React, { FunctionComponent } from "react";
import { IconButton } from "@mui/material";
import { TToolbarComponentProps } from "components/richText/components/Toolbar";
import { FontFamilySvg } from "svg";

const FontFamily: FunctionComponent<TToolbarComponentProps> = () => {
  return (
    <IconButton>
      <FontFamilySvg />
    </IconButton>
  );
};

export default FontFamily;
