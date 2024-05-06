import { Border, FontWeight, Size, TextAlign } from "./StyleTypes";

export type TitleProps = {
  title: string;
  fontSize?: Size | string;
  fontWeight?: Size | FontWeight;
  mt?: Size | string;
  mx?: Size | string;
  color?: Size | string;
  textAlign?: TextAlign;
};
export type ButtonProps = {
  Title: string;
  px?: Size | string;
  py?: Size | string;
  bgcolor?: Size | string;
  color?: Size | string;
  width?: Size | string;
  height?: Size | string;
  border?: Size | string | Border;
  mb?: Size | string;
  fontSize?: Size | string;
  fontWeight?: Size | FontWeight;
  borderRadius?: Size | string;
  onClick?: () => void;
};
