import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MForm from "./W12MForm";

test("renders form element", () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass("w12MForm");
});

test("Button submission test", async () => {
	render(<W12MForm />);
	const button = screen.getByRole("button");
	const mockfunction = jest.fn();
	button.onclick = (e: any) => mockfunction(e.target.value);
	await userEvent.click(button);
	expect(mockfunction).toBeCalled();
});
