import { StyleSheet } from "react-native";

// #0066cc <- blue

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: "#F0F8FF",
	},

	link: {
		justifyContent: "center",
		alignItems: "center",
		width: 25,
		height: 25,
	},
	form_group_modal: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},

	body_modal: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: "#C8CFD5",
	},

	// header
	comp_header: {
		flexDirection: "row",
		marginHorizontal: 10,
		marginBottom: 30,
		position: "relative",
	},

	header_icons: {
		width: 20,
		height: 20,
	},
	// end header

	// modal

	container_modal: {
		height: 120,
		padding: 10,
		width: "100%",
		backgroundColor: "#E8E8E8",
		position: "absolute",
		bottom: 0,
	},

	para_modal: {
		flex: 1,
		color: "#404040",
		fontSize: 20,
	},

	inputform: {
		borderBottomColor: "#0066cc",
		borderBottomWidth: 2,
		marginVertical: 5,
	},
	button_modal: {
		marginVertical: 15,
		marginHorizontal: 10,
	},
	text_btn_modal: {
		color: "#0066cc",
		fontSize: 17,
	},

	// end modal

	img_hero: {
		height: 120,
		width: 120,
		borderRadius: 120 / 2,
		marginBottom: 10,
	},
	card_img: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 30,
	},
	card: {
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 20,
		marginVertical: 10,
		borderBottomWidth: 1,
		borderColor: "#DDDDDD",
		padding: 10,
	},
	edit_icons: {
		height: 30,
		width: 30,
	},
	info: {
		color: "#0066cc",
		fontSize: 15,
	},
	info_user: {
		fontSize: 18,
	},

	// logout
	linkLogout: {
		height: 60,
	},
	text_logout: {
		flex: 1,
		fontSize: 20,
		marginHorizontal: 10,
	},
});

module.exports = styles;
