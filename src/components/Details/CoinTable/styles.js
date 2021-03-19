//  [ styles.js ] --used for--> [ CoinTable.jsx ]

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  table: {
    [theme.breakpoints.up("sm")]: {
      height: "28vh",
    },
  },
}));
