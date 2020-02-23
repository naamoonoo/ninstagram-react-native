import { gql } from "apollo-boost";

export const IS_LOGGED_IN = gql`
	query {
		auth {
			isLoggedIn @client
		}
	}
`;

export const USER_LOG_IN = gql`
	mutation userLogIn($token: String!) {
		userLogIn(token: $token) @client
	}
`;

export const USER_LOG_OUT = gql`
	mutation userLogOut {
		userLogOut @client
	}
`;
