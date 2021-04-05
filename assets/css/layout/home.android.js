import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: "#F0F8FF",
	},
	// component image hero view
	imageHeader: {
		flex: 5,
		justifyContent: "center",
		alignItems: "center",
		height: 320,
		backgroundColor: "#ffffff",
		borderRadius: 20,
		marginHorizontal: 20,
		marginVertical: 10,
		elevation: 10,
	},
	pictHero: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	name: {
		fontSize: 20,
		color: "#0066cc",
		marginVertical: 5,
	},
	as_profile: {
		color: "gray",
		fontWeight: "700",
		fontSize: 15,
	},
	container_headerKeuangan: {
		flexDirection: "row",
		marginVertical: 10,
	},
	container_headerKeuangan_left: {
		padding: 10,
		alignItems: "center",
	},
	container_headerKeuangan_mid: {
		padding: 10,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderLeftColor: "#DDDDDD",
		borderRightColor: "#DDDDDD",

		alignItems: "center",
	},
	container_headerKeuangan_right: {
		alignItems: "center",
		padding: 10,
	},
	para_money_header: {
		fontSize: 20,
		color: "#0066cc",
	},
	// end components image hero view
	// overview payment
	comp_container_overview: {
		flex: 5,
		marginHorizontal: 20,
	},
	container_title_overview: {
		position: "relative",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	left_title_overview: {
		position: "absolute",
		left: 0,
		fontSize: 25,
		color: "#0066cc",
	},
	bell_img: {
		marginLeft: 100,
		width: 20,
		height: 20,
	},
	right_title_overview: {
		position: "absolute",
		right: 0,
		color: "#0066cc",
		fontSize: 15,
	},
	// end overview paymeny
});

module.exports = styles;
