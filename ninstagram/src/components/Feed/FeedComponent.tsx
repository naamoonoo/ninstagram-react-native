import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { BoldLinkText } from "../BoldLinkText";
import { Profile } from "../Profile";
import {
	GetCurrentUser_GetCurrentUser_user,
	GetFeeds_GetFeeds_feeds_user
} from "../../types/api";

interface IProps {
	id: string;
	likes: any[];
	photo: string;
	text: string;
	updateAt: string;
	user: GetFeeds_GetFeeds_feeds_user;
	currentUser?: GetCurrentUser_GetCurrentUser_user;
}

const FeedComponent: React.FC<IProps> = ({
	id,
	likes,
	photo,
	text,
	updateAt,
	user,
	currentUser
}) => {
	if (!id) {
		return null;
	}
	const liked = currentUser
		? likes.find(({ userId }) => userId === currentUser.id)
		: false;
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
				<View style={styles.leftIcons}>
					<AntDesign
						name={liked ? "heart" : "hearto"}
						size={30}
						style={{ color: liked ? "red" : "black" }}
					/>
					<AntDesign name="message1" size={30} />
					<FontAwesome name="send-o" size={30} />
				</View>
				<View style={styles.rightIcons}>
					<FontAwesome name="bookmark-o" size={30} />
				</View>
				<Text style={styles.likeInfo}>
					<BoldLinkText text={likes.length.toString()} path={""} />{" "}
					likes this feed
				</Text>
			</View>
			<View style={styles.text}>
				<Text>{text}</Text>
			</View>
			<View style={styles.comments}>
				<Text>comments</Text>
			</View>
		</View>
	);
};

export default FeedComponent;
