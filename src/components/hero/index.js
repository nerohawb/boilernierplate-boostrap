import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const Hero = () => {
	return <div>
		<MDBView className="hero">
		  <MDBMask className="flex-center flex-column text-white text-center">
			 <div>
				 <h1 className="hero-heading animated fadeInUp">Boilnierplate Series</h1>
				 <div className="animated fadeInUp">
					 <h5>React + MDBoostrap Landing Page Template</h5>
				 </div>

			 </div>
		  </MDBMask>
		</MDBView>



	</div>
}

export default Hero;
