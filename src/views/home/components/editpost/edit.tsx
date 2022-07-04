import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { usePost } from "hooks/usePost";
import { PostType } from "definition";
import { Post } from "../posts";

const EditPost = () => {
  const { type, isEdit } = usePost();

  return type === PostType.Post && isEdit ? (
    <Card>
      <CardHeader title="Edit Post"></CardHeader>
      <CardContent>
        <Post isAdd={false} />
      </CardContent>
    </Card>
  ) : null;
};

export default EditPost;
