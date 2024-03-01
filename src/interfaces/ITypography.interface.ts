export interface ITypographyProps {
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    pointer?: boolean;
    lineHeight?: number | string;
    children: React.ReactNode;
    onClick?: () => void;
    textAling?: 'left' | 'right' | 'center';
  }
  