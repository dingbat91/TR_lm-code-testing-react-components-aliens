import React from "react";

interface SpeciesProps {
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SpeciesInput({
	speciesName,
	onChangeSpeciesName,
}: SpeciesProps) {
	return (
		<>
			<label htmlFor='SpeciesInput'>Species Name:</label>
			<input
				id='SpeciesInput'
				name='SpeciesInput'
				type='text'
				value={speciesName}
				onChange={onChangeSpeciesName}
			/>
		</>
	);
}
