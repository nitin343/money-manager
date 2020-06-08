import React from "react";

import "./Sign-Up.component.scss";
import { createUserProfileDocument, auth } from "../../firebase/firebase.auth.utilis";
import FormInput from "../FormInput.component/FormInput.componnt";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: " Password does not match " });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        
        <div className="sign-up">
        <div className="alert alert-warning" role="alert" 
        style={{width: 396}}>
          {this.state.error}
        </div>
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your Email and Password</span>

          <form className="signup-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Display Name"
              required
            />

            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="password"
              required
            />

            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              required
            />
            
            <button type="submit" style={{margin: ' -10px 0px 10px 0px'}} class="btn btn-dark btn-block" >Sign In</button>

          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
