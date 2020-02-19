import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface IProps {}

const HomeScreens: React.FC<IProps> = () => {
	return (
		<View style={styles.container}>
			<Text>HomeScreens</Text>
		</View>
	);
};

export default HomeScreens;
