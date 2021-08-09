import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { Paper, makeStyles, createMuiTheme } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={0} className={classes.paper}>
        <Header classes={classes} theme={theme} />
        <Main classes={classes} theme={theme} />
      </Paper>
    </>
  );
};

export default App;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c6bc0",
      dark: "#404a86",
      light: "#c3c9e6",
    },
  },
});

const useStyles = makeStyles(({ spacing, palette }) => ({
  "@global": {
    body: {
      backgroundColor: palette.common.white,
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.main,
    background: "#C6E3EE",
  },
  avatar: {
    width: "50%",
    height: "100%",
    margin: "auto",
    alignSelf: "center",
    alignContent: "center",
  },
  form: {
    width: "100%",
    marginTop: spacing(1),
  },
  box: {
    marginBottom: spacing(1),
    marginTop: spacing(1),
  },
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: spacing(1),
    marginTop: spacing(1),
  },
  icon: {
    width: "20px",
    height: "20px",
    color: theme.palette.primary.main,
    marginRight: spacing(1),
    marginBottom: spacing(-0.5),
  },
  card: {
    width: "95%",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: spacing(1),
    marginTop: spacing(1),
  },
  cardChild: {
    marginLeft: "auto",
    boxShadow: "0 0px 30px 0 #dbdbe8",
    borderRadius: "1rem",
    marginBottom: "2rem",
    background: "#ffffff",
  },
}));
