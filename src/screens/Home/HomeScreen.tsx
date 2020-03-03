import React, { useState } from "react";
import { FlatList } from "react-native";
import styles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_FEEDS } from "./HomeQueries";
import { GetFeeds, GetFeedsVariables, GetCurrentUser } from "../../types/api";
import { GET_CURRENT_USER } from "../../sharedQuries/SharedQueries";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { routes } from "../../navigations/routes";
import { Feed } from "../../components/Feed";
import { IS_LOGGED_IN } from "../../sharedQuries/SharedQueries.local";

interface IProps {}

const HomeScreen: React.FC<IProps> = () => {
	const [page, setPage] = useState(1);
	const [fetched, setFetched] = useState(false);
	const {
		data: { GetFeeds: { feeds = [] } = {} } = {},
		refetch: feedsRefetch
	} = useQuery<GetFeeds, GetFeedsVariables>(GET_FEEDS, {
		variables: { page },
		onCompleted: () => setFetched(false)
	});
	const { data: { auth: { isLoggedIn = false } = {} } = {} } = useQuery(
		IS_LOGGED_IN
	);
	const {
		data: { GetCurrentUser: { user = null } = {} } = {},
		refetch: userRefetch
	} = useQuery<GetCurrentUser>(GET_CURRENT_USER);

	const refetchQueries = () => {
		feedsRefetch();
		userRefetch();
	};
	const navigator = useNavigation();
	navigator.setOptions({
		headerRight: () => {
			return (
				<Feather
					name={isLoggedIn ? "user" : "user-plus"}
					size={30}
					style={{ marginRight: 10 }}
					onPress={() =>
						navigator.navigate(
							isLoggedIn ? routes.USER : routes.LOGIN,
							{ userId: user.id }
						)
					}
				/>
			);
		}
	});

	// const loadFeeds = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
	const loadFeeds = () => {
		// const {
		// 	nativeEvent: { layoutMeasurement, contentOffset, contentSize }
		// } = event;
		// const reachedToBottom =
		// 	layoutMeasurement.height + contentOffset.y >=
		// 	contentSize.height - 1;

		if (!fetched) {
			setFetched(true);
			setPage(page + 1);
			feedsRefetch();
		}
	};

	return (
		<FlatList
			data={feeds}
			keyExtractor={feed => feed.id}
			renderItem={({ item }) => (
				<Feed
					{...item}
					currentUser={user}
					refetchQueries={refetchQueries}
				/>
			)}
			showsVerticalScrollIndicator={false}
			onEndReached={loadFeeds}
			// onScroll={loadFeeds}
		/>
	);
};

export default HomeScreen;
