import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import styles from "./styles";

interface IProps {}

import * as Google from "expo-google-app-auth";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/react-hooks";
import { USER_LOG_IN } from "../../sharedQuries/SharedQueries.local";

const IOS_CLIENT_ID =
	"39219900802-tnbu7oenek9n1vep550rr7vn2aah849g.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
	"39219900802-donjlvc9aeb867lfe1jaahcsgfnhfhst.apps.googleusercontent.com";

const LoginScreen: React.FC = () => {
	const navigator = useNavigation();
	const [loginMutation] = useMutation(USER_LOG_IN);
	const signInWithGoogle = async () => {
		try {
			const result = await Google.logInAsync({
				iosClientId: IOS_CLIENT_ID,
				androidClientId: ANDROID_CLIENT_ID,
				scopes: ["profile", "email"]
			});

			if (result.type === "success") {
				console.log("LoginScreen.js.js 21 | ", result.user.givenName);
				console.log(result.user);
				// navigator.navigate("Profile", {
				// 	username: result.user.givenName
				// }); //after Google login redirect to Profile
				return result.accessToken;
			} else {
				return { cancelled: true };
			}
		} catch (e) {
			console.log("LoginScreen.js.js 30 | Error with login", e);
			return { error: true };
		}
	};

	return (
		<View style={styles.container}>
			<Button title="Login with Google" onPress={signInWithGoogle} />
		</View>
	);
};

export default LoginScreen;
