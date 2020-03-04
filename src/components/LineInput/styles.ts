import { StyleSheet } from "react-native";
import { GRAY_MEDIUM, GRAY_DARK } from "../../styles/colors";

const styles = StyleSheet.create({
	container: { display: "flex", flex: 1 },
	input: { width: "95%" },
	icons: {
		// justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		flexDirection: "row",
		right: 5,
		top: 5,
		height: "100%",
		width: "5%"
	},
	submit: {
		color: GRAY_DARK
	}
});

export default styles;
