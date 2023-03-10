import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MathsInput from "./Maths";

describe("Rendering checks", () => {
	test("Rendering", () => {
		const MathsState = "QuickMaths";

		render(
			<MathsInput
				Mathvalue={MathsState}
				onselectMathValue={(e: any) => {
					jest.fn(e.target.value);
				}}
			/>
		);
		const input = screen.queryByLabelText("What is 2+2:");
		expect(input).toBeInTheDocument();
	});
});

describe("Input checks", () => {
	const Mathstate = "";
	const mockfunction = jest.fn();
	test("Should call function", async () => {
		render(
			<MathsInput
				Mathvalue={Mathstate}
				onselectMathValue={mockfunction((e: any) => e.target.value)}
			/>
		);
		const input = screen.getByLabelText("What is 2+2:");
		await userEvent.selectOptions(input, "4");
		expect(mockfunction).toHaveBeenCalled();
		expect(input).toHaveValue("4");
	});
});
