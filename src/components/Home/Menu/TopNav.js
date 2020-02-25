import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: '#00000020',
  },
  logo: {
    width: 80,
    height: 40
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuBar} position="fixed" elevation={0}>
        <Toolbar>
          <CardMedia
            className={classes.logo}
            image="./logo_white.72e72948.svg"
            title="ITALKI FOR ME"
          />
          <div className={classes.title}>
          </div>
          <Button className={classes.menuButton} variant="outlined" color="inherit">Sign in</Button>
          <Button className={classes.menuButton} variant="outlined" color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
