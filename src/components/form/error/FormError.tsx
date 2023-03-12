import React from "react";

interface FormErrorProps {
	Erroritem: "Species" | "Planet" | "Being" | "Math" | "Reason";
}

export default function FormError({ Erroritem }: FormErrorProps) {
	let ErrorMessage = "Something went horribly wrong if you got this message.";
	switch (Erroritem) {
		case "Species":
			ErrorMessage =
				"Must be between 3 and 23 Characters. No Number or Special Characters are allowed.";
			break;
		case "Planet":
			ErrorMessage =
				"Must be between 2 and 49 Characters. No Special Characters are allowed.";
			break;
		case "Being":
			ErrorMessage =
				"Number must be higher than 1000000. Only numbers are allowed.";
			break;
		case "Math":
			ErrorMessage = "...Really?";
			break;
		case "Reason":
			ErrorMessage = "Must be between 17 and 153 characters";
			break;
	}

	return <div>{ErrorMessage}</div>;
}
