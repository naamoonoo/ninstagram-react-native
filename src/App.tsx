import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import client from "./apollo";

import Navigator from "./navigations/Navigator";
import { UserProvier } from "./contexts/UserContext";

const App = () => (
	<ApolloProvider client={client}>
		<UserProvier>
			<Navigator />
		</UserProvier>
	</ApolloProvider>
);

export default App;
