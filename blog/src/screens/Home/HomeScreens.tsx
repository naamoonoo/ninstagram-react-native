import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Context } from "../../context/BlogContext";
import { BlogElement } from "../../components/BlogElement";
import { IBlogContext } from "../../types/types";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { routes } from "../../navigations/routes";

interface IProps {}

const HomeScreens: React.FC<IProps> = () => {
	const { state: data, addBlogPost, deleteBlogPost } = useContext<
		IBlogContext
	>(Context);

	const navigator = useNavigation();
	navigator.setOptions({
		headerRight: () => {
			return (
				<Feather
					name="plus"
					size={30}
					style={{ marginRight: 10 }}
					onPress={() => navigator.navigate(routes.CREATE)}
				/>
			);
		}
	});

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
