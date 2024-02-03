import { Grid } from "@mui/material";

const MainCanvas = () => {
  return (
    <Grid item sx={{ height: "calc(100% - 48px)" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Grid
          item
          sx={{
            height: "500px",
            width: "500px",
            backgroundColor: "rgb(150,150,150)",
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default MainCanvas;
