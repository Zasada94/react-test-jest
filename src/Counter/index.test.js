import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter", () => {
	it("should render without initial value", () => {
		render(<Counter />);
		const counterValue = screen.getByTestId("counter-value");

		expect(counterValue).toHaveTextContent(0);
	});

	it("should render with initial value", () => {
		render(<Counter initialValue={20} />);
		const counterValue = screen.getByTestId("counter-value");

		expect(counterValue).toHaveTextContent(0);
	});

	it("should decrement its value", () => {
		render(<Counter initialValue={100} />);
		const minusButton = screen.getByText("MINUS");
		const counterValue = screen.getByTestId("counter-value");
		userEvent.click(minusButton);
		expect(counterValue).toHaveTextContent(99);
	});
	it("should increment its value", () => {
		render(<Counter initialValue={100} />);
		const plusButton = screen.getByText("PLUS");
		const counterValue = screen.getByTestId("counter-value");
		userEvent.click(plusButton);
		expect(counterValue).toHaveTextContent(101);
	});
});
