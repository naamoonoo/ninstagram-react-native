import { StyleSheet } from "react-native";
import { FONT_BOLD } from "../../styles/typography";
import { GRAY_MEDIUM, GRAY_DARK } from "../../styles/colors";

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	image: { width: 200, height: 110, borderRadius: 5 },
	name: { fontWeight: "700", marginTop: 5 },
	detail: { color: GRAY_DARK }
});

export default styles;
