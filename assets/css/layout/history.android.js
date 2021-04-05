import { StyleSheet } from "react-native";

// #0066cc <- blue

const styles = StyleSheet.create({
	linkBack: {
		width: 40,
		height: 40,
	},

	body: {
		flex: 1,
		paddingTop: 40,
		marginHorizontal: 8,
		backgroundColor: "#F0F8FF",
	},
	top_comp: {
		display: "flex",
		flexDirection: "row",
		height: 30,
		position: "relative",
	},
	backArrow: {
		position: "absolute",
		left: 0,
		margin: 5,
		width: 25,
		height: 25,
	},
	search: {
		position: "absolute",
		right: 0,
		margin: 5,
		width: 25,
		height: 25,
	},
	header: {
		marginVertical: 10,
		marginLeft: 10,
		fontSize: 24,
		color: "#0066cc",
		fontWeight: "bold",
	},

	// choise transaction
	choiseTransaction: {
		display: "flex",
		flexDirection: "row",
	},
	comp_choise_active: {
		backgroundColor: "#0066cc",
		marginLeft: 10,
		width: 70,
		paddingHorizontal: 5,
		paddingVertical: 8,
		borderRadius: 50,
		elevation: 5,
	},
	comp_choise_notActive: {
		backgroundColor: "#ffffff",
		marginLeft: 10,
		width: 70,
		paddingHorizontal: 5,
		paddingVertical: 8,
		borderRadius: 50,
		elevation: 5,
	},
	para_active: {
		color: "#ffffff",
		textAlign: "center",
	},

	para_notActive: {
		color: "#000000",
		textAlign: "center",
	},
	subHeader: {
		marginVertical: 10,
		marginLeft: 10,
		fontSize: 18,
		color: "#0066cc",
		fontWeight: "bold",
	},

	// background
	comp_background: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 400,
		alignItems: "center",
		justifyContent: "center",
	},

	// detail
	container_detail: {
		width: "100%",
		marginTop: -30,
		padding: 15,
		backgroundColor: "#0066cc",
		borderRadius: 50,
	},
	text_detail: {
		textAlign: "center",
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 18,
	},
});

module.exports = styles;
