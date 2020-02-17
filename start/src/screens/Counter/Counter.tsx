import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../components/Input";

interface IProps {}

const CounterScreens: React.FC<IProps> = () => {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<Text>{count}</Text>
			<Button title={"add"} onPress={() => setCount(count + 1)} />
			<Button title={"minus"} onPress={() => setCount(count - 1)} />
		</View>
	);
};

export default CounterScreens;
