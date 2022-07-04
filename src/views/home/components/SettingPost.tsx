import React from "react";
import {
  Card,
  Grid,
  styled,
  useTheme,
  CardProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";

import { usePost } from "../../../hooks/usePost";
import { PostType } from "definition";
import { RootState } from "store";
import { useSelector } from "react-redux";

const SettingPost = () => {
  const theme = useTheme();
  const post = usePost();
  const store = useSelector((store: RootState) => store.post);
  const CardComponent = styled(Card)<CardProps>(() => ({
    height: 40,
    cursor: "pointer",
    textAlign: "center",
    lineHeight: 2.5,
  }));

  const IconButtonComponent = styled(IconButton)<IconButtonProps>(() => ({
    background: "#FFFFFF",
    width: 24,
    height: 20,
    fontSize: 16,
    color: "#532BC5",
    "&:hover": {
      background: "#FFFFFF",
    },
  }));

  return (
    <Grid container>
      <Grid item xs={6}>
        <CardComponent
          sx={{
            borderRadius: "5px 0 0 5px",
            color: `${
              post.type === PostType.Settings
                ? theme.palette.customColors.whiteColor
                : theme.palette.customColors.blackColor
            }`,
            background: `${
              post.type === PostType.Settings
                ? theme.palette.primary.main
                : theme.palette.primary.light
            }`,
          }}
          onClick={() => {
            post.handleChange(PostType.Settings);
          }}
        >
          Settings
        </CardComponent>
      </Grid>
      <Grid item xs={6}>
        <CardComponent
          sx={{
            borderRadius: "0px 5px 5px 0px",
            color: `${
              post.type === PostType.Post
                ? theme.palette.customColors.whiteColor
                : theme.palette.customColors.blackColor
            }`,
            background: `${
              post.type === PostType.Post
                ? theme.palette.primary.main
                : theme.palette.primary.light
            }`,
          }}
          onClick={() => {
            post.handleChange(PostType.Post);
          }}
        >
          Posts{" "}
          {post.type === PostType.Post && (
            <IconButtonComponent>{store.data.length}</IconButtonComponent>
          )}
        </CardComponent>
      </Grid>
    </Grid>
  );
};

export default SettingPost;
