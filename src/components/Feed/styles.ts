import { StyleSheet } from "react-native";
import { FONT_SIZE_14 } from "../../styles/typography";

const styles = StyleSheet.create({
	container: {
		minHeight: 450
	},
	profile: {
		padding: 10,
		height: 50
	},
	photo: {
		height: 450,
		overflow: "hidden"
	},
	icons: {
		padding: 10,
		display: "flex",
		height: 70
	},
	likeInfo: {
		paddingVertical: 5,
		fontSize: FONT_SIZE_14
	},
	text: {
		paddingHorizontal: 10,
		flexDirection: "row"
	},
	comments: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15
	}
});

export default styles;
