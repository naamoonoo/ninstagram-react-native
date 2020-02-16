import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

interface IRGBColor {
	red: number;
	green: number;
	blue: number;
}

interface IProps {}

const ColorsScreens: React.FC<IProps> = () => {
	const [colors, setColors] = useState<IRGBColor[]>([]);

	const generateColor = (): IRGBColor => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
		return { red, green, blue };
	};

	const onPressHandler = () => {
		const newColor = generateColor();
		setColors([...colors, newColor]);
	};

	if (colors && colors.length >= 1) {
		Object.entries(colors[0]).map(value => console.log(value));
	}
	const renderSource = (name: string, color: IRGBColor, value: number) => {
		const { red, green, blue } = color;
		return (
			<View
				style={{
					...styles.sourceColor,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`
				}}
			>
				<Text style={styles.whiteText}>{name}</Text>
				<Text style={styles.whiteText}>{value}</Text>
			</View>
		);
	};

	const renderColors = (item: IRGBColor, index: number) => {
		const { red, green, blue } = item;

		return (
			<View style={styles.container} key={index}>
				<View
					style={{
						...styles.mainColor,
						backgroundColor: `rgb(${red}, ${green}, ${blue})`
					}}
				></View>
				{renderSource("red", { red, green: 0, blue: 0 }, red)}
				{renderSource("green", { red: 0, green, blue: 0 }, green)}
				{renderSource("blue", { red: 0, green: 0, blue }, blue)}
			</View>
		);
	};

	return (
		<View>
			<Button title={"Add Color"} onPress={onPressHandler} />
			<FlatList
				data={colors}
				renderItem={({ item, index }) => renderColors(item, index)}
			/>
		</View>
	);
};

export default ColorsScreens;
