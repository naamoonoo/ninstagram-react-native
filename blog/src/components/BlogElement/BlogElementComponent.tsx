import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";

interface IProps {
	id: string;
	title: string;
	onPressHandler: any;
}

const BlogElementComponent: React.FC<IProps> = ({
	title,
	id,
	onPressHandler
}) => {
	const navigator = useNavigation();
	return (
		<View style={styles.container}>
			<Text
				style={styles.title}
				onPress={() => navigator.navigate(routes.BLOG, { id })}
			>
				{title}
			</Text>
			<Feather
				style={styles.icon}
				name="trash"
				size={25}
				onPress={onPressHandler}
			/>
		</View>
	);
};

export default BlogElementComponent;
