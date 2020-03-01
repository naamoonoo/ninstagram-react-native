import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Profile } from "../Profile";
import {
	GetCurrentUser_GetCurrentUser_user,
	GetFeeds_GetFeeds_feeds_user,
	GetFeeds_GetFeeds_feeds_comments
} from "../../types/api";
import { FeedIcons } from "../FeedIcons";
import { useLike } from "../../hooks/useLike";
import { BoldLinkText } from "../BoldLinkText";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";
import { FeedText } from "../FeedText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FeedComments } from "../FeedComments";

interface IProps {
	id: string;
	likes: any[];
	photo: string;
	text: string;
	updateAt: string;
	user: GetFeeds_GetFeeds_feeds_user;
	currentUser?: GetCurrentUser_GetCurrentUser_user;
	comments?: GetFeeds_GetFeeds_feeds_comments[];
	refetchQueries: () => void;
}

const FeedComponent: React.FC<IProps> = ({
	id,
	likes,
	photo,
	text,
	updateAt,
	user,
	comments,
	currentUser,
	refetchQueries
}) => {
	if (!id) {
		return null;
	}
	const [liked, likeHandler] = useLike(
		id,
		likes,
		refetchQueries,
		currentUser
	);
	const navigator = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Profile {...user} />
			</View>
			<TouchableWithoutFeedback
				style={styles.photo}
				// onPress={({ nativeEvent }) => console.log(nativeEvent)}
			>
				<Image
					style={{ width: "100%", height: "100%" }}
					source={{
						uri: photo
					}}
				/>
			</TouchableWithoutFeedback>
			<View style={styles.icons}>
				<FeedIcons
					feedId={id}
					liked={liked}
					likeHandler={likeHandler}
				/>
				<Text style={styles.likeInfo}>
					<BoldLinkText
						text={likes.length.toString()}
						onPressHandler={() =>
							navigator.navigate(routes.LIKERS, { feedId: id })
						}
					/>{" "}
					likes this feed
				</Text>
			</View>
			<View style={styles.text}>
				<BoldLinkText
					text={user.firstName}
					onPressHandler={() =>
						navigator.navigate(routes.USER, { userId: user.id })
					}
				/>
				<FeedText text={text} />
			</View>
			<View style={styles.comments}>
				<FeedComments user={user} comments={comments} feedId={id} />
			</View>
		</View>
	);
};

export default FeedComponent;
