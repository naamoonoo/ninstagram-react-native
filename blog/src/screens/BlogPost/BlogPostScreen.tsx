import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useRoute, Route, useNavigation } from "@react-navigation/native";
import { Context } from "../../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { routes } from "../../navigations/routes";

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
	const navigator = useNavigation();

	const { state } = useContext(Context);
	const data = state.find(blog => blog.id === id);

	navigator.setOptions({
		headerRight: () => {
			return (
				<Feather
					name="edit"
					size={30}
					style={{ marginRight: 10 }}
					onPress={() => navigator.navigate(routes.EDIT, { id })}
				/>
			);
		}
	});

	return (
		<View style={styles.container}>
			<Text>{data.title}</Text>
			<Text>{data.text}</Text>
		</View>
	);
};

export default BlogPostScreen;
