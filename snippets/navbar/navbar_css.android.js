import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "white",
		marginTop: 10,
		padding: 5,
	},
	icons_nav: {
		width: 30,
		height: 30,
	},
	icons_react: {
		width: 50,
		height: 50,
		marginBottom: 10,
	},
	navHome: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	navhistory: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	payment: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	profile: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

module.exports = styles;
