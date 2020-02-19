import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import client from "./apollo";

import Navigator from "./navigations/Navagator";

const App = () => (
	<ApolloProvider client={client}>
		<Navigator />
	</ApolloProvider>
);

export default App;
