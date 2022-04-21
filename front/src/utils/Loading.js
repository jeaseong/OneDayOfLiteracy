import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import { styled, createTheme, ThemeProvider } from "@mui/system";
import { palette } from "@mui/system";
import { cyan } from "@mui/material/colors";

export default function Loading() {
  const one = cyan[50];
  const two = cyan[100];
  const three = cyan[200];
  return (
    <Stack
      direction="row"
      spacing={5}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        height: 400,
      }}
    >
      {/* <Skeleton variant="text" /> */}
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{ bgcolor: one }}
      />
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{ bgcolor: two }}
      />
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{ bgcolor: three }}
      />
      {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
    </Stack>
    // <Box sx={{ width: 100 }}>
    //   <Skeleton />
    //   <Skeleton animation="wave" />
    //   <Skeleton animation={false} />
    // </Box>
  );
}
