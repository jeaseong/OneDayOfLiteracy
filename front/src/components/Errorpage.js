import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { lightBlue } from "@mui/material/colors";
import {
  ErrorContainer,
  ErrorBox,
  ErrorHeader,
  ErrorCode,
  ErrorMessage,
} from "./componentStyle";

function Errorpage() {
  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorHeader>
          <ErrorCode>4</ErrorCode>
          <ErrorCode>0</ErrorCode>
          <ErrorCode>4</ErrorCode>
        </ErrorHeader>
        <ErrorMessage>THE PAGE YOU REQUESTED COULD NOT FOUND</ErrorMessage>
      </ErrorBox>
    </ErrorContainer>
  );
}
export default Errorpage;
