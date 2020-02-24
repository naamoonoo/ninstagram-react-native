import React from "react";
import { Button, Text } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
	word: string;
}

const HashTagComponent: React.FC<IProps> = ({ word }) => {
	return (
		<TouchableOpacity onPress={() => {}}>
			<Text style={styles.hashtag}>{word}</Text>
		</TouchableOpacity>
	);
};

export default HashTagComponent;
