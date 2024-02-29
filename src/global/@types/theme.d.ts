import { THEME } from "../styles/theme";

type Themetype = typeof THEME;
declare module "styled-components" {
  export interface DefaultTheme extends Themetype {}
}
