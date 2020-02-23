import { StyleSheet } from "react-native";
import { FONT_SIZE_14 } from "../../styles/typography";

const styles = StyleSheet.create({
	container: { display: "flex" },
	leftIcons: {
		width: 100,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	rightIcons: {
		position: "absolute",
		right: 5
	}
});

export default styles;
