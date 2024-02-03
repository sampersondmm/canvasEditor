import { Grid, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "5px !important",
  },
  sideMenu: {
    backgroundColor: "rgb(28 26 26)",
    border: "1px solid rgb(50,50,50)",
    height: "100%",
  },
}));

const ShapeEditorMenu = () => {
  const styles = useStyles();
  return (
    <Grid item sx={{ height: "100%", width: "340px" }}>
      <Grid container direction="column" className={styles.sideMenu}>
        <Grid item>
          <Button variant="outlined" className={styles.button}>
            Item1
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={styles.button}>
            Item1
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={styles.button}>
            Item1
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShapeEditorMenu;
