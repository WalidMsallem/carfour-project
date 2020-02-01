import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

const Login = ({ loginUser, auth, history ,loginLoading }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");


  const { isAuthenticated } = auth;

 

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
  }, [history, isAuthenticated]);

  const onSubmit = e => {
    e.preventDefault();
    loginUser(
      {
        password,
        email
      },
      setMessage,
      setModal
    );
  };

  const toggleModal = () => {
    setModal(!modal);
    setMessage("");
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol ms="12" className="mt-3">
          <MDBCard>
            <MDBContainer>

              <MDBContainer>
                <MDBModal isOpen={modal} toggle={toggleModal}>
                  <MDBModalHeader toggle={toggleModal}>Hello</MDBModalHeader>
                  <MDBModalBody>{message && message.map(el=><div>{el}</div>)}</MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggleModal}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>

              <MDBRow>
                <MDBCol md="10" style ={{margin:"auto" , marginTop : '25px'}}>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={e => setEmail(e.target.value)}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                      validate
                    />
                  </div>

                  <br />
                  <p className="h6 text-center ">
                    You don't have an account ?{" "}
                    <Link to="/Signup">
                      <span className="blue-text">Sign in</span>
                    </Link>
                  </p>
                  <br />

                  <div className="text-center button-container">
                    <MDBBtn onClick={onSubmit}>Login</MDBBtn>
                   { loginLoading && <div class="lds-dual-ring"></div>}
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    loginLoading: state.auth.loginLoading
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
