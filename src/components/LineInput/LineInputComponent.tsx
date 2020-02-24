import React from "react";
import { View, Text, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { GRAY_LIGHT, GRAY_MEDIUM } from "../../styles/colors";

interface IProps {
	value: string;
	onChangeHandler: (text: string) => void;
	placeholder?: string;
	focus?: boolean;
	onSubmit?: () => void;
}

const LineInputComponent: React.FC<IProps> = ({
	value,
	onChangeHandler,
	placeholder = "place to write",
	focus = false,
	onSubmit
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				autoFocus={focus}
				value={value}
				onChangeText={onChangeHandler}
				placeholder={placeholder}
				style={styles.input}
				multiline={true}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<View style={styles.icons}>
				{/* {value.length > 0 && (
					// <Text>hello</Text>
					<Feather name="delete" onPress={onDelete} size={18} />
				)} */}

				{onSubmit && value.length > 0 && (
					<AntDesign
						name="enter"
						onPress={onSubmit}
						size={18}
						style={styles.submit}
					/>
				)}
			</View>
		</View>
	);
};

export default LineInputComponent;
