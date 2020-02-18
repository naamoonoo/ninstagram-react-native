import { StyleSheet } from "react-native";
import { FONT_SIZE_16 } from "../../styles/typography";
import { GRAY_LIGHT } from "../../styles/colors";

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 5,
		marginHorizontal: 5,
		borderBottomWidth: 1,
		borderBottomColor: GRAY_LIGHT,
		justifyContent: "center",
		height: 40
	},
	title: {
		fontSize: FONT_SIZE_16,
		fontWeight: "bold"
	},
	icon: {
		position: "absolute",
		right: 20
	}
});

export default styles;
