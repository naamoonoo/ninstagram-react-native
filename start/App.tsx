import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { List } from "./src/components/List";
import { Home } from "./src/screens/Home";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: "Welcom" }}
				/>
				<Stack.Screen
					name="List"
					component={List}
					options={{ title: "List" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
