import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Stack direction="row" spacing={5}>
      {/* <Skeleton variant="text" /> */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={40} height={40} />
      {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
    </Stack>
    // <Box sx={{ width: 100 }}>
    //   <Skeleton />
    //   <Skeleton animation="wave" />
    //   <Skeleton animation={false} />
    // </Box>
  );
}
