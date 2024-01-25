import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AppBar from "./appBar";
import MenuBar from "./menuBar";
import styles from "../styles/layout.module.scss";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  //   padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
type childrenType = {
  children: JSX.Element;
};

const Layout = ({ children }: childrenType) => {
  return (
    <>
      <Box sx={{ flexGrow: 0 }} className={styles.box}>
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
          <Grid xs={10} className={styles.content + " ######"}>
            <Item>{children}</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
