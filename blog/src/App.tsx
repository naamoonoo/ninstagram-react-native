import React from "react";

import Navigator from "./navigations/Navagator";
import { Provider } from "./context/BlogContext";

const App: React.FC = () => (
	<Provider>
		<Navigator />
	</Provider>
);

export default App;
