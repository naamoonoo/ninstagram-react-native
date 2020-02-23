import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./routes";

import { Login } from "../screens/Login";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routes.LOGIN}>
				<Stack.Screen name={routes.LOGIN} component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
