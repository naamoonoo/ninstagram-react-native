import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { routes } from "./routes";

import { Home } from "../screens/Home";
import { User } from "../screens/User";
import { Comments } from "../screens/Comments";
import { Chat } from "../screens/Chat";
import { ChatList } from "../screens/ChatList";
import { Likers } from "../screens/Likers";

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
				<Stack.Screen name={routes.COMMENTS} component={Comments} />
				<Stack.Screen name={routes.CHAT} component={Chat} />
				<Stack.Screen name={routes.CHAT_LIST} component={ChatList} />
				<Stack.Screen name={routes.LIKERS} component={Likers} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
