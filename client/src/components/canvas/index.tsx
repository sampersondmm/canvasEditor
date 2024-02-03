import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import ShapeEditorMenu from "./ShapeEditorMenu";
import ShapeSelectorMenu from "./ShapeSelectorMenu";
import MainCanvas from "./MainCanvas";
import HeaderMenu from "./HeaderMenu";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "rgb(50,50,50)",
    width: "100vw",
    height: "100vh",
  },
  button: {
    margin: "5px !important",
  },
  body: {
    height: "calc(100vh - 48px)",
    backgroundColor: "rgb(50 50 50)",
  },
}));

const Canvas = () => {
  const styles = useStyles();

  return (
    <Grid className={styles.wrapper}>
      <Grid container direction="column">
        <Grid item>
          <HeaderMenu />
        </Grid>
        <Grid item className={styles.body}>
          <Grid container direction="row" sx={{ height: "100%" }}>
            <ShapeEditorMenu />
            <Grid item sx={{ height: "100%", width: "calc(100% - 340px)" }}>
              <Grid
                container
                direction="column"
                sx={{ height: "100%", borderTop: "1px solid rgb(50,50,50)" }}
              >
                <ShapeSelectorMenu />
                <MainCanvas />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Canvas;
