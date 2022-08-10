import React, { useState } from "react";

const UseState = () => {
	const [number, setNumber] = useState(0);

	const handleIncrement = () => {
		setNumber(number + 1);
	};

	const incrementAsync = () => {
		setTimeout(() => {
			setNumber((currentNumber) => currentNumber + 1);
		}, 2000);
	};

	return (
		<div>
			<button onClick={handleIncrement}>Increase</button>
			<button onClick={incrementAsync}>Async Increase</button>
			<h1>{number}</h1>
		</div>
	);
};

export default UseState;
