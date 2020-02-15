import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

const List = () => {
	const friends = [
		{ name: "friends #1", age: 21 },
		{ name: "friends #2", age: 22 },
		{ name: "friends #3", age: 23 },
		{ name: "friends #4", age: 24 },
		{ name: "friends #5", age: 25 },
		{ name: "friends #6", age: 26 },
		{ name: "friends #7", age: 27 },
		{ name: "friends #8", age: 28 },
		{ name: "friends #9", age: 29 }
	];
	return (
		<FlatList
			keyExtractor={({ name }) => name}
			data={friends}
			renderItem={({ item }) => (
				<Text style={S.text}>
					{item.name} - Age : {item.age}
				</Text>
			)}
		/>
	);
};

const S = StyleSheet.create({
	text: {
		fontSize: 30,
		marginVertical: 50
	}
});

export default List;
