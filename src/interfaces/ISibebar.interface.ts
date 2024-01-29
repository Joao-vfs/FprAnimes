import { IListAnimesDataProps } from "./IListAnimes.interface";

export interface ISidebarSliceProps {
  openSibebar: boolean;
  category: string
}

export interface ISidebarProps {
  listCategorys: IListAnimesDataProps[];
  openSidebar: boolean;
}
