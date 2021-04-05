import { StyleSheet } from "react-native";

// #0066cc <- blue

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 27,
		backgroundColor: "#F0F8FF",
	},
	// top
	link: {
		width: 30,
		height: 30,
	},
	icons: {
		width: 25,
		height: 25,
	},
	comp_headers: {
		flexDirection: "row",
		marginVertical: 10,
		marginHorizontal: 5,
	},
	container_title_profile: {
		flex: 1,
	},
	title_profile: {
		textAlign: "center",
		color: "#ffffff",
		fontSize: 20,
	},
	comp_top: {
		height: 330,
		width: "100%",
	},
	img_hero: {
		width: 120,
		height: 120,
		borderRadius: 120 / 2,
	},
	imgHero: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 50,
	},

	hero_name: {
		marginTop: 10,
		color: "#ffffff",
		fontSize: 20,
	},
	// end top

	// bottom
	comp_bottom: {
		marginHorizontal: 30,
		marginVertical: 30,
	},
	container_userInfo: {
		margin: 5,
		paddingBottom: 15,
		borderBottomColor: "#DDDDDD",
		borderBottomWidth: 1,
	},
	title_info: {
		color: "#0066cc",
		fontSize: 19,
	},
	subtitle_info: {
		fontSize: 20,
	},
	// end bottom
});

module.exports = styles;
