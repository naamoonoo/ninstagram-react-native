import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import { HashTag } from "../HashTag";

interface IProps {
	text: string;
}

const FeedTextComponent: React.FC<IProps> = ({ text }) => {
	const data = text.split(" ");
	const renderText = word => {
		if (word.startsWith("#")) {
			return <HashTag word={`${word} `} />;
		} else {
			return <Text>{word} </Text>;
		}
	};

	return (
		<FlatList
			style={styles.container}
			data={data}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => renderText(item)}
		/>
	);
};

export default FeedTextComponent;
