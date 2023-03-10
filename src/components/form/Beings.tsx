import React from "react";

interface BeingProps {
	beingsCount: string;
	onChangeBeingsCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BeingsInput({
	beingsCount,
	onChangeBeingsCount,
}: BeingProps) {
	return (
		<>
			<label htmlFor='BeingInput'>Beings Count:</label>
			<input
				name='BeingInput'
				id='BeingInput'
				type='text'
				value={beingsCount}
				onChange={onChangeBeingsCount}
			/>
		</>
	);
}
