import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./routes";

import { Home } from "../screens/Home";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routes.HOME}>
				<Stack.Screen name={routes.HOME} component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
