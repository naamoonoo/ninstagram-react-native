import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { routes } from "./routes";

import { Home } from "../screens/Home";
import { User } from "../screens/User";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routes.HOME}>
				<Stack.Screen
					name={routes.HOME}
					component={Home}
					options={{ title: "ninstagram" }}
				/>
				<Stack.Screen name={routes.USER} component={User} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
