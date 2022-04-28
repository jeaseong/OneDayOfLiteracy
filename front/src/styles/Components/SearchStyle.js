import styled from "styled-components";
import { Button } from "../CommonStyle";

export const SearchContainerBox = styled.form`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
  margin: 25px auto;
`;

export const SearchButton = styled(Button)`
  width: 60px;
  height: 38px;
  margin-top: 0;
`;

export const SearchInput = styled.input`
  border: solid 2px #c99c6e;
  border-radius: 8px;
  width: 30%;
  height: 22px;
  font-size: 1.3rem;
  margin-right: 10px;
  padding: 6px;
`;

export const SearchSelect = styled.select`
  border: solid 2px #c99c6e;
  border-radius: 8px;
  width: 100px;
  height: 50%;
  font-size: 1.3rem;
  margin-right: 10px;
`;
