// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { DataItem } from "definition";
import { newId } from "utils";

const data: DataItem[] = [
  {
    id: newId(),
    title: "Orci varius natoque penatibus et magnis",
    content: `Nunc eu quam sit amet justo elementum mollis <br/><br/>
  Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis.  <br/><br/>
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.  <br/><br/>`,
    date: new Date(),
    rickData: "",
    imgs: [
      "/images/img1.png",
      "/images/img3.png",
      "/images/img2.png",
      "/images/img4.png",
    ],
  },
  {
    id: newId(),
    title: "Proin laoreet semper",
    content: `Proin laoreet semper <br/><br/>
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. `,
    date: new Date(),
    rickData: "",
    imgs: ["/images/img5.png"],
  },
];
export const postSlice = createSlice({
  name: "post",
  initialState: {
    data,
  },
  reducers: {
    handleAddData: (state, action) => {
      state.data.push(action.payload);
    },
    handleEditData: (state, action) => {
      const item: DataItem = action.payload;
      const updateItem: any = state.data.find((r) => r.id === item.id);
      Object.assign(updateItem, item);
    },
    handleDeleteData: (state, action) => {
      const id = action.payload;
      const index = state.data.findIndex((r) => r.id === id);
      state.data.splice(index, 1);
    },
  },
});

export const { handleAddData, handleDeleteData, handleEditData } =
  postSlice.actions;
export default postSlice.reducer;
