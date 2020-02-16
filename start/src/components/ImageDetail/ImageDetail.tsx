import React from "react";
import { View, Image, ImageSourcePropType, Text } from "react-native";
import styles from "./styles";

interface IProps {
	source: ImageSourcePropType;
	title: string;
}

const ImageDetailComponents: React.FC<IProps> = ({ source, title }) => {
	return (
		<View style={styles.container}>
			<Image source={source} />
			<Text>{title}</Text>
		</View>
	);
};

export default ImageDetailComponents;
