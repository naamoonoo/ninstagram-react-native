import React from "react";
import { View, Text, ListView } from "react-native";
import styles from "./styles";
import { useTextInput } from "../../hooks/useTextInput";
import { Profile } from "../../components/Profile";
import { LineInput } from "../../components/LineInput";
import {
	GetCurrentUser,
	CreateComment,
	CreateCommentVariables,
	GetComments,
	GetCommentsVariables,
	DeleteComment,
	DeleteCommentVariables
} from "../../types/api";
import { GET_CURRENT_USER } from "../../sharedQuries/SharedQueries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
	CREATE_COMMENTS,
	GET_COMMENTS,
	DELETE_COMMENTS
} from "./CommentsQueries";
import { useRoute, Route } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

interface IRoutes extends Route<"EDIT"> {
	params: {
		feedId: string;
	};
}

interface IProps {}

const CommentsScreen: React.FC<IProps> = () => {
	const {
		params: { feedId }
	} = useRoute<IRoutes>();

	const [comment, onChange, setComment] = useTextInput("");
	const { data: { GetCurrentUser: { user = null } = {} } = {} } = useQuery<
		GetCurrentUser
	>(GET_CURRENT_USER);

	const {
		data: { GetComments: { comments = [] } = {} } = {},
		refetch
	} = useQuery<GetComments, GetCommentsVariables>(GET_COMMENTS, {
		variables: { feedId }
	});

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
				refetch();
			} else {
				console.log(error);
			}
		}
	});

	const [deleteCommentMuataion] = useMutation<
		DeleteComment,
		DeleteCommentVariables
	>(DELETE_COMMENTS, {
		onCompleted: ({ DeleteComment: { res, error } }) => {
			if (res) {
				refetch();
			} else {
				console.log(error);
			}
		}
	});

	return (
		<View style={styles.container}>
			<FlatList
				data={comments}
				keyExtractor={comment => comment.id}
				renderItem={({
					item: { comment, id: commentId, user: commentUser }
				}) => (
					<View style={styles.comment}>
						<Profile {...commentUser} size={35} />
						<Text style={styles.commentText}>{comment}</Text>
						{commentUser.id === user.id && (
							<AntDesign
								style={styles.deleteIcon}
								name="delete"
								size={20}
								onPress={() =>
									deleteCommentMuataion({
										variables: {
											commentId: commentId
										}
									})
								}
							/>
						)}
					</View>
				)}
			/>
			<View style={styles.input}>
				<Profile {...user} onlyPhoto={true} size={40} />
				<LineInput
					value={comment}
					onChangeHandler={onChange}
					placeholder={"leave a comment"}
					onSubmit={() => {}}
				/>
			</View>
		</View>
	);
};

export default CommentsScreen;
