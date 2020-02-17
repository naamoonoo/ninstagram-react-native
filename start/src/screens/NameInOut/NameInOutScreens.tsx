import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../components/Input";

interface IProps {}

const NameInOutScreens: React.FC<IProps> = () => {
	const [name, setName] = useState("");

	return (
		<View style={styles.container}>
			<Input value={name} onChangeText={text => setName(text)} />
			<Text>My name is {name}</Text>
		</View>
	);
};

export default NameInOutScreens;
