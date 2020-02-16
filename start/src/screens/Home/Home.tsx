import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { naviagtion } from "../../navigations/navagation";

const Home: React.FC = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Open up Home.tsx to start working on your Home!</Text>
			<Button
				title="ImageList"
				onPress={() => navigation.navigate(naviagtion.IMAGE_LIST)}
			/>
			<Button
				title="Counter"
				onPress={() => navigation.navigate(naviagtion.COUNTER)}
			/>
			<Button
				title="Color"
				onPress={() => navigation.navigate(naviagtion.COLOR)}
			/>
			<Button
				title="name"
				onPress={() => navigation.navigate(naviagtion.NAME_IN_OUT)}
			/>
			<Button
				title="name"
				onPress={() => navigation.navigate(naviagtion.BOXES)}
			/>
		</View>
	);
};

export default Home;
