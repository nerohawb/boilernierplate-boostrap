import React, { Fragment } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const Hero = () => {
	return <div>
		<MDBView className="hero">
		  <MDBMask className="flex-center flex-column text-white text-center">
			 <div>
				 <h1 className="hero-heading animated fadeInUp delay-1s font-weight-bolder">Boilnierplate Series</h1>
				 <hr class="hero-line animated fadeInUp" />
				 <div className="animated fadeInUp delay-2s">
					 <h5>React + MDBoostrap Landing Page Template</h5>
					<MDBBtn className="btn-rounded" color="info" >Get Started</MDBBtn>
				 </div>
			 </div>
		  </MDBMask>
		</MDBView>



	</div>
}

export default Hero;
