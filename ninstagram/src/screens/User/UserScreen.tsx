import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../../sharedQuries/SharedQueries";
import { GetCurrentUser } from "../../types/api";
import { USER_LOG_OUT } from "../../sharedQuries/SharedQueries.local";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../navigations/routes";
import { UserContext } from "../../context/UserContext";

interface IProps {}

const UserScreen: React.FC<IProps> = () => {
	const { data: user } = useQuery<GetCurrentUser>(GET_CURRENT_USER);
	const { logout } = useContext(UserContext);
	const navigator = useNavigation();
	const [logoutMutation] = useMutation(USER_LOG_OUT, {
		onCompleted: () => {
			console.log("logged out!");
			logout();
			navigator.navigate(routes.HOME);
		}
	});

	console.log(user);
	return (
		<View style={styles.container}>
			<Text>UserScreen</Text>
			<Button
				title={"logout"}
				onPress={async () => await logoutMutation()}
			/>
		</View>
	);
};

export default UserScreen;
