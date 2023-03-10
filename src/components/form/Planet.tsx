import React from "react";

interface PlanetProps {
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PlanetInput({ planetName, onChangePlanetName }: PlanetProps) {
	return (
		<>
			<label htmlFor='PlanetInput'>Planet Name:</label>
			<input
				id='PlanetInput'
				name='PlanetInput'
				type='text'
				value={planetName}
				onChange={onChangePlanetName}
			/>
		</>
	);
}
