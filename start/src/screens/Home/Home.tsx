import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Open up Home.tsx to start working on your Home!</Text>
			<Button title="hello" onPress={() => navigation.navigate("List")} />
			<TouchableOpacity onPress={() => console.log("pressed")}>
				<Text>Bye</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

export default Home;
