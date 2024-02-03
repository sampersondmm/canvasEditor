import { AppBar, Toolbar, IconButton } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
const logo = require("../../../assets/logo.png");

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgb(28 26 26) !important",
  },
  logo: {
    height: "30px",
    width: "30px",
  },
}));

const HeaderMenu = () => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar variant="dense">
        <IconButton>
          <img src={logo} className={styles.logo} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
