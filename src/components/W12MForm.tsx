import { useState } from "react";
import BeingsInput from "./form/Beings";
import MathsInput from "./form/Maths";
import { PlanetInput } from "./form/Planet";
import SparingInput from "./form/Sparing";
import SpeciesInput from "./form/Species";
import W12MHeader from "./W12MHeader";

const W12MForm = () => {
	const [speciesState, setspeciesState] = useState<string>("");
	const [planetState, setPlanetState] = useState<string>("");
	const [beingsState, setBeingsState] = useState<string>("");
	const [mathState, setMathState] = useState<string>("Not 4");
	const [reasonState, setReasonState] = useState<string>("");

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesInput
				speciesName={speciesState}
				onChangeSpeciesName={(e: any) => setspeciesState(e.target.value)}
			/>
			<PlanetInput
				planetName={planetState}
				onChangePlanetName={(e: any) => setPlanetState(e.target.value)}
			/>
			<BeingsInput
				beingsCount={beingsState}
				onChangeBeingsCount={(e: any) => setBeingsState(e.target.value)}
			/>
			<MathsInput
				Mathvalue={mathState}
				onselectMathValue={(e: any) => setMathState(e.target.value)}
			/>
			<SparingInput
				SparingReason={reasonState}
				onChangeSparingreason={(e: any) => setReasonState(e.target.value)}
			/>
			<button
				id='Button'
				onClick={(e: any) => {
					console.log(
						speciesState,
						planetState,
						beingsState,
						mathState,
						reasonState
					);
				}}
			>
				Submit
			</button>
		</section>
	);
};

export default W12MForm;
