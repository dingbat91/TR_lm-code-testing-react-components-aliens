import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SparingInput from "./Sparing";

const mockfunction = jest.fn();
const setuptest = async () => {
	render(
		<SparingInput
			SparingReason=''
			onChangeSparingreason={(e) => {
				mockfunction(e.target.value);
			}}
		/>
	);
};

describe("Render tests", () => {
	beforeEach(async () => {
		await setuptest();
	});

	test("should render", () => {
		const input = screen.queryByLabelText("Reason for Sparing:");
		expect(input).toBeInTheDocument();
	});
});

describe("input tests", () => {
	beforeEach(async () => {
		await setuptest();
	});

	test("Should call input function and pass props", async () => {
		const input = screen.getByLabelText("Reason for Sparing:");
		await userEvent.clear(input);
		await userEvent.type(input, "Please don't kill us!");
		expect(mockfunction).toHaveBeenCalled();
		expect(mockfunction.mock.lastCall[0]).toContain("Please don't kill us!");
	});
});
