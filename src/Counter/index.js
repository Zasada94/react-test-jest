import { useState } from "react";

function Counter({ initialValue = 0 }) {
	const [count, setCount] = useState(initialValue);

	const decrement = () => {
		setCount(count - 1);
	};

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<section data-testid="counter">
			<h2>Counter</h2>
			<h4 data-testid="counter-value">{count}</h4>
			<button type="button" onClick={decrement}>
				MINUS
			</button>
			<button type="button" onClick={increment}>
				PLUS
			</button>
		</section>
	);
}

export default Counter;
