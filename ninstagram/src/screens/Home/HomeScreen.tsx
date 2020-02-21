import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_FEEDS, IS_LOGGED_IN } from "./HomeQueries";
import { GetFeeds, GetFeedsVariables, GetCurrentUser } from "../../types/api";
import { GET_CURRENT_USER } from "../../sharedQuries/SharedQueries";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { routes } from "../../navigations/routes";
import { UserContext } from "../../context/UserContext";

interface IProps {}

const HomeScreen: React.FC<IProps> = () => {
	const [page, setPage] = useState(1);
	// const { data: feedData } = useQuery<GetFeeds, GetFeedsVariables>(
	// 	GET_FEEDS,
	// 	{
	// 		variables: { page }
	// 	}
	// );
	// const { state: userState, login } = useContext(UserContext);
	// console.log(userState);
	const {
		data: {
			auth: { isLoggedIn }
		}
	} = useQuery(IS_LOGGED_IN, { fetchPolicy: "cache-first" });
	const { data: userData } = useQuery<GetCurrentUser>(GET_CURRENT_USER, {
		onCompleted: ({ GetCurrentUser: { res, user } }) => {}
	});

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

	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
		</View>
	);
};

export default HomeScreen;
