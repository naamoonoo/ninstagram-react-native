import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
	id?: string;
	image_url?: string;
	name?: string;
	rating?: number;
	review_count?: string;
}

const RestrauntDetailComponents: React.FC<IProps> = ({
	id,
	image_url,
	name,
	rating,
	review_count
}) => {
	const navigatior = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigatior.navigate(routes.RESTRAUNT, { id })}
		>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: image_url }} />
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.detail}>
					{rating} stars, {review_count} reviews
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default RestrauntDetailComponents;
