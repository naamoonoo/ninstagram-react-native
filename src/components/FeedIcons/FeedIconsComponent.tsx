import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";

interface IProps {
	feedId: string;
	liked: boolean;
	likeHandler: () => void;
}

const FeedIconsComponent: React.FC<IProps> = ({
	feedId,
	liked,
	likeHandler
}) => {
	const navigator = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.leftIcons}>
				<AntDesign
					name={liked ? "heart" : "hearto"}
					size={25}
					style={{ color: liked ? "red" : "black" }}
					onPress={likeHandler}
				/>
				<AntDesign
					name="message1"
					size={25}
					onPress={() =>
						navigator.navigate(routes.COMMENTS, { feedId })
					}
				/>
				<FontAwesome
					name="send-o"
					size={25}
					onPress={() => navigator.navigate(routes.CHAT, { feedId })}
				/>
			</View>
			<View style={styles.rightIcons}>
				<FontAwesome name="bookmark-o" size={30} />
			</View>
		</View>
	);
};

export default FeedIconsComponent;
