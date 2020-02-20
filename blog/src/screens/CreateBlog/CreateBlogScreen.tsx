import React, { useContext } from "react";
import { View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../context/BlogContext";
import { routes } from "../../navigations/routes";
import { BlogForm } from "../../components/BlogForm";

interface IProps {}

const CreateBlogScreen: React.FC<IProps> = () => {
	const navigator = useNavigation();
	const { addBlogPost } = useContext(Context);

	const onSubmitHandler = (title: string, text: string) => {
		addBlogPost(title, text);
		navigator.navigate(routes.HOME);
	};

	return (
		<View style={styles.container}>
			<BlogForm onSubmitHandler={onSubmitHandler} />
		</View>
	);
};

export default CreateBlogScreen;
