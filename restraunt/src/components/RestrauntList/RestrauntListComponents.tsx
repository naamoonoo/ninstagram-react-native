import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { RestrauntDetail } from "../RestrauntDetail";

interface IProps {
	title: string;
	data: any[];
}

const RestrauntListComponents: React.FC<IProps> = ({ title, data }) => {
	if (!data) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data={data}
				keyExtractor={data => data.id}
				renderItem={({ item }) => <RestrauntDetail {...item} />}
				showsHorizontalScrollIndicator={false}
			></FlatList>
		</View>
	);
};

export default RestrauntListComponents;
