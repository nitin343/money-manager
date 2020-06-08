import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn.page/SignIn";
import SignUp from "./components/Sign-Up.component/Sign-Up.component";
import {
  auth,   
  createUserProfileDocument,
} from "./firebase/firebase.auth.utilis";
import ButtonAppBar from "./Pages/searchBar/searchBar.page";
import { connect } from "react-redux";
import { setUser } from "./redux/User/user.action";
import HomePage from "./Pages/HomePage/homepage";


class App extends React.Component {


 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

           console.log(this.state);
        });
      } else {
       setUser(userAuth);
      } // createUserProfileDocument(snapShot)

      // console.log(snapShot)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
 

    return (
      <div className="body">
      <ButtonAppBar />
        <Switch>
        <Route exact path="/home" component={HomePage} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

        </Switch>
      </div>
    );
    }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});


export default connect(null , mapDispatchToProps)(App);
