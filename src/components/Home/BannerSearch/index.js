import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import StyledDiv from './styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: 480
  },
  container: {
    marginTop: 20,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    backgroundColor: "white",
    padding: (3, 3, 3, 10),
    borderRadius: (4, 0, 0, 4),
    flex: (1, 1),
  },
  iconButton: {
    padding: 10,
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: "white"
  }
}));

const BannerSearch = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography className={classes.textColor} variant="h3" color="textPrimary" gutterBottom>
        BECOME FLUENT IN ANY LANGUAGE
      </Typography>
      <Typography className={classes.textColor} variant="subtitle2">
        Choose from over 10,000 teachers for 1-on-1 lessons based on your goals and interests
      </Typography>
      <Paper elevation={0} className={classes.container}>
        <InputBase
          className={classes.input}
          placeholder="Choose a Language"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default BannerSearch
