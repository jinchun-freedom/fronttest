import React from "react";
import {
  Button,
  Grid,
  Divider,
  styled,
  ButtonProps,
  IconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { usePost } from "hooks/usePost";
import { DataItem, PostType } from "definition";
import { EditSvg, DeleteSvg } from "svg";
import { handleDeleteData } from "store/post";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import MUIRichTextEditor from "components/richText";
import { useConfirm } from "material-ui-confirm";

interface Props {
  item: DataItem;
}

const Detail = (props: Props) => {
  const { type, handleChangeEdit, handleChangeItem } = usePost();
  const dispatch = useDispatch();
  const confirm = useConfirm();
  const { item } = props;

  const ButtonComponent = styled(Button)<ButtonProps>(() => ({
    padding: "4px 16px",
    background: "#C4C4C4",
    borderRadius: "16px",
    width: "100%",
    "&:hover": {
      background: "#532BC5",
    },
  }));

  const IconButtonComponent = styled(IconButton)<IconButtonProps>(() => ({
    background: "#C4C4C4",
    "&:hover": {
      background: "#FF002E",
    },
  }));

  const TypographyComponent = styled(Typography)<TypographyProps>(() => ({
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#606060",
  }));

  const handleDelete = (id: string | undefined, title: string | undefined) => {
    confirm({ description: `This will permanently delete '${title}'.` })
      .then(() => {
        handleChangeEdit(false);
        dispatch(handleDeleteData(id));
      })
      .catch(() => console.log("Deletion cancelled."));
  };
  return type === PostType.Post ? (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Button
            variant="contained"
            className={"topStyleRadius"}
            sx={{ height: 24, width: "100%" }}
          >
            {item.title}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Divider sx={{ mt: 2 }} />
        </Grid>
        <Grid item xs={2}>
          <Grid container>
            <Grid
              item
              xs={8}
              onClick={() => {
                handleChangeEdit(true);
                handleChangeItem(item);
              }}
            >
              <ButtonComponent variant="contained" startIcon={<EditSvg />}>
                Edit
              </ButtonComponent>
            </Grid>
            <Grid item xs={1}>
              <Divider sx={{ mt: 2 }} />
            </Grid>
            <Grid
              item
              xs={2}
              onClick={() => {
                handleDelete(item.id, item.title);
              }}
            >
              <IconButtonComponent>
                <DeleteSvg />
              </IconButtonComponent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: 3 }}>
        <Grid item xs={12}>
          {item.imgs ? (
            <TypographyComponent
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ) : (
            <MUIRichTextEditor
              defaultValue={item.rickData}
              toolbar={false}
              readOnly={true}
            />
          )}
        </Grid>
        {item.imgs && (
          <Grid item xs={12}>
            <ImageList variant="masonry" cols={2} gap={24}>
              {item.imgs.map((imgSrc: any, index: number) => (
                <ImageListItem key={index}>
                  <img src={imgSrc} srcSet={imgSrc} alt="" loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        )}
        <Grid item xs={12} sx={{ paddingTop: 3 }}>
          <TypographyComponent sx={{ color: "#818181" }}>
            {dayjs(new Date(item.date)).format("MMMM D, YYYY hh:mm")}
          </TypographyComponent>
        </Grid>
      </Grid>
    </>
  ) : null;
};

export default Detail;
