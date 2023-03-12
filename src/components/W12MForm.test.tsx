import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MForm from "./W12MForm";

// Code to simplify Entering Tests
const FormEntry = async (
	input: string,
	formitem: "Species" | "Planet" | "Being" | "Math" | "Reason"
) => {
	switch (formitem) {
		case "Species": {
			let selectBox = screen.getByLabelText("Species Name:");
			await userEvent.clear(selectBox);
			await userEvent.type(selectBox, input);
			break;
		}
		case "Planet": {
			let selectBox = screen.getByLabelText("Planet Name:");
			await userEvent.clear(selectBox);
			await userEvent.type(selectBox, input);
			break;
		}
		case "Being": {
			let selectBox = screen.getByLabelText("Beings Count:");
			await userEvent.clear(selectBox);
			await userEvent.type(selectBox, input);
			break;
		}
		case "Math": {
			let selectBox = screen.getByLabelText("What is 2+2:");
			if (input === "4" || input === "Y" || input === "P") {
				await userEvent.selectOptions(selectBox, "4");
			} else {
				await userEvent.selectOptions(selectBox, "Not 4");
			}
			break;
		}
		case "Reason": {
			let selectBox = screen.getByLabelText("Reason for Sparing:");
			await userEvent.clear(selectBox);
			await userEvent.type(selectBox, input);
			break;
		}
	}
};

const SetupTest = () => {
	render(<W12MForm />);
};

const FormSubmit = async () => {
	const button = screen.getByRole("button");
	await userEvent.click(button);
};

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

// Form Input tests
describe("Form Tests", () => {
	// Tests for Species Inputs
	describe("Species Tests", () => {
		beforeEach(async () => {
			SetupTest();
		});

		test("Should Render error for species", async () => {
			await FormEntry("A", "Species");
			const error = screen.queryByText(
				"Must be between 3 and 23 Characters. No Number or Special Characters are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should Render error for species - Too Long", async () => {
			await FormEntry(
				"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				"Species"
			);
			const error = screen.queryByText(
				"Must be between 3 and 23 Characters. No Number or Special Characters are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should Render error for species - Special Character", async () => {
			await FormEntry("AAA@", "Species");
			const error = screen.queryByText(
				"Must be between 3 and 23 Characters. No Number or Special Characters are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should Render error for species - Number", async () => {
			await FormEntry("AAA2", "Species");
			const error = screen.queryByText(
				"Must be between 3 and 23 Characters. No Number or Special Characters are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should not Render error for species", async () => {
			await FormEntry("TestSpecies", "Species");
			const error = screen.queryByText(
				"Must be between 3 and 23 Characters. No Number or Special Characters are allowed."
			);
			expect(error).not.toBeInTheDocument();
		});
	});

	//Tests for Planet Input
	describe("Planet Tests", () => {
		beforeEach(async () => {
			SetupTest();
		});

		test("Should Render error for Planet", async () => {
			await FormEntry("A", "Planet");
			const error = screen.queryByText(
				"Must be between 2 and 49 Characters. No Special Characters are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should Render error for Planet - Too Long", async () => {
			await FormEntry(
				"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				"Planet"
			);
			const error = screen.queryByText(
				"Must be between 2 and 49 Characters. No Special Characters are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should not Render error for Planet", async () => {
			await FormEntry("Planet", "Planet");
			const error = screen.queryByText(
				"Must be between 2 and 49 Characters. No Special Characters are allowed."
			);
			expect(error).not.toBeInTheDocument();
		});

		test("Should Render error for Planet - Special Character", async () => {
			await FormEntry("ABB@", "Planet");
			const error = screen.queryByText(
				"Must be between 2 and 49 Characters. No Special Characters are allowed."
			);
			expect(error).toBeInTheDocument();
		});
	});

	//Tests for Being Input
	describe("Being Tests", () => {
		beforeEach(async () => {
			SetupTest();
		});

		test("Should Render error for Being", async () => {
			await FormEntry("125", "Being");
			const error = screen.queryByText(
				"Number must be higher than 1000000. Only numbers are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should Render error for Being - NonNumeric", async () => {
			await FormEntry("1250000A", "Being");
			const error = screen.queryByText(
				"Number must be higher than 1000000. Only numbers are allowed."
			);
			expect(error).toBeInTheDocument();
		});

		test("Should not Render error for Being", async () => {
			await FormEntry("1250000", "Being");
			const error = screen.queryByText(
				"Number must be higher than 1000000. Only numbers are allowed."
			);
			expect(error).not.toBeInTheDocument();
		});
	});

	//Test for Maths Selection Box
	describe("Math Tests", () => {
		beforeEach(async () => {
			SetupTest();
		});

		test("Should Render error for Maths Quesion", async () => {
			await FormEntry("", "Math");
			const error = screen.queryByText("...Really?");
			expect(error).toBeInTheDocument();
		});

		test("Shouldn't Render error for correct answer", async () => {
			await FormEntry("4", "Math");
			const error = screen.queryByText("...Really?");
			expect(error).not.toBeInTheDocument();
		});
	});

	//Test for Reason Inputs
	describe("Reason Tests", () => {
		beforeEach(async () => {
			SetupTest();
		});

		test("Should Render error for Reason - Too Short", async () => {
			await FormEntry("A", "Reason");
			const error = screen.queryByText("Must be between 17 and 153 characters");
			expect(error).toBeInTheDocument();
		});

		test("Should Render error for Reason - Too Long", async () => {
			await FormEntry(
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar mi vel est consectetur eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar mi vel est consectetur eleifend.",
				"Reason"
			);
			const error = screen.queryByText("Must be between 17 and 153 characters");
			expect(error).toBeInTheDocument();
		});

		test("Should Not Render Error for Reason", async () => {
			await FormEntry(
				"Hello this is a sentance of correct length to pass!",
				"Reason"
			);
			const error = screen.queryByText("Must be between 17 and 153 characters");
			expect(error).not.toBeInTheDocument();
		});
	});
});
