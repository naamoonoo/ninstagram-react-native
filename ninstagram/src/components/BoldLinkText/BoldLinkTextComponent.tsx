import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface IProps {
	text: string;
	onPressHandler: () => void;
}

const BoldLinkTextComponent: React.FC<IProps> = ({ text, onPressHandler }) => {
	const navigator = useNavigation();

	return (
		<Text style={styles.text} onPress={onPressHandler}>
			{text}
		</Text>
	);
};

export default BoldLinkTextComponent;
