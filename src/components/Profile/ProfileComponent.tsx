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
	onlyPhoto?: boolean;
	size?: number;
}

const ProfileComponent: React.FC<IProps> = ({
	id,
	firstName,
	profilePhoto,
	onlyPhoto = false,
	size = 30
}) => {
	const navigator = useNavigation();
	return (
		<View style={styles.container}>
			<Image
				style={{
					...styles.image,
					width: size,
					height: size,
					borderRadius: size / 2
				}}
				source={{ uri: profilePhoto }}
			/>
			{!onlyPhoto && (
				<BoldLinkText
					text={firstName}
					onPressHandler={() =>
						navigator.navigate(routes.USER, { userId: id })
					}
				/>
			)}
		</View>
	);
};

export default ProfileComponent;
