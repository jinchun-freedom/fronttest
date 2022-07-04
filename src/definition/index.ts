export interface PostContextType {
  item: DataItem | null;
  type: PostType;
  isEdit: boolean;
  handleChange: (type: PostType) => void;
  handleChangeEdit: (isEdit: boolean) => void;
  handleChangeItem: (item: DataItem) => void;
}

export enum PostType {
  Settings,
  Post,
}

export interface DataItem {
  id: string | undefined;
  title: string | undefined;
  content: string;
  date: Date;
  rickData: string;
  imgs?:any;
}
