import React from "react";
import { Typography } from "@mui/material";
import { usePost } from "hooks/usePost";
import { PostType } from "definition";

const Settings = () => {
  const { type } = usePost();

  return type === PostType.Settings ? (
    <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
      Settings
    </Typography>
  ) : null;
};

export default Settings;
