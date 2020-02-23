import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import client from "./apollo";

import Navigator from "./navigations/Navagator";
import { UserProvier } from "./context/UserContext";

const App = () => (
	<ApolloProvider client={client}>
		<UserProvier>
			<Navigator />
		</UserProvier>
	</ApolloProvider>
);

export default App;
