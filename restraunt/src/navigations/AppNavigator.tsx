import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./routes";

import { Home } from "../screens/Home";
import { Restraunt } from "../screens/Restraunt";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routes.HOME}>
				<Stack.Screen name={routes.HOME} component={Home} />
				<Stack.Screen name={routes.RESTRAUNT} component={Restraunt} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
