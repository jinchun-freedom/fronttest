import React from "react";
import { Button, Card, Grid, Typography, Link as MLink } from "@mui/material";
import { CopySvg, SuccessSvg } from "svg";
import { success, clipboardCopy } from "utils";

const Link = () => {
  const url = "https://twitter.com/JenKenZhang";
  const copy = () => {
    success("You have copied the link");
    clipboardCopy(url);
  };

  return (
    <Card sx={{ height: 100 }}>
      <Grid container>
        <Grid item xs={2}>
          <Button
            variant="contained"
            startIcon={<SuccessSvg />}
            sx={{ height: 100 }}
          ></Button>
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12} mt={2}>
            <MLink href={url} color="inherit" underline="none" target={"black"}>
              link to your profile
            </MLink>
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography
              variant="h5"
              component={"span"}
              sx={{ fontWeight: 500 }}
            >
              {url}
            </Typography>
            <Typography
              component={"span"}
              ml={2}
              sx={{ verticalAlign: "middle" }}
              onClick={copy}
            >
              <CopySvg />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Link;
