import { StyleSheet } from "react-native";
import { WHITE } from "../../styles/colors";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		// display: "flex",
		width: "100%",
		height: 60
	},
	mainColor: {
		width: "55%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		color: WHITE
	},
	sourceColor: {
		width: "15%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		color: WHITE,
		opacity: 0.8
	},
	whiteText: {
		color: WHITE
	}
});

export default styles;
