import React, { FunctionComponent } from "react";
import { createStyles, withStyles, WithStyles } from "@mui/styles";

const styles = () =>
  createStyles({
    root: {
      backgroundColor: "#eeeeee",
      padding: "8px 16px 8px 16px",
    },
  });

interface IBlockquoteProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

const CodeBlock: FunctionComponent<IBlockquoteProps> = (props) => {
  return <div className={props.classes.root}>{props.children}</div>;
};

export default withStyles(styles, { withTheme: true })(CodeBlock);
