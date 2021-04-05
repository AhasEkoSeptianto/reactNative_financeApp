import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	send_overview: {
		flex: 2,
		flexDirection: "row",
		backgroundColor: "#ffffff",
		elevation: 50,
		margin: 5,
		borderRadius: 10,
	},
	img: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F0F8FF",
		marginHorizontal: 20,
		marginVertical: 15,
		borderRadius: 10,
	},
	info_payment: {
		flex: 2,
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 5,
	},
	para_info_payment: {
		fontSize: 17,
		fontWeight: "bold",
	},
	payment: {
		flex: 1,

		justifyContent: "center",
		alignItems: "center",
	},
	para_payment: {
		fontWeight: "bold",
	},
	sub_para_info_payment: {
		fontSize: 12,
		color: "gray",
	},
	logo_img: {
		width: 20,
		height: 20,
	},
});

module.exports = styles;
