import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { 
  Typography,
  Container,
  Grid,
  Button
} from '@material-ui/core';

import useStyles from './styles'
import TopNav from '../../components/Home/Menu/TopNav'
import BannerSearch from '../../components/Home/BannerSearch';
import TutorList from '../../components/Home/Tutor/List';

function Index() {
  const classes = useStyles();

  return (
    <div style={{ paddingBottom: 20}}>
      <TopNav />
      <div>
        <div className={classes.videoContainer}>
          <video className={classes.video} loop autoPlay playsInline src={"./logo-video.mp4"}></video>
          <div className={classes.hoverContainer}></div>
          <div className={classes.homeDownarray}>
            <KeyboardArrowDownIcon fontSize="large" />
          </div>          
        </div>
        <div className={classes.bannerContainer}>
          <BannerSearch />
        </div>
      </div>
      {/* <div className="home-find-teacher"> */}
      <Container className={classes.section} fixed>
        <Typography variant="h3" align="center">
          10,000+ teachers. Any language.
        </Typography>
        <TutorList />
        <Grid
          container
          // direction="column"
          // alignItems="center"
          justify="center"
        >
          <Button className={classes.findTeacherButton} variant="contained" disableElevation href="/">
            <Typography variant="subtitle1">
              FIND YOUR TEACHER
            </Typography>
          </Button>
        </Grid> 
      </Container>
      {/* </div> */}
      <Container>

      </Container>
    </div>
  );
}

export default Index;
