import { StyleSheet } from "react-native";
import {
	FONT_SIZE_16,
	FONT_SIZE_14,
	FONT_SIZE_12
} from "../../styles/typography";
import { GRAY_DARK, GRAY_MEDIUM } from "../../styles/colors";

const styles = StyleSheet.create({
	container: { margin: 15 },
	title: {
		fontSize: FONT_SIZE_16 + 2,
		fontWeight: "bold",
		marginBottom: 10,
		marginLeft: 10
	},
	image: {
		width: 300,
		height: 150,
		borderRadius: 5,
		marginHorizontal: 5
	},
	categroy: {
		color: GRAY_DARK,
		fontSize: FONT_SIZE_14,
		position: "absolute",
		right: 10
	},
	detail: {
		paddingLeft: 20,
		marginVertical: 10,
		color: GRAY_MEDIUM,
		fontSize: FONT_SIZE_14
	},
	map: {
		width: 350,
		height: 350,
		alignSelf: "center"
	},
	phone: {
		position: "absolute",
		right: 10,
		top: 10
	},
	infos: {
		height: 50,
		justifyContent: "center"
		// alignItems: "center"
	}
});

export default styles;
