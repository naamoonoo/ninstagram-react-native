import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import {
	GetFeeds_GetFeeds_feeds_comments,
	CreateComment,
	CreateCommentVariables,
	GetFeeds_GetFeeds_feeds_user
} from "../../types/api";
import { BoldLinkText } from "../BoldLinkText";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTextInput } from "../../hooks/useTextInput";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENTS } from "../../screens/Comments/CommentsQueries";
import { LineInput } from "../LineInput";
import { Profile } from "../Profile";

interface IProps {
	feedId: string;
	user: GetFeeds_GetFeeds_feeds_user;
	comments: GetFeeds_GetFeeds_feeds_comments[];
}

const FeedCommentsComponent: React.FC<IProps> = ({
	user,
	feedId,
	comments
}) => {
	const navigator = useNavigation();
	const [comment, onChange] = useTextInput("");

	const [newCommentMutation] = useMutation<
		CreateComment,
		CreateCommentVariables
	>(CREATE_COMMENTS, {
		variables: {
			feedId,
			comment
		},
		onCompleted: ({ CreateComment: { res, error } }) => {
			if (res) {
				navigator.navigate(routes.COMMENTS, { feedId });
			} else {
				console.log(error);
			}
		}
	});

	return (
		<View>
			<View style={styles.container}>
				<Profile {...user} onlyPhoto={true} size={25} />
				<LineInput
					value={comment}
					onChangeHandler={onChange}
					placeholder={"leave a comment"}
					onSubmit={newCommentMutation}
				/>
			</View>
			{comments.length > 0 && (
				<TouchableWithoutFeedback
					onPress={() =>
						navigator.navigate(routes.COMMENTS, { feedId })
					}
				>
					<Text style={styles.comments}>
						See the {comments.length} comments
					</Text>
				</TouchableWithoutFeedback>
			)}
		</View>
	);
};

export default FeedCommentsComponent;
