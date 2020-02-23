import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { BoldLinkText } from "../BoldLinkText";
import { routes } from "../../navigations/routes";
import { useNavigation } from "@react-navigation/native";

interface IProps {
	id: string;
	firstName: string;
	profilePhoto: string;
}

const ProfileComponent: React.FC<IProps> = ({
	id,
	firstName,
	profilePhoto
}) => {
	const navigator = useNavigation();
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: profilePhoto }} />
			<BoldLinkText
				text={firstName}
				onPressHandler={() =>
					navigator.navigate(routes.USER, { userId: id })
				}
			/>
		</View>
	);
};

export default ProfileComponent;
