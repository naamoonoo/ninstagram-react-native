import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

import { Profile } from "../Profile";
import {
	GetCurrentUser_GetCurrentUser_user,
	GetFeeds_GetFeeds_feeds_user
} from "../../types/api";
import { FeedIcons } from "../FeedIcons";
import { useLike } from "../../hooks/useLike";
import { BoldLinkText } from "../BoldLinkText";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";

interface IProps {
	id: string;
	likes: any[];
	photo: string;
	text: string;
	updateAt: string;
	user: GetFeeds_GetFeeds_feeds_user;
	currentUser?: GetCurrentUser_GetCurrentUser_user;
	refetchQueries: () => void;
}

const FeedComponent: React.FC<IProps> = ({
	id,
	likes,
	photo,
	text,
	updateAt,
	user,
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
			<View style={styles.photo}>
				<Image
					style={{ width: "100%", height: "100%" }}
					source={{
						uri: photo
					}}
				/>
			</View>
			<View style={styles.icons}>
				<FeedIcons liked={liked} likeHandler={likeHandler} />
				<Text style={styles.likeInfo}>
					<BoldLinkText
						text={likes.length.toString()}
						onPressHandler={() => {}}
					/>{" "}
					likes this feed
				</Text>
			</View>
			<View style={styles.text}>
				<Text>
					<BoldLinkText
						text={user.firstName}
						onPressHandler={() =>
							navigator.navigate(routes.USER, { userId: user.id })
						}
					/>
					{"  "}
					{text}
				</Text>
			</View>
			<View style={styles.comments}>
				<Text>comments</Text>
			</View>
		</View>
	);
};

export default FeedComponent;
