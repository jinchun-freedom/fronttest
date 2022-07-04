import React, { createContext, ReactNode, useState } from "react";
import { PostContextType, PostType, DataItem } from "definition";

const defaultProvider: PostContextType = {
  item: null,
  type: PostType.Post,
  isEdit: false,
  handleChange: (type: PostType) => null,
  handleChangeEdit: (isEdit: boolean) => false,
  handleChangeItem: (item: DataItem) => null,
};

interface Props {
  children: ReactNode;
}

const PostContext = createContext(defaultProvider);

const PostContextProvider = ({ children }: Props) => {
  const [type, setType] = useState<PostType>(defaultProvider.type);
  const [isEdit, setIsEdit] = useState<boolean>(defaultProvider.isEdit);
  const [item, setItem] = useState<DataItem | null>(defaultProvider.item);

  const handleChange = (type: PostType) => {
    setType(type);
  };

  const handleChangeEdit = (isEdit: boolean) => {
    setIsEdit(isEdit);
  };
  const handleChangeItem = (item: DataItem) => {
    setItem(item);
  };

  const values = {
    item,
    type,
    isEdit,
    handleChange,
    handleChangeEdit,
    handleChangeItem,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export { PostContext, PostContextProvider };
