import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	// payment comp

	payment_comp: {
		paddingHorizontal: 10,
		height: 450,
	},

	container_payment: {
		marginVertical: 5,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#ffffff",
		padding: 15,
		borderRadius: 20,
		elevation: 5,
	},

	logo_payment: {
		height: 40,
		width: 40,
	},

	info_payment: {
		width: "40%",
		marginLeft: 30,
	},

	price: {
		marginLeft: 50,
		color: "#0066cc",
		fontWeight: "bold",
	},
});

module.exports = styles;
