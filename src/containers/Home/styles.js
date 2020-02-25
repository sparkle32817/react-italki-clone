
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  video: {
    width: "100%",
    height: "100vh",
    objectFit: "cover"
  },
  videoContainer: {
    position: "relative",
    height: "100vh"
  },
  bannerContainer: {
    position: "absolute",
    top: "30%",
    left: "10vw"
  },
  hoverContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#00000005"
  },
  homeDownarray: {
    position: "absolute",
    left: "50%",
    bottom: ".7%",
    marginLeft: "-20px",
    width: "40px",
    height: "40px",
    padding: "4px 0 0 4px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 4px 0 rgba(0,0,0,.1)",
    cursor: "pointer",
    transition: "all .2s"
  },
  section: {
    marginTop: 20,
    marginBottom: 20
  },
  findTeacherButton: {
    marginTop: 50,
    height: 50,
    backgroundImage: "linear-gradient(270deg,#ff786b,#ff4338)",
    color: "white",
  }
}));

export default useStyles;