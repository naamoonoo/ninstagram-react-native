import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";

import * as Google from "expo-google-app-auth";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/react-hooks";
import { USER_LOG_IN } from "../../sharedQuries/SharedQueries.local";
import { SOCIAL_LOGIN } from "./LoginQueries";
import { SocialLogin, SocialLoginVariables } from "../../types/api";
import {
	REACT_GOOGLE_IOS_LOGIN,
	REACT_GOOGLE_ANDROID_LOGIN
} from "react-native-dotenv";

const LoginScreen: React.FC = () => {
	const navigator = useNavigation();
	const [loginMutation] = useMutation(USER_LOG_IN);

	const [socialLoginMutation] = useMutation<
		SocialLogin,
		SocialLoginVariables
	>(SOCIAL_LOGIN, {
		onCompleted: ({ SocialLogin: { res, error, token } }) => {
			if (res && token) {
				loginMutation({
					variables: {
						token
					}
				});
			} else {
				console.log(error);
			}
		}
	});

	const signInWithGoogle = async () => {
		try {
			const result = await Google.logInAsync({
				iosClientId: REACT_GOOGLE_IOS_LOGIN,
				androidClientId: REACT_GOOGLE_ANDROID_LOGIN,
				scopes: ["profile", "email"]
			});

			if (result.type === "success") {
				const variables = {
					googleId: result.user.id,
					firstName: result.user.givenName,
					lastName: result.user.familyName,
					profilePhoto: result.user.photoUrl,
					email: result.user.email
				};
				socialLoginMutation({ variables });
			} else {
				console.log("fail to login");
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
