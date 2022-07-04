import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

//@ts-ignore
const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 800 }}
    width={1}
    margin={"0 auto"}
    paddingX={2}
    paddingY={3}
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
