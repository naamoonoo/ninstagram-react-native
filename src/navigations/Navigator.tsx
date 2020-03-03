import React from "react";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "../sharedQuries/SharedQueries.local";

const Navigator: React.FC = () => {
	const { data: { auth: { isLoggedIn = false } = {} } = {} } = useQuery(
		IS_LOGGED_IN
	);

	return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigator;
