import React, { useState, useContext } from "react";
import { View, Text, ListView, FlatList } from "react-native";
import styles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_FEEDS, IS_LOGGED_IN } from "./HomeQueries";
import { GetFeeds, GetFeedsVariables, GetCurrentUser } from "../../types/api";
import { GET_CURRENT_USER } from "../../sharedQuries/SharedQueries";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { routes } from "../../navigations/routes";
import { Feed } from "../../components/Feed";

interface IProps {}

const HomeScreen: React.FC<IProps> = () => {
	const [page, setPage] = useState(1);
	const [fetched, setFetched] = useState(false);
	const { data: { GetFeeds: { feeds = [] } = {} } = {}, refetch } = useQuery<
		GetFeeds,
		GetFeedsVariables
	>(GET_FEEDS, {
		variables: { page },
		onCompleted: () => setFetched(false)
	});
	const {
		data: { auth: { isLoggedIn = false } = {} } = {}
	} = useQuery(IS_LOGGED_IN, { fetchPolicy: "cache-first" });
	const { data: { GetCurrentUser: { user = null } = {} } = {} } = useQuery<
		GetCurrentUser
	>(GET_CURRENT_USER);

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
							isLoggedIn ? routes.USER : routes.LOGIN
						)
					}
				/>
			);
		}
	});

	const isCloseToBottom = ({
		layoutMeasurement,
		contentOffset,
		contentSize
	}) => {
		return (
			layoutMeasurement.height + contentOffset.y >= contentSize.height - 1
		);
	};
	return (
		<FlatList
			data={feeds}
			keyExtractor={feed => feed.id}
			renderItem={({ item }) => <Feed {...item} currentUser={user} />}
			showsVerticalScrollIndicator={false}
			onScroll={({ nativeEvent }) => {
				if (isCloseToBottom(nativeEvent) && !fetched) {
					setFetched(true);
					setPage(page + 1);
					refetch();
				}
			}}
		/>
	);
};

export default HomeScreen;
