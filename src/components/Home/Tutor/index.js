import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Avatar,
  Typography
} from '@material-ui/core'
import Image from 'material-ui-image'

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "200px !important",
    borderRadius: 5,
  },
  intro: {
    backgroundColor: "white",
    position: "absolute",
    top: "78%",
    left: "63%",
    width: "42%",
    height: "33%",
    borderRadius: 5,
    boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.2)"
  }
});

const Tutor = (props) => {
  const { image, language, number }=props
  const classes = useStyles();

  return (
    <div style={{padding: 20}}>
      <Grid className={classes.root}>
        <Image className={classes.root} src={image} />
        <Grid className={classes.intro} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{language}</Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              testing
            </Typography>
            <Typography variant="caption">
              {number} Teachers
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Tutor.propTypes = {
  image: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

export default Tutor
