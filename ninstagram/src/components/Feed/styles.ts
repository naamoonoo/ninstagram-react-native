import { StyleSheet } from "react-native";
import { GRAY_LIGHT } from "../../styles/colors";
import {
	FONT_SIZE_12,
	FONT_SIZE_14,
	FONT_SIZE_16
} from "../../styles/typography";

const styles = StyleSheet.create({
	container: {
		// marginHorizontal: 10,
		// borderColor: "black",
		// borderWidth: 1,
		minHeight: 450
	},
	profile: {
		padding: 10,
		// borderColor: "black",
		// borderWidth: 1,
		height: 50
	},
	photo: {
		// borderColor: "black",
		// borderWidth: 1,
		height: 450
	},
	icons: {
		padding: 10,
		display: "flex",
		// borderColor: "black",
		// borderWidth: 1,
		height: 70
	},
	leftIcons: {
		width: 120,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	rightIcons: {
		position: "absolute",
		right: 10,
		top: 10
	},
	likeInfo: {
		paddingVertical: 5,
		fontSize: FONT_SIZE_14
	},
	text: {
		padding: 10,
		// borderColor: "black",
		// borderWidth: 1,
		height: 50
	},
	comments: {
		padding: 10,
		// borderColor: "black",
		// borderWidth: 1,
		height: 50
	}
});

export default styles;
