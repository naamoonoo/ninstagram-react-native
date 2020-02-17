import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { SearchBar } from "../../components/SearchBar";
import { useResults } from "../../hooks/useResults";
import { RestrauntList } from "../../components/RestrauntList";

interface IProps {}

const HomeScreens: React.FC<IProps> = () => {
	const [input, setInput] = useState("");
	const [results, getData] = useResults();

	const filteredData = {};
	results.forEach(data => {
		if (data && data.price) {
			const key = data.price.length;
			if (filteredData[key]) {
				filteredData[key].push(data);
			} else {
				filteredData[key] = [data];
			}
		}
	});

	return (
		<View style={styles.container}>
			<SearchBar
				value={input}
				onChangeHandler={text => setInput(text)}
				onDeleteHandler={() => setInput("")}
				onSubmitHandler={async () => await getData(input)}
			/>
			<ScrollView style={styles.list}>
				<RestrauntList title={"Cheap"} data={filteredData[1]} />
				<RestrauntList title={"Medium"} data={filteredData[2]} />
				<RestrauntList title={"Expensive"} data={filteredData[3]} />
			</ScrollView>
		</View>
	);
};

export default HomeScreens;
