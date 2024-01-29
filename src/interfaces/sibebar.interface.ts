import { IListAnimesProps } from "./pages.intefaces";

export interface ISidebarSliceProps {
  openSibebar: boolean;
  category: string
}

export interface ISidebarProps {
  listCategorys: IListAnimesProps[];
  openSidebar: boolean;
}
