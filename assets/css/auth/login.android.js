import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	// view logo
	view_logo: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo_container: {
		width: 170,
		height: 170,
		borderRadius: 170 / 2,
		backgroundColor: "#2196F3",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 90,
		height: 90,
	},
	// end view logo
	// view email form
	container_email: {
		height: 70,
		marginHorizontal: 15,
		marginVertical: 5,
		backgroundColor: "#ffffff",
		borderRadius: 30,
		elevation: 10,
		padding: 10,
	},
	form_input_email: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
	},
	para_form: {
		fontSize: 15,
		color: "#A0A0A0",
		marginLeft: 10,
	},
	input: {
		borderColor: "#ffffff",
		borderWidth: 2,
		width: "80%",
		marginLeft: 10,
	},
	logo_form: {
		width: 20,
		height: 20,
	},
	// end view email from
	// view password form
	container_password: {
		height: 70,
		marginVertical: 5,
		marginHorizontal: 15,
		backgroundColor: "#ffffff",
		borderRadius: 30,
		elevation: 10,
		padding: 10,
	},
	form_input_password: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
	},
	para_form: {
		fontSize: 15,
		color: "#A0A0A0",
		marginLeft: 10,
	},
	input: {
		borderColor: "#ffffff",
		borderWidth: 2,
		width: "80%",
		marginLeft: 10,
	},
	logo_form: {
		width: 20,
		height: 20,
	},
	// end password form
	view_button: {
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		marginVertical: 2,
		marginHorizontal: 15,
	},
	Btn: {
		flex: 1,
		justifyContent: "center",
		marginVertical: 4,
		alignItems: "center",
		backgroundColor: "#2196F3",
		borderRadius: 30,
		width: "100%",
	},
	text_btn: {
		color: "#ffffff",
	},
	// end button
	// view singup
	view_singup: {
		flex: 2,
		flexDirection: "row",
		position: "relative",
		marginVertical: 2,
		marginHorizontal: 35,
	},
	singup: {
		position: "absolute",
		left: 0,
	},
	forgot_pass: {
		position: "absolute",
		right: 0,
	},
	text_btn_bottom: {
		color: "#A0A0A0",
	},
	// end singup
});

module.exports = styles;
