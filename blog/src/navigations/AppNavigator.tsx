import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./routes";

import { Home } from "../screens/Home";
import { BlogPost } from "../screens/BlogPost";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routes.HOME}>
				<Stack.Screen name={routes.HOME} component={Home} />
				<Stack.Screen name={routes.BLOG} component={BlogPost} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
