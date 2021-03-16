import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh", marginTop: "40px" }}
      >
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Details />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
