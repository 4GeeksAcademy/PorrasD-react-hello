import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const home = () => {
	return (
		<div className="container">
			<div>
				<NavBar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div style={{ marginBottom: '50px' }}>
				<Card />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default home;
