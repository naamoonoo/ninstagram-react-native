import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";

interface IProps {
	value: string;
	onChangeText: (text: string) => void;
}

const InputComponents: React.FC<IProps> = ({ value, onChangeText }) => {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
			/>
		</View>
	);
};

export default InputComponents;
