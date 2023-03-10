import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PlanetInput } from "./Planet";

const mockfunction = jest.fn();

const setuptest = async () => {
	render(
		<PlanetInput
			planetName=''
			onChangePlanetName={(e: any) => {
				mockfunction(e.target.value);
			}}
		/>
	);
};

describe("render test", () => {
	beforeEach(async () => {
		await setuptest();
	});

	test("should render", () => {
		const input = screen.queryByLabelText("Planet Name:");
		expect(input).toBeInTheDocument();
	});
});

describe("Input tests", () => {
	beforeEach(async () => {
		await setuptest();
	});

	test("Check input function called", async () => {
		const input = screen.getByLabelText("Planet Name:");
		await userEvent.clear(input);
		await userEvent.keyboard("Mars");
		expect(mockfunction).toBeCalled();
		const sum = mockfunction.mock.calls.join("");
		expect(sum).toBe("Mars");
	});
});
