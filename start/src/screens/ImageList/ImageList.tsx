import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { ImageDetail } from "../../components/ImageDetail";
import { images } from "../../assets/images";

interface IProps {}

const ImageList: React.FC<IProps> = () => {
	const nameOfImages = ["beach", "forest", "mountain"];
	const renderImages = () => {
		return nameOfImages.map(name => {
			return (
				<ImageDetail key={name} source={images[name]} title={name} />
			);
		});
	};
	return <View>{renderImages()}</View>;
};

export default ImageList;
