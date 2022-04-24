import Typography from "@mui/material/Typography";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © 문해한 하루 "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
