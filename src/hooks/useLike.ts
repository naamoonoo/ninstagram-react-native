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
	// update: (cache, { data: ToggleDrivingModeResult }) => {
	// 	if (ToggleDrivingModeResult) {
	// 		const {
	// 			ToggleDrivingMode: mutationResult
	// 		} = ToggleDrivingModeResult;
	// 		const { res, error } = mutationResult;
	// 		if (res) {
	// 			const queryInCaches: any = cache.readQuery({
	// 				query: GET_CURRENT_USER
	// 			});
	// 			if (
	// 				queryInCaches &&
	// 				queryInCaches.GetCurrentUser &&
	// 				queryInCaches.GetCurrentUser.user
	// 			) {
	// 				queryInCaches.GetCurrentUser.user.isDriving = !queryInCaches
	// 					.GetCurrentUser.user.isDriving;
	// 			}
	// 			cache.writeQuery({
	// 				data: queryInCaches,
	// 				query: GET_CURRENT_USER
	// 			});
	// 		} else {
	// 			toast.error(error);
	// 		}
	// 	}
	// }

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
