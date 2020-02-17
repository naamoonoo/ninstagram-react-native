import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { naviagtion } from "./src/navigations/navagation";

import { Home } from "./src/screens/Home";
import { ImageList } from "./src/screens/ImageList";
import { Counter } from "./src/screens/Counter";
import { Colors } from "./src/screens/Colors";
import { NameInOut } from "./src/screens/NameInOut";
import { Boxes } from "./src/screens/Boxes";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={naviagtion.HOME}
					component={Home}
					options={{ title: "Welcom" }}
				/>
				<Stack.Screen
					name={naviagtion.IMAGE_LIST}
					component={ImageList}
					options={{ title: "Images" }}
				/>
				<Stack.Screen
					name={naviagtion.COUNTER}
					component={Counter}
					options={{ title: "Counter" }}
				/>
				<Stack.Screen
					name={naviagtion.COLOR}
					component={Colors}
					options={{ title: "Counter" }}
				/>
				<Stack.Screen
					name={naviagtion.NAME_IN_OUT}
					component={NameInOut}
					options={{ title: "input" }}
				/>
				<Stack.Screen
					name={naviagtion.BOXES}
					component={Boxes}
					options={{ title: "input" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
