import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BeingsInput from "./Beings";

test("Rendering", () => {
	const beingState = "testval";

	render(
		<BeingsInput
			beingsCount={beingState}
			onChangeBeingsCount={(e: any) => jest.fn(e.target.value)}
		/>
	);

	const input = screen.queryByLabelText("Beings Count:");
	expect(input).toBeInTheDocument();
});

describe("input checks", () => {
	test("onChange test", async () => {
		const mockfunction = jest.fn();
		render(
			<BeingsInput
				beingsCount=''
				onChangeBeingsCount={(e: any) => mockfunction(e.target.value)}
			/>
		);
		const input = screen.getByLabelText("Beings Count:");

		await userEvent.type(input, "Hello");
		expect(mockfunction).toBeCalled();
		expect(mockfunction.mock.calls.join("")).toBe("Hello");
	});
});
