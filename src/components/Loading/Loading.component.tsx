import * as S from "./Loading.styles";

import Box from "@/global/layout/Box";

export function LoadingComponent() {
  return (
    <Box
      display="flex"
      width="100%"
      height="calc(100vh - 175px)"
      justifyContent="center"
      alignItems="center"
    >
      <S.Spinner />
    </Box>
  );
}
