import { ReactEventHandler, useEffect, useRef, useState } from "react";

export const useTitle = (initialTitle: string) => {
	const [title, setTitle] = useState(initialTitle);

	const updateTitle = () => {
		const htmlTitle = document.querySelector("title");
		if (htmlTitle) {
			htmlTitle.innerText = title;
		}
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

export const useMultiInputs = (
	inputParams: string[]
): [
	{ [key: string]: string },
	(event: React.ChangeEvent<HTMLInputElement>) => void,
	string[],
	React.Dispatch<
		React.SetStateAction<{
			[key: string]: string;
		}>
	>
] => {
	const initialInput: { [key: string]: string } = {};

	inputParams.forEach(key => {
		return (initialInput[key] = "");
	});

	const [inputs, setInput] = useState(initialInput);

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value, name }
		} = event;

		setInput({ ...inputs, [name]: value });
	};
	return [inputs, onChangeHandler, inputParams, setInput];
};

export const useInputFocus = () => {
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (ref && ref.current) {
			ref.current.focus();
		}
	}, [ref, ref.current]);
	return ref;
};
