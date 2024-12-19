import React, { useEffect, useState } from "react";

import FilterCafes from "./FilterCafes.jsx";

const CafesTable = () => {
	const [cafes, setCafes] = useState([]);
	const [displayCafes, setDisplayCafes] = useState([]);

	const filterCafes = (e) => {
		console.log(e.target.value, cafes);

		if (e.target.value === "All") {
			setDisplayCafes(cafes);
		} else {
			setDisplayCafes(cafes.filter((cafe) => cafe.subwayCode === e.target.value));
		}
	};

	useEffect(() => {
		fetch("/cafes")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCafes(data.cafes);
				setDisplayCafes(data.cafes);
			});
	}, []);
	return (
		<div className="cafesTable">
			<FilterCafes filterCafes={filterCafes} />
			<ul className="cardsList">
				{displayCafes.map((cafe) => (
					<li className="card" key={cafe.id}>
						<img src={cafe.img || "https://via.placeholder.com/150"} alt="" />
						<h2>{cafe.name}</h2>
						<p>{cafe.desc}</p>
						<p>{cafe.address}</p>
						<p>Метро: {cafe.name}</p>
						<p>{cafe.workTime}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CafesTable;
