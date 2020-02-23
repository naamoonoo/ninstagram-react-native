import {
	GetFeeds_GetFeeds_feeds_likes,
	GetCurrentUser_GetCurrentUser_user,
	CreateLike,
	CreateLikeVariables,
	DeleteLike,
	DeleteLikeVariables
} from "../types/api";
import { useMutation } from "@apollo/react-hooks";
import {
	LIKE_CREATE,
	LIKE_DELETE
} from "../components/FeedIcons/FeedIconsQueries";
import { useState, useEffect } from "react";

export const useLike = (
	feedId: string,
	likes: GetFeeds_GetFeeds_feeds_likes[],
	refetchQueries: any,
	currentUser?: GetCurrentUser_GetCurrentUser_user
): [boolean, () => void] => {
	const onCompleteHandler = (res: boolean, error: string) => {
		if (res) {
			setLiked(!liked);
			refetchQueries();
		} else {
			console.log(error);
		}
	};
	const [createLike] = useMutation<CreateLike, CreateLikeVariables>(
		LIKE_CREATE,
		{
			variables: { feedId },
			onCompleted: ({ CreateLike: { res, error } }) => {
				onCompleteHandler(res, error);
			}
		}
	);
	const [deleteLike] = useMutation<DeleteLike, DeleteLikeVariables>(
		LIKE_DELETE,
		{
			variables: { feedId },
			onCompleted: ({ DeleteLike: { res, error } }) => {
				onCompleteHandler(res, error);
			}
		}
	);

	const [liked, setLiked] = useState(false);
	useEffect(() => {
		if (currentUser && likes) {
			setLiked(
				likes.find(({ userId }) => userId === currentUser.id)
					? true
					: false
			);
		}
	}, []);

	const likeHandler = () => {
		if (!currentUser) {
			return;
		}

		if (liked) {
			deleteLike();
		} else {
			createLike();
		}
	};

	return [liked, likeHandler];
};
