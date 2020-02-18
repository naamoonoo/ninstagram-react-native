import { StyleSheet } from "react-native";
import { FONT_SIZE_16, FONT_SIZE_14 } from "../../styles/typography";
import { GRAY_DARK } from "../../styles/colors";

const styles = StyleSheet.create({
	container: { margin: 15 },
	label: {
		fontWeight: "bold",
		fontSize: FONT_SIZE_16,
		marginBottom: 5
	},
	input: {
		padding: 5,
		fontSize: FONT_SIZE_14,
		borderBottomColor: GRAY_DARK,
		borderBottomWidth: 1,
		marginBottom: 10
	}
});

export default styles;
