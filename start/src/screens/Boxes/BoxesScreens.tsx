import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface IProps {}

const BoxesScreens: React.FC<IProps> = () => {
	return (
		<View style={styles.container}>
			<View style={styles.red} />
			<View style={styles.purple} />
			<View style={styles.green} />
		</View>
	);
};

export default BoxesScreens;
