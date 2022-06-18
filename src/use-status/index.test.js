import useStatus from "./";
import { render, screen } from "@testing-library/react";

function Host({ hp }) {
	const status = useStatus(hp);

	return <p data-testid="status">{status}</p>;
}

describe("useStatus", () => {
	it("should return PERFECT when hp is above 75", () => {
		render(<Host hp={99} />);
		const status = screen.getByTestId("status");
		expect(status).toHaveTextContent("PERFECT");
	});
});

describe("useStatus", () => {
	it("should return INJURED when hp is above 25", () => {
		render(<Host hp={26} />);
		const status = screen.getByTestId("status");
		expect(status).toHaveTextContent("INJURED");
	});
});

describe("useStatus", () => {
	it("should return PCRITICAL when hp is above 0", () => {
		render(<Host hp={1} />);
		const status = screen.getByTestId("status");
		expect(status).toHaveTextContent("CRITICAL");
	});
});

describe("useStatus", () => {
	it("should return PCRITICAL when hp is 0", () => {
		render(<Host hp={0} />);
		const status = screen.getByTestId("status");
		expect(status).toHaveTextContent("DEAD");
	});
});
