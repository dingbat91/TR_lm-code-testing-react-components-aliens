import { useState } from "react";
import BeingsInput from "./form/Beings";
import FormError from "./form/error/FormError";
import MathsInput from "./form/Maths";
import { PlanetInput } from "./form/Planet";
import SparingInput from "./form/Sparing";
import SpeciesInput from "./form/Species";
import W12MHeader from "./W12MHeader";

type FormItems = "Species" | "Planet" | "Being" | "Math" | "Reason";

const W12MForm = () => {
	const [speciesState, setspeciesState] = useState<string>("");
	const [planetState, setPlanetState] = useState<string>("");
	const [beingsState, setBeingsState] = useState<string>("");
	const [mathState, setMathState] = useState<string>("Not 4");
	const [reasonState, setReasonState] = useState<string>("");
	const [speciesValid, setSpeciesValid] = useState<boolean>(false);
	const [planetValid, setPlanetValid] = useState<boolean>(false);
	const [beingValid, setBeingValid] = useState<boolean>(false);
	const [mathsValid, setMathsValid] = useState<boolean>(false);
	const [reasonValid, setReasonValid] = useState<boolean>(false);

	const Validation = (value: string, type: FormItems) => {
		switch (type) {
			case "Species":
				if (
					value.length >= 3 &&
					value.length <= 23 &&
					/[^a-z]/i.test(value) === false
				) {
					setSpeciesValid(true);
					break;
				} else {
					setSpeciesValid(false);
					break;
				}
			case "Planet":
				if (
					value.length >= 2 &&
					value.length <= 49 &&
					/[^a-z0-9]/i.test(value) === false
				) {
					setPlanetValid(true);
					break;
				} else {
					setPlanetValid(false);
					break;
				}
			case "Being":
				const numVal = +value;
				if (numVal >= 1000000 && /[^0-9]/i.test(value) === false) {
					setBeingValid(true);
					break;
				} else {
					setBeingValid(false);
					break;
				}
			case "Math":
				if (value === "4") {
					setMathsValid(true);
					break;
				} else {
					setMathsValid(false);
					break;
				}
			case "Reason":
				if (value.length >= 17 && value.length <= 153) {
					setReasonValid(true);
				} else {
					setReasonValid(false);
				}
		}
	};

	const findCulprit = (): Array<String> => {
		let output: Array<String> = [];

		if (!speciesValid) {
			output.push("Species");
		}
		if (!planetValid) {
			output.push("Planet");
		}
		if (!beingValid) {
			output.push("Beings");
		}
		if (!mathsValid) {
			output.push("Maths");
		}
		if (!reasonValid) {
			output.push("Reason");
		}
		return output;
	};

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesInput
				speciesName={speciesState}
				onChangeSpeciesName={(e: any) => {
					Validation(e.target.value, "Species");
					setspeciesState(e.target.value);
				}}
			/>
			{speciesValid !== true && <FormError Erroritem='Species' />}

			<PlanetInput
				planetName={planetState}
				onChangePlanetName={(e: any) => {
					Validation(e.target.value, "Planet");
					setPlanetState(e.target.value);
				}}
			/>
			{planetValid !== true && <FormError Erroritem='Planet' />}

			<BeingsInput
				beingsCount={beingsState}
				onChangeBeingsCount={(e: any) => {
					Validation(e.target.value, "Being");
					setBeingsState(e.target.value);
				}}
			/>
			{beingValid !== true && <FormError Erroritem='Being' />}

			<MathsInput
				Mathvalue={mathState}
				onselectMathValue={(e: any) => {
					Validation(e.target.value, "Math");
					setMathState(e.target.value);
				}}
			/>
			{mathsValid !== true && <FormError Erroritem='Math' />}

			<SparingInput
				SparingReason={reasonState}
				onChangeSparingreason={(e: any) => {
					Validation(e.target.value, "Reason");
					setReasonState(e.target.value);
				}}
			/>
			{reasonValid !== true && <FormError Erroritem='Reason' />}

			<button
				id='Button'
				onClick={(e: any) => {
					const valid: boolean = [
						speciesValid,
						planetValid,
						beingValid,
						mathsValid,
						reasonValid,
					].every((val) => val === true);
					if (valid) {
						console.log("WE SAVED EARTH!");
					} else {
						console.log("Oh no!");
						const error = findCulprit();
						console.error(
							`Form has failed validation in the following categories: ${[
								...error,
							]}`
						);
					}
				}}
			>
				Submit
			</button>
		</section>
	);
};

export default W12MForm;
