export interface IListAnimesSliceProps {
  id: number;
}

export interface IAttributesProps {
  id: number;
  canonicalTitle: string;
  title: string ;
  averageRating: string;
  posterImage: { small: string };
  coverImage: { small: string };
  youtubeVideoId: string;
  synopsis: string;
  ratingRank: number;
  popularityRank: number;
}

export interface IListAnimesDataProps {
  id: number;
  attributes: IAttributesProps;
}

export interface IListAnimesProps {
  data: IListAnimesDataProps[];
}
