import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import AppBar from "./appBar";
import MenuBar from "./menuBar";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
type childrenType = {
  children: JSX.Element;
};

const Layout = ({ children }: childrenType) => {
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Item>
              <AppBar></AppBar>
            </Item>
          </Grid>
          <Grid xs={2}>
            <Item>
              <MenuBar></MenuBar>
            </Item>
          </Grid>
          <Grid xs={10}>
            <Item>{children}</Item>
          </Grid>
          {/* <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
