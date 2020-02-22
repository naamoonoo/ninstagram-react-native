import React from "react";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { IS_LOGGED_IN } from "../screens/Home/HomeQueries";
import { useQuery } from "@apollo/react-hooks";

const Navigator: React.FC = () => {
	const {
		data: { auth: { isLoggedIn = false } = {} } = {}
	} = useQuery(IS_LOGGED_IN, { fetchPolicy: "cache-first" });
	return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigator;
