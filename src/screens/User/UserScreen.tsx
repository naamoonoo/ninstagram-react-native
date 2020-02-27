import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../../sharedQuries/SharedQueries";
import { GetCurrentUser } from "../../types/api";
import { USER_LOG_OUT } from "../../sharedQuries/SharedQueries.local";
import { useNavigation, Route, useRoute } from "@react-navigation/native";
import { routes } from "../../navigations/routes";
import { UserContext } from "../../context/UserContext";
import { GET_USER_BY_ID } from "./UserQueries";
import { GetUserById } from "../../types/api";
import { Profile } from "../../components/Profile";
import { PhotoPartition } from "../../components/PhotoPartition";

interface IRoutes extends Route<"EDIT"> {
	params: {
		userId: string;
	};
}

interface IProps {}

const UserScreen: React.FC<IProps> = () => {
	const {
		params: { userId }
	} = useRoute<IRoutes>();
	const [isCurrentUser, setIsCurrentUser] = useState(false);

	const [
		getUserByIdQuery,
		{ data: { GetUserById: { user = null } = {} } = {} }
	] = useLazyQuery<GetUserById>(GET_USER_BY_ID);
	useQuery<GetCurrentUser>(GET_CURRENT_USER, {
		onCompleted: ({
			GetCurrentUser: {
				user: { id }
			}
		}) => {
			getUserByIdQuery({
				variables: {
					userId: userId || id
				}
			});
			setIsCurrentUser(userId === id);
		}
	});
	const [logOutMutation] = useMutation(USER_LOG_OUT);
	return (
		<View style={styles.container}>
			<Profile {...user} />
			{user && user.feeds && <PhotoPartition feeds={user.feeds} />}
			{isCurrentUser && (
				<Button title={"logout"} onPress={() => logOutMutation()} />
			)}
		</View>
	);
};

export default UserScreen;
