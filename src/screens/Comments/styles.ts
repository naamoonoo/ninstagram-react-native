import { StyleSheet } from "react-native";
import { GRAY_LIGHT, GRAY_MEDIUM } from "../../styles/colors";

const styles = StyleSheet.create({
	container: { flex: 1, marginTop: 10 },
	comment: {
		flexDirection: "row",
		alignItems: "center",
		margin: 10
	},
	commentText: { marginLeft: 10 },
	deleteIcon: { color: GRAY_MEDIUM, position: "absolute", right: 10 },
	input: {
		margin: 10,
		flexDirection: "row",
		alignItems: "center",
		position: "absolute",
		bottom: 30
	}
});

export default styles;
