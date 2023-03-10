import React from "react";

interface MathProps {
	Mathvalue: string;
	onselectMathValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function MathsInput({
	Mathvalue,
	onselectMathValue,
}: MathProps) {
	return (
		<>
			<label htmlFor='MathInput'>What is 2+2:</label>
			<select id='MathInput' name='MathInput' onChange={onselectMathValue}>
				<option value='Not 4'>Not 4</option>
				<option value='4'>4</option>
			</select>
		</>
	);
}
