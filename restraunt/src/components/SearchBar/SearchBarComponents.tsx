import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

interface IProps {
	value: string;
	onChangeHandler?: (text: string) => void;
	onSubmitHandler?: () => void;
	onDeleteHandler?: () => void;
}

const SearchBarComponents: React.FC<IProps> = ({
	value,
	onChangeHandler,
	onSubmitHandler,
	onDeleteHandler
}) => {
	const valueExisted = value && value.length > 0 ? true : false;
	return (
		<View style={styles.container}>
			<Feather name="search" size={30} onPress={onSubmitHandler} />
			<TextInput
				style={styles.input}
				placeholder={"search"}
				value={value}
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={onChangeHandler}
				onEndEditing={onSubmitHandler}
			/>
			{valueExisted && (
				<Feather name="delete" size={25} onPress={onDeleteHandler} />
			)}
		</View>
	);
};

export default SearchBarComponents;
