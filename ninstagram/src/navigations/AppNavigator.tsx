import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./routes";

import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routes.HOME}>
				<Stack.Screen name={routes.HOME} component={Home} />
				<Stack.Screen name={routes.LOGIN} component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
