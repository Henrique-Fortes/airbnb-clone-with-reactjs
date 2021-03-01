import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p>62 stays . 26 august to 30 august . 2 guest</p>
				<h1>Stays nearby</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and beds</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult
				img="https://a0.muscache.com/im/pictures/590f28e0-0c9d-4545-81ef-633ea427820a.jpg?im_w=1440"
				location="Toronto, Ontario, Canada"
				title="Upscale 60th Floor Condominium in the Clouds"
				description="Drink in unobstructed CN Tower and lake views from the floor-to-ceiling windows of this executive-style condo. There’s a cozy ambiance to the neatly arrayed interior, which hosts an intuitively designed layout maximizing on the compact space."
				star={4.95}
				price="$150 / night"
				total="$197 total"
			/>
			<SearchResult
				img="https://a0.muscache.com/im/pictures/590f28e0-0c9d-4545-81ef-633ea427820a.jpg?im_w=1440"
				location="Toronto, Ontario, Canada"
				title="Upscale 60th Floor Condominium in the Clouds"
				description="Drink in unobstructed CN Tower and lake views from the floor-to-ceiling windows of this executive-style condo. There’s a cozy ambiance to the neatly arrayed interior, which hosts an intuitively designed layout maximizing on the compact space."
				star={4.95}
				price="$150 / night"
				total="$197 total"
			/>
		</div>
	);
}

export default SearchPage;
