import React from "react";
import {
	View,
	Text,
	ListView,
	FlatList,
	Image,
	TouchableWithoutFeedback
} from "react-native";
import styles from "./styles";
import { GetUserById_GetUserById_user_feeds } from "../../types/api";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";
import { Feed } from "../Feed";

interface IProps {
	feeds: GetUserById_GetUserById_user_feeds[];
}

const PhotoPartitionComponent: React.FC<IProps> = ({ feeds }) => {
	const navigator = useNavigation();

	return (
		<FlatList
			style={styles.container}
			data={feeds}
			keyExtractor={feed => feed.id}
			// contentContainerStyle={{}}
			renderItem={({ item }) => (
				// <TouchableWithoutFeedback
				// 	onPress={() =>
				// 		navigator.navigate(routes.FEED, { feedId: item.id })
				// 	}
				// >
				<Image source={{ uri: item.photo }} style={styles.image} />
				// </TouchableWithoutFeedback>
			)}
		/>
	);

	// <View style={styles.container}><Text>PhotoPartitionComponent</Text></View>;
};

export default PhotoPartitionComponent;
