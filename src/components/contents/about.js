import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const About = () => {
	return <div>
		<MDBContainer>
			<MDBRow className="pt-5 pb-4">
				<MDBCol md="12" className="text-center">
					<h1 className="content-heading">About the Template</h1>
					<p className="hero-line animated fadeInUp">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla eros, efficitur non viverra vel, gravida quis arcu. Vivamus egestas viverra diam, eget dapibus eros pellentesque a. Fusce condimentum lorem ipsum, vitae finibus turpis mattis ut. Phasellus fermentum porttitor ullamcorper. Nullam pretium tellus eleifend, bibendum massa nec, viverra felis. Vivamus pretium eleifend euismod. Integer ut leo et eros dictum laoreet id ullamcorper purus. Praesent maximus egestas lectus vel convallis. Proin risus magna, maximus at nisl in, tincidunt mollis metus. Maecenas viverra facilisis tortor, ut faucibus magna semper eu. Sed vitae ante a neque finibus porta. In efficitur porta nunc, ac convallis sem ornare eget. Mauris aliquet faucibus ultricies. Praesent malesuada, nulla eget commodo pellentesque, diam sapien dignissim quam, eleifend blandit nibh arcu ac eros.
					</p>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	</div>
}

export default About;
