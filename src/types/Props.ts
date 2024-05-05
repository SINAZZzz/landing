import { FontWeight, Size, TextAlign } from "./StyleTypes";

export type TitleProps = {
  title: string;
  fontSize?: Size | string;
  fontWeight?: Size | FontWeight;
  mt?: Size | string;
  mx?: Size | string;
  color?: Size | string;
  textAlign?: TextAlign;
};
