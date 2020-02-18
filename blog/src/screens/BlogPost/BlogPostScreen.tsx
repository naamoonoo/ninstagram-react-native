import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useRoute, Route } from "@react-navigation/native";
import { Context } from "../../context/BlogContext";

interface IRoute extends Route<"BLOG"> {
	params: {
		id: string;
	};
}

interface IProps {}

const BlogPostScreen: React.FC<IProps> = () => {
	const {
		params: { id }
	} = useRoute<IRoute>();

	const { state } = useContext(Context);
	const data = state.find(blog => blog.id === id);

	return (
		<View style={styles.container}>
			<Text>{data.title}</Text>
		</View>
	);
};

export default BlogPostScreen;
