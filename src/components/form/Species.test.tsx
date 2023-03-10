import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesInput from "./Species";

const mockfunction = jest.fn();
const setuptest = async () => {
	render(
		<SpeciesInput
			speciesName=''
			onChangeSpeciesName={(e: any) => {
				mockfunction(e.target.value);
			}}
		/>
	);
};

describe("Rendering tests", () => {
	beforeEach(async () => {
		await setuptest();
	});

	test("Should Render", () => {
		const input = screen.queryByLabelText("Species Name:");
		expect(input).toBeInTheDocument();
	});
});

describe("input Tests", () => {
	beforeEach(async () => {
		await setuptest();
	});

	test("should call onChange Function and pass params", async () => {
		const input = screen.getByLabelText("Species Name:");
		await userEvent.clear(input);
		await userEvent.type(input, "Hello");
		expect(mockfunction).toBeCalled();
		expect(mockfunction.mock.calls.join("")).toBe("Hello");
	});
});
