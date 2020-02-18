import React, { useContext } from "react";
import { View } from "react-native";
import styles from "./styles";
import { Route, useRoute, useNavigation } from "@react-navigation/native";
import { Context } from "../../context/BlogContext";
import { BlogForm } from "../../components/BlogForm";

interface IRoutes extends Route<"EDIT"> {
	params: { id: string };
}

interface IProps {}

const EditBlogPostScreen: React.FC<IProps> = () => {
	const {
		params: { id }
	} = useRoute<IRoutes>();
	const navigator = useNavigation();

	const { state, editBlogPost } = useContext(Context);
	const data = state.find(blog => blog.id === id);

	const onSubmitHandler = (title: string, text: string) => {
		editBlogPost(id, title, text);
		navigator.goBack();
	};

	return (
		<View style={styles.container}>
			<BlogForm
				onSubmitHandler={onSubmitHandler}
				initialText={data.text}
				initialTitle={data.title}
			/>
		</View>
	);
};

export default EditBlogPostScreen;
