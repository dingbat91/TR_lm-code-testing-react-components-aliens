import React from "react";

interface SpraingProps {
	SparingReason: string;
	onChangeSparingreason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function SparingInput({
	SparingReason,
	onChangeSparingreason,
}: SpraingProps) {
	return (
		<>
			<label htmlFor='ReasonInput'>Reason for Sparing:</label>
			<textarea
				id='ReasonInput'
				name='ReasonInput'
				onChange={onChangeSparingreason}
			></textarea>
		</>
	);
}
