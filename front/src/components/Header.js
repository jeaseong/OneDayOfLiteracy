import React, { useContext, useState } from "react";
// import { useQueryClient, useQuery } from "react-query";
import { useNavigate, uselocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Header() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const queryClient = useQueryClient();
  const query = useQuery();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <img
            src={`${process.env.PUBLIC_URL}/moonhaeday.png`}
            alt="logo"
            width="100"
          ></img>

          <Tab value="one" label="서비스 소개" />
          <Tab value="two" label="로그인" />
          <Tab value="three" label="회원가입" />
        </Tabs>
      </Box>
    </>
  );
}

export default Header;
