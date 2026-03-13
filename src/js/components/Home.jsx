import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digit from "./Digit";

//create your first component
const Home = ({seconds}) => {
	const count = String(seconds).padStart(6, '0').split('');
	return (
		<div className="container-fluid bg-dark d-flex justify-content-center align-items-center p-4">
			<Digit num={<i class="fa-regular fa-clock"></i>} />

        	{count.map((digit, i) => (<Digit key={i} num={digit} />))}
		</div>
	);
};

export default Home;