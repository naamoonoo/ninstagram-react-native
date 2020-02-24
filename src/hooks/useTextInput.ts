import { useState } from "react";

export const useTextInput = (
	initialValue: string,
	validator?: ((arg: string) => boolean) | RegExp
): [
	string,
	(text: string) => void,
	React.Dispatch<React.SetStateAction<string>>
] => {
	const [value, setValue] = useState(initialValue);

	const onChange = (text: string) => {
		let isValidValue: boolean = true;
		if (validator) {
			if (typeof validator === "function") {
				isValidValue = validator(text);
			} else {
				isValidValue = validator.test(text);
			}
		}
		if (isValidValue) {
			setValue(text);
		}
	};

	return [value, onChange, setValue];
};
