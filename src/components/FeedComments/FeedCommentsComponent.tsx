import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { GetFeeds_GetFeeds_feeds_comments } from "../../types/api";
import { BoldLinkText } from "../BoldLinkText";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";

interface IProps {
	comments?: GetFeeds_GetFeeds_feeds_comments[];
}

const FeedCommentsComponent: React.FC<IProps> = ({ comments }) => {
	if (!comments || comments.length === 0) {
		return null;
	}

	const slicedComments =
		comments && comments.length > 2 ? comments.slice(0, 1) : comments;
	const navigator = useNavigation();
	return (
		// <View style={styles.container}>
		<FlatList
			data={slicedComments}
			keyExtractor={data => data.id}
			renderItem={({
				item: {
					user: { firstName, id },
					comment
				}
			}) => (
				<View>
					<BoldLinkText
						text={firstName}
						onPressHandler={() =>
							navigator.navigate(routes.USER, {
								userId: id
							})
						}
					/>
					<Text>{comment}</Text>
				</View>
			)}
		/>
		// </View>
	);
};

export default FeedCommentsComponent;
