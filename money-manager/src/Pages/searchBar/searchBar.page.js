import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {createStructuredSelector} from 'reselect'
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../../firebase/firebase.auth.utilis";
import { userDetail } from "../../redux/User/user.selector";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ({ User }) => {
  const classes = useStyles();
  console.log("user", User);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MonetizationOnRoundedIcon />
          <Typography
            variant="h6"
            className={classes.title}
            style={{ padding: "0 10px 0 15px" }}
          >
            Money Tracker
          </Typography>

          {User
             ?
         (
            <Typography
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => auth.signOut()}
            >
              SignOut
            </Typography>
          ) : (
            <Typography>
              <Link
                to="/SignIn"
                style={{ color: "white", padding: "0 10px 0 30px" }}
              >
                LogIn
              </Link>
            </Typography>
          )}

          {
            User ?
            <Redirect to='/home' /> 
            :
            null
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    User: userDetail,

  });
  

export default connect(mapStateToProps)( ButtonAppBar);
