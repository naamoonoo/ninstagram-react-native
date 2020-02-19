import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_FEEDS } from "./HomeQueries";
import { GetFeeds, GetFeedsVariables } from "../../types/api";
import { GET_CURRENT_USER } from "../../sharedQuries/SharedQueries";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { routes } from "../../navigations/routes";

interface IProps {}

const HomeScreen: React.FC<IProps> = () => {
	const [page, setPage] = useState(1);
	const { data: feedData } = useQuery<GetFeeds, GetFeedsVariables>(
		GET_FEEDS,
		{
			variables: { page }
		}
	);

	const { data: userData } = useQuery(GET_CURRENT_USER);
	const navigator = useNavigation();
	navigator.setOptions({
		headerRight: () => {
			return (
				<Feather
					name="user-plus"
					size={30}
					style={{ marginRight: 10 }}
					onPress={() => navigator.navigate(routes.LOGIN)}
				/>
			);
		}
	});

	// console.log(userData);
	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
		</View>
	);
};

export default HomeScreen;
