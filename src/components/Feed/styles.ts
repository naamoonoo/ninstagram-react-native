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
		height: 450
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
		padding: 10,
		height: 50
	},
	comments: {
		padding: 10,
		height: 50
	}
});

export default styles;
