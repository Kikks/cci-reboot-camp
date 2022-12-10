import React from "react";
import Countdown from "../../components/Countdown";
import Experience from "../../components/Experience";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Help from "../../components/Help";
import Merchandise from "../../components/Merchandise";
import Partner from "../../components/Partner";
import Register from "../../components/Register";
import Schedule from "../../components/schedule";

const Home = () => {
	return (
		<div>
			<Header />
			<Countdown />
			<Gallery />
			<Register />
			<Experience />
      <Schedule />
      <Help />
      <Partner />
			<Merchandise />
			<Footer />
		</div>
	);
};

export default Home;
