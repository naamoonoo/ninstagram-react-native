import { StyleSheet } from "react-native";
import { GRAY_DARK } from "../../styles/colors";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center"
	},
	comments: {
		flexDirection: "row",
		paddingLeft: 10,
		paddingTop: 10,
		color: GRAY_DARK
	}
});

export default styles;
