import { StyleSheet } from "react-native";

// #0066cc <- blue

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 35,
		backgroundColor: "#F0F8FF",
		paddingHorizontal: 10,
	},

	body_modal: {
		flex: 1,
		paddingTop: 35,
		backgroundColor: "#F0F8FF",
		paddingHorizontal: 10,
	},

	// modal
	container_modal: {
		flex: 1,
		marginHorizontal: 10,
		padding: 3,
		width: "100%",
		backgroundColor: "#F0F8FF",
		elevation: 10,
	},

	titlemodal: {
		textAlign: "center",
		color: "#404040",
		fontWeight: "bold",
		fontSize: 20,
		marginTop: 20,
		marginBottom: 30,
	},
	para_form: {
		fontSize: 15,
		width: "35%",
	},
	form_group: {
		marginVertical: 5,
		flexDirection: "row",
		alignItems: "center",
	},

	form_group_save: {
		marginHorizontal: 10,
		justifyContent: "flex-end",
		flexDirection: "row",
	},

	inputform: {
		padding: 5,
		width: "55%",
		borderColor: "#DDDDDD",
		borderWidth: 1,
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

	// modal loan

	bodyheaderrequestloan: {
		height: 60,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
	},

	card_request: {
		flexDirection: "row",
		alignItems: "center",
	},

	text_jml: {
		fontSize: 18,
		width: "20%",
	},
	textinputrequestloan: {
		borderColor: "#DDDDDD",
		borderWidth: 1,
		width: "70%",
		padding: 3,
	},
	bodylistfriend: {
		height: 500,
	},

	container_getnameloan: {
		borderColor: "#DDDDDD",
		borderWidth: 1,
		padding: 5,
	},

	getNameloan: {
		width: "90%",
		borderColor: "#DDDDDD",
		borderBottomWidth: 1,
		marginVertical: 2,
		fontSize: 20,
		padding: 5,
	},
	getNameloanselected: {
		width: "90%",
		borderColor: "blue",
		borderBottomWidth: 1,
		marginVertical: 2,
		fontSize: 20,
		padding: 5,
	},
	containerfooterrequestloan: {
		flexDirection: "row",
		justifyContent: "flex-end",
		margin: 20,
	},
	btn_req_loan: {
		marginHorizontal: 10,
	},
	textbtn: {
		fontSize: 17,
		color: "#0066cc",
	},
	iconsloan: {
		width: 25,
		height: 25,
	},

	// end modal loan

	// modal send payment

	containerModalSendPayment: {
		paddingHorizontal: 10,
		position: "absolute",
		bottom: 0,
		height: 100,
		width: "100%",
		backgroundColor: "#F5F5F5",
		elevation: 10,
	},
	parasend: {
		width: "30%",
		fontSize: 18,
	},

	textinputsend: {
		width: "60%",
		borderWidth: 1,
		borderColor: "#DDDDDD",
		padding: 3,
	},
	form_group_btn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		marginRight: 20,
	},
	btn_sendPayment: {
		margin: 10,
	},
	parabtn: {
		fontSize: 18,
	},

	// end modal send payment

	icons: {
		width: 25,
		height: 25,
	},
	top_nav: {
		flexDirection: "row",
		marginHorizontal: 8,
	},
	link: {
		width: 30,
		height: 30,
	},
	link_add_friend: {
		position: "absolute",
		right: 0,
	},
	info_title: {
		marginVertical: 10,
		marginLeft: 10,
		fontSize: 24,
		color: "#0066cc",
		fontWeight: "bold",
	},
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
		// backgroundColor: "#0066cc",
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

	// card
	// send
	card: {
		flexDirection: "row",
		marginTop: 15,
		marginHorizontal: 10,
		elevation: 5,
		backgroundColor: "#ffffff",
		padding: 20,
		alignItems: "center",
		borderRadius: 5,
	},
	icons_card: {
		width: 30,
		height: 30,
	},
	container_info_card: {
		flex: 1,
		marginHorizontal: 10,
	},
	gender_card: {
		color: "#0066cc",
	},
	name_card: {
		fontSize: 20,
	},
	icons_card_dollar: {
		width: 20,
		height: 20,
	},
	// end send
	// loan
	request_loan: {
		marginVertical: 20,
		width: "35%",
		padding: 5,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		backgroundColor: "#ffffff",
		elevation: 5,
		marginHorizontal: 10,
	},
	info_loan: {
		textAlign: "center",
		color: "#0066cc",
		fontSize: 20,
	},
	// end loan
});

module.exports = styles;
