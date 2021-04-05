import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// my assets
import Hero1 from "./../../assets/img/avatar/hero_1.png";

class Avatar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.tail}>
				<View style={styles.space_two}>
					<View style={styles.gray}>
						<View style={styles.space_one}>
							<View style={styles.border_blue}>
								<View style={styles.border_white}>
									<Image
										source={this.props.img}
										style={styles.img}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		width: 70,
		height: 70,
		borderRadius: 79 / 2,
	},
	border_white: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ffffff",
		width: 75,
		height: 75,
		borderRadius: 75 / 2,
	},
	border_blue: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#0066cc",
		width: 85,
		height: 85,
		borderRadius: 85 / 2,
	},
	space_one: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F0F8FF",
		width: 120,
		height: 120,
		borderRadius: 120 / 2,
	},
	gray: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#C7E4FF",
		width: 165,
		height: 165,
		borderRadius: 165 / 2,
	},
	space_two: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F0F8FF",
		width: 235,
		height: 235,
		borderRadius: 235 / 2,
	},
	tail: {
		zIndex: -1,
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#C7E4FF",
		width: 245,
		height: 245,
		borderRadius: 245 / 2,
	},
});

export default Avatar;
