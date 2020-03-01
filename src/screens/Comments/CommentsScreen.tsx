import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useTextInput } from "../../hooks/useTextInput";
import { Profile } from "../../components/Profile";
import { LineInput } from "../../components/LineInput";

interface IProps {}

const CommentsScreen: React.FC<IProps> = () => {
	// 	const [comment, onChange, setComment] = useTextInput("");

	// 	const [newCommentMutation] = useMutation<
	// 	CreateComment,
	// 	CreateCommentVariables
	// >(CREATE_COMMENTS, {
	// 	variables: {
	// 		feedId:,
	// 		comment
	// 	},
	// 	onCompleted: ({ CreateComment: { res, error } }) => {
	// 		if (res) {
	// 			refetch();
	// 		} else {
	// 			toast.error(error);
	// 		}
	// 	}
	// });
	return (
		<View style={styles.container}>
			<Text>
				{/* <Profile {...user} onlyPhoto={true} size={25} />
	<LineInput
		value={comment}
		onChangeHandler={onChange}
		placeholder={"leave a comment"}
		onSubmit={() => {}}
	/>
 */}
				comments
			</Text>
		</View>
	);
};

export default CommentsScreen;
