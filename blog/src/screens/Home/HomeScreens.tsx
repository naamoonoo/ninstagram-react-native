import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Context } from "../../context/BlogContext";
import { BlogElement } from "../../components/BlogElement";
import { IBlogContext } from "../../types/types";

interface IProps {}

const HomeScreens: React.FC<IProps> = () => {
	const { state: data, addBlogPost, deleteBlogPost } = useContext<
		IBlogContext
	>(Context);
	console.log(data);
	useEffect(() => {
		addBlogPost("hello", "bye");
		addBlogPost("a", "bye");
		addBlogPost("b", "bye");
		addBlogPost("c", "bye");
	}, []);
	console.log(data);
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={state => state.id}
				renderItem={({ item }) => (
					<BlogElement
						{...item}
						onPressHandler={() => deleteBlogPost(item.id)}
					/>
				)}
			/>
		</View>
	);
};

export default HomeScreens;
