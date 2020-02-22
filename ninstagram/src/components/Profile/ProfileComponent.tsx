import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { BoldLinkText } from "../BoldLinkText";

interface IProps {
	firstName: string;
	profilePhoto: string;
}

const ProfileComponent: React.FC<IProps> = ({ firstName, profilePhoto }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: profilePhoto }} />
			<BoldLinkText text={firstName} path={""} />
		</View>
	);
};

export default ProfileComponent;
