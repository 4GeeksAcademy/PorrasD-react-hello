import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const cards = [
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	},
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 2",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	},
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 3",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	},
	{
		image: "https://picsum.photos/200/300",
		title: "Card title 4",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
	}
];

const home = () => {
	return (
		<div className="container">
			<div>
				<NavBar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row">
					{cards.map((item, index) =>
						<div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
							<Card cards={item} />
						</div>
					)
					}
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default home;
