import { StyleSheet } from "react-native";
import { GRAY_LIGHT } from "../../styles/colors";
import { FONT_SIZE_16 } from "../../styles/typography";

const styles = StyleSheet.create({
	container: {
		backgroundColor: GRAY_LIGHT,
		height: 50,
		marginHorizontal: 15,
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
		borderRadius: 5,
		padding: 10
	},
	icon: {
		margin: 5
	},
	input: {
		marginLeft: 10,
		flex: 1,
		fontSize: FONT_SIZE_16
	}
});

export default styles;
