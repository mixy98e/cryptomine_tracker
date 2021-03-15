//  [ styles.js ] --used for--> [ PriceChart.jsx ]

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  btnGr1st: {
    display: "inline",
  },
  btnGr2nd: {
    display: "inline",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "10px",
    },
  },
}));
