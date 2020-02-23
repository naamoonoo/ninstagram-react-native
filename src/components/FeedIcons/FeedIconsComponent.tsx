import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { BoldLinkText } from "../BoldLinkText";
import styles from "./styles";

interface IProps {
	liked: boolean;
	likeHandler: () => void;
}

const FeedIconsComponent: React.FC<IProps> = ({ liked, likeHandler }) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftIcons}>
				<AntDesign
					name={liked ? "heart" : "hearto"}
					size={25}
					style={{ color: liked ? "red" : "black" }}
					onPress={likeHandler}
				/>
				<AntDesign name="message1" size={25} />
				<FontAwesome name="send-o" size={25} />
			</View>
			<View style={styles.rightIcons}>
				<FontAwesome name="bookmark-o" size={30} />
			</View>
		</View>
	);
};

export default FeedIconsComponent;
