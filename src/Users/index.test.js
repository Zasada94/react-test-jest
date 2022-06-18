import { act, render, screen } from "@testing-library/react";
import Users from "./";
import axios from "axios";

jest.mock("axios");

describe("Users", () => {
	it("should render users list", async () => {
		axios.get.mockResolvedValue({
			data: [
				{ id: 1, name: "Jan Kowalski" },
				{ id: 2, name: "Justyna Iksińska" },
			],
		});
		await act(async () => {
			await render(<Users />);
		});
		const user1 = screen.getByText("Jan Kowalski");
		const user2 = screen.getByText("Justyna Iksińska");
		expect(user1).toBeInTheDocument();
		expect(user2).toBeInTheDocument();
	});

	it("should not render users list when request fails", async () => {
		axios.get.mockRejectedValueOnce(null);
		await act(async () => {
			await render(<Users />);
		});
		const usersList = screen.getByTestId("users-list");

		expect(usersList).toBeEmptyDOMElement();
	});
});
