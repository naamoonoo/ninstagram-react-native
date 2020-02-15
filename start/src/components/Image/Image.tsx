import React from "react";
import { View } from "react-native";

interface IProps {
	title: string;
}

const Image: React.FC<IProps> = ({ title }) => {
	return <View>{title}</View>;
};

export default Image;
