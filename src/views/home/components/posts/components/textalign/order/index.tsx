import React, { FunctionComponent } from "react";
import { IconButton } from "@mui/material";
import { TToolbarComponentProps } from "components/richText/components/Toolbar";
import { OrderSvg as OrderSvg } from "svg";

const Order: FunctionComponent<TToolbarComponentProps> = () => {
  return (
    <IconButton>
      <OrderSvg />
    </IconButton>
  );
};

export default Order;
