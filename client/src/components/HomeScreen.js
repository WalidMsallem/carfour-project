import React, { Component,useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer } from "mdbreact";


const HomeScreen = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleTogglerClick = () => {
    setCollapsed(!collapsed)
  };


  const navStyle = { marginTop: "0px" };
  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={handleTogglerClick}
    />
  );

  return (
    <Fragment>
        <div>
          <MDBNavbar
            color="primary-color"
            style={navStyle}
            dark
            expand="ms"
            fixed="top"
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <img style={{width:'100px'}} src={require('../Photo/CarrefourLogoSM.webp')}/>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="Signup">Sign in</MDBNavLink>
                  </MDBNavItem>
                  
                </MDBNavbarNav>
                
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
      
      <MDBView src={require('../Photo/background.jpg')}>
        <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <center>
                <img style={{width:'35%'}} src={require('../Photo/Majid_logo.png')}/>
                </center>
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">DUTY MANAGER</h1>
                <hr className="hr-light my-4" />
                <h5 className="text-uppercase mb-4 white-text "><strong>WELCOME</strong></h5>
                <Link to="/login"><MDBBtn outline color="white">Login</MDBBtn></Link>
                <Link to="Signup"><MDBBtn outline color="white">Sign in</MDBBtn></Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </Fragment>
  );
}

export default HomeScreen;
