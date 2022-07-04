import React, { useRef, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { usePost } from "hooks/usePost";
import { DataItem, PostType } from "definition";
import MUIRichTextEditor, { TMUIRichTextEditorRef } from "components/richText";
import {
  FontFamily,
  FullScreen,
  Space,
  AlignCenter,
  AlignLeft,
  AlignRight,
  More,
  Image,
} from "./components";
import { SaveSvg, CloseSvg } from "svg";
import { useDispatch, useSelector } from "react-redux";
import { handleAddData, handleEditData } from "store/post";
import { success, error, newId } from "utils";
import { EditorState } from "draft-js";
import { useTheme } from "@mui/material/styles";

interface Props {
  isAdd: boolean;
}

const Post = (props: Props) => {
  const { isAdd } = props;
  const { isEdit, item } = usePost();
  const { type, handleChangeEdit } = usePost();
  const [title, setTitle] = useState<string | undefined>(item?.title);
  const dispatch = useDispatch();
  const ref = useRef<TMUIRichTextEditorRef>(null);
  const fullScreenContentRef: any = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const theme = useTheme();

  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleClick = () => {
    ref.current?.save();
  };
  const handleSave = (data: string) => {
    if (!title) {
      error("Title requried!");
      return;
    }
    const value = JSON.parse(data);
    if (!value.blocks || (value.blocks.length === 1 && !value.blocks[0].text)) {
      error("Content requried!");
      return;
    }
    let textValue = "";
    value.blocks.map((item: any) => {
      textValue += item.text + "<br/>";
    });
    let postData: DataItem = {
      id: isEdit ? item?.id : newId(),
      title,
      content: textValue,
      date: new Date(),
      rickData: data,
    };
    if (isEdit) {
      dispatch(handleEditData(postData));
      handleChangeEdit(false);
      return;
    }
    setTitle("");
    dispatch(handleAddData(postData));
    success("Add post success");
    return EditorState.createEmpty();
  };
  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      fullScreenContentRef?.current.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return type === PostType.Post ? (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          sx={{ background: theme.palette.customColors.whiteColor }}
          fullWidth
          label={
            isEdit
              ? "Nunc eu quam sit amet justo elementum mollis"
              : "Input post title"
          }
          value={title}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        item
        xs={12}
        mt={4}
        ref={fullScreenContentRef}
        className={isFullScreen ? "fullScreen" : ""}
      >
        <MUIRichTextEditor
          label="Input TextType something here..."
          onSave={handleSave}
          defaultValue={item?.rickData}
          ref={ref}
          controls={[
            "full-screen",
            "code",
            "space",
            "bold",
            "italic",
            "underline",
            "font-family",
            "space-1",
            "align-left",
            "align-center",
            "numberList",
            "more",
            "space-2",
            "link",
            "image",
          ]}
          customControls={[
            {
              name: "full-screen",
              component: FullScreen,
              type: "callback",
              onClick: () => {
                handleFullScreen();
              },
            },
            {
              name: "space",
              component: Space,
              type: "block",
            },
            {
              name: "font-family",
              component: FontFamily,
              type: "block",
            },
            {
              name: "space-1",
              component: Space,
              type: "block",
            },
            {
              name: "align-left",
              component: AlignLeft,
              type: "block",
            },
            {
              name: "align-center",
              component: AlignCenter,
              type: "block",
            },
            {
              name: "align-right",
              component: AlignRight,
              type: "block",
            },
            {
              name: "more",
              component: More,
              type: "block",
            },
            {
              name: "space-2",
              component: Space,
              type: "block",
            },
            {
              name: "image",
              component: Image,
              type: "block",
            },
          ]}
        />
      </Grid>
      <Grid item xs={6} mt={4}>
        <Button
          variant="contained"
          startIcon={<SaveSvg />}
          sx={{ height: 48, width: "100%" }}
          onClick={handleClick}
        >
          {isAdd ? "Post" : "Save"}
        </Button>
      </Grid>
      {!isAdd && (
        <Grid
          item
          xs={6}
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            cursor: "pointer",
          }}
          onClick={() => {
            handleChangeEdit(false);
          }}
        >
          <span>
            <CloseSvg />
          </span>
          <span style={{ margin: 5 }}>Cancel</span>
        </Grid>
      )}
    </Grid>
  ) : null;
};

export default Post;
