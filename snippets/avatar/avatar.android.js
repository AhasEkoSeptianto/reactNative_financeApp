import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Avatar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.master}>
				{/* top img */}
				<View>
					<Image source={this.props.imgOne} style={styles.img} />
				</View>
				{/* second top img */}
				<View style={styles.second_container}>
					<Image
						source={this.props.imgTwo}
						style={styles.second_img}
					/>
					<Image
						source={this.props.imgThree}
						style={styles.second_img}
					/>
				</View>
				<View style={styles.last_container}>
					<Image
						source={this.props.imgFour}
						style={styles.last_img}
					/>
					<Image
						source={this.props.imgFive}
						style={styles.last_img}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		width: 70,
		height: 70,
		borderRadius: 50,
		borderColor: "#ffffff",
		borderWidth: 2,
	},
	master: {
		marginTop: -50,
		height: 380,
		justifyContent: "center",
		alignItems: "center",
		zIndex: -1,
	},
	second_container: {
		flexDirection: "row",
		marginTop: 20,
	},
	second_img: {
		width: 70,
		height: 70,
		borderRadius: 50,
		borderColor: "#ffffff",
		borderWidth: 2,
		marginHorizontal: 90,
	},
	last_container: {
		flexDirection: "row",
		marginTop: 50,
	},
	last_img: {
		width: 70,
		height: 70,
		borderColor: "#ffffff",
		borderWidth: 2,
		borderRadius: 50,
		marginHorizontal: 70,
	},
});

export default Avatar;
