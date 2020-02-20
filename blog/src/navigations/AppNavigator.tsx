import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./routes";

import { Home } from "../screens/Home";
import { BlogPost } from "../screens/BlogPost";
import { CreateBlog } from "../screens/CreateBlog";
import { EditBlogPost } from "../screens/EditBlogPost";

const Stack = createStackNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={routes.HOME}>
				<Stack.Screen name={routes.HOME} component={Home} />
				<Stack.Screen name={routes.BLOG} component={BlogPost} />
				<Stack.Screen name={routes.CREATE} component={CreateBlog} />
				<Stack.Screen name={routes.EDIT} component={EditBlogPost} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
