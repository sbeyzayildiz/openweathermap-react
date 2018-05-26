import React from "react";

const Header = () => (
	<div>
	<div className="site-header">
	<div className="container">
	<div  className="branding">
		<img src="images/logo.png" alt="" className="logo" />
		<div className="logo-type">
			<h1 className="site-title">Beyza  Şahin</h1>
			<small className="site-description">Hava Durumu v1.1</small>
		</div>
	</div>

	<div className="main-navigation">
		<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
		<ul className="menu">
			<li className="menu-item"><span>İstanbul</span></li>
			<li className="menu-item"><span>Ankara</span></li>
			<li className="menu-item"><span>İzmir</span></li>
			<li className="menu-item"><span>Trabzon</span></li>
			<li className="menu-item"><span>Antalya</span></li>
		</ul> 
	</div> 	
	<div className="mobile-navigation"></div>			
	</div>			
	</div>
	</div>
);

export default Header;