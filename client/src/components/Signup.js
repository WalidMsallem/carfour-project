import React , {useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

const Signup = ({auth,registerUser ,history}) => {
  const [data, setData] = useState({
    name :'',
    lastName : '',
    email : '',
    password : "",
    password2 : ""
  })
   
  const {isAuthenticated}  = auth

  useEffect(() => {
    if ( isAuthenticated) {
     history.push("/home");
    }
  }, [history, isAuthenticated])

const handleChange = (e) => {
  console.log('data', data)

 const {name , value} = e.target
 setData ((prevState) =>  ({
      ...prevState,
      [name] : value
    })
  )
}

const onSubmit = (e) => {
  e.preventDefault();
   registerUser(data,history);
}
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol ms="12" className="mt-3 mt-b">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="name"
                    onChange={handleChange}
                  />
             <MDBInput
                    label="Your last name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="lastName"
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email"
                    onChange={handleChange}

                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="password"
                    onChange={handleChange}
                  />
                         <MDBInput
                    label="Confirm password"
                    icon="lock"
                    group
                    name="password2"
                    type="password"
                    validate
                    onChange={handleChange}
                  />
                </div>
                <br />
                <p className="h6 text-center ">Already have an account ? <Link to="/login"><span className="blue-text">Login</span></Link></p>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-blue" onClick ={onSubmit}>
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
 