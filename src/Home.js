import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<Card
					src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
					title="Pets allowed"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
					title="Unique stays"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=480"
					title="Cabins and cottages"
				/>
			</div>
			<div className="home__section">
				<Card
					src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480"
					title="Online Experiences"
					description="Travel the world without leaving home."
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=480"
					title="Experiences"
					description="Things to do wherever you are."
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=480"
					title="Adventures"
					description="Multi-day trips with meals and stays."
				/>
			</div>
		</div>
	);
}

export default Home;
