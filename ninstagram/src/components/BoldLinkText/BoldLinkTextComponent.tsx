import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface IProps {
	text: string;
	path: string;
}

const BoldLinkTextComponent: React.FC<IProps> = ({ text, path }) => {
	const navigator = useNavigation();
	const onPressHandler = () => {
		navigator.navigate(path);
	};
	return (
		<Text style={styles.text} onPress={onPressHandler}>
			{text}
		</Text>
	);
};

export default BoldLinkTextComponent;
