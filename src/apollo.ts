import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, concat, Operation, split } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { AsyncStorage } from "react-native";

const isDev = process.env.NODE_ENV === "development";

const getToken = async () => {
	const token = await AsyncStorage.getItem("jwt-token");
	if (token) {
		return token;
	}
};

const cache = new InMemoryCache();
const authHeader = setContext(
	request =>
		new Promise((success, fail) => {
			const token = getToken();
			// getToken().then(token =>
			success({ headers: { "jwt-token": token } });
			// );
		})
);

const httpLink = new HttpLink({
	uri: isDev
		? "http://localhost:4000/graphql"
		: "https://project-ninstagram.herokuapp.com/graphql"
});

const wsLink = new WebSocketLink({
	options: {
		connectionParams: {
			"jwt-token": getToken().then(data => data)
		},
		reconnect: true
	},
	uri: isDev
		? "ws://localhost:4000/graphql"
		: "wss://project-ninstagram.herokuapp.com/subscription"
});

const combinedLinks = split(
	({ query }) => {
		const { kind, operation }: any = getMainDefinition(query);
		return kind === "OperationDefinition" && operation === "subscription";
	},
	wsLink,
	httpLink
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message }) => console.log(message));
	}
	// if (networkError) {
	// 	toast.error(`Network error: ${networkError}`);
	// }
});

cache.writeData({
	data: {
		auth: {
			__typename: "Auth",
			isLoggedIn: Boolean(AsyncStorage.getItem("jwt-token"))
		}
	}
});

const client = new ApolloClient({
	cache,
	link: ApolloLink.from([errorLink, concat(authHeader, combinedLinks)]),
	resolvers: {
		Mutation: {
			userLogIn: async (
				_: any,
				{ token }: any,
				{ cache: appCache }: any
			) => {
				await AsyncStorage.setItem("jwt-token", token);

				appCache.writeData({
					data: {
						auth: {
							__typename: "Auth",
							isLoggedIn: true
						}
					}
				});
				return null;
			},
			userLogOut: async (_: any, __: any, { cache: appCache }: any) => {
				await AsyncStorage.removeItem("jwt-token");
				appCache.writeData({
					data: {
						auth: {
							__typename: "Auth",
							isLoggedIn: false
						}
					}
				});
				return null;
			}
		}
	}
});

export default client;
