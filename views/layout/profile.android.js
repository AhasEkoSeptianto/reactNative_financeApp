import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

// css
import styles from "./../../assets/css/layout/profile.android.js";

// router
import { Link } from "react-router-native";

// img hero
import Hero from "./../../assets/img/avatar/hero.jpg";

// img
import BackArrow from "./../../assets/img/backArrowWhite.png";
import Settings from "./../../assets/img/setting.png";

import { LinearGradient } from "expo-linear-gradient";

// redux
import { connect } from "react-redux";

class profile extends React.Component {
	render() {
		return (
			<View style={styles.body}>
				{/* top container */}
				<LinearGradient
					// Button Linear Gradient
					colors={["#0066cc", "#4892DC", "#A8D4FF"]}
					style={styles.comp_top}
				>
					{/* headers */}

					<View style={styles.comp_headers}>
						<TouchableHighlight>
							<Link
								to="/home"
								style={styles.link}
								underlayColor="transparent"
							>
								<Image
									source={BackArrow}
									style={styles.icons}
								/>
							</Link>
						</TouchableHighlight>
						<View style={styles.container_title_profile}>
							<Text style={styles.title_profile}>Profile</Text>
						</View>
						<TouchableHighlight>
							<Link
								to="/profile_/settings"
								underlayColor="transparent"
								styles={styles.link}
							>
								<Image source={Settings} style={styles.icons} />
							</Link>
						</TouchableHighlight>
						{/* pemisah untuk last comp */}
					</View>
					{/* end headers */}
					<View style={styles.imgHero}>
						<Image source={Hero} style={styles.img_hero} />
						<Text style={styles.hero_name}>
							{this.props.contact.name}
						</Text>
					</View>
				</LinearGradient>
				{/* top container */}

				{/* bottom */}
				<View style={styles.comp_bottom}>
					<View style={styles.container_userInfo}>
						<Text style={styles.title_info}>ID</Text>
						<Text style={styles.subtitle_info}>
							{this.props.id}
						</Text>
					</View>
					<View style={styles.container_userInfo}>
						<Text style={styles.title_info}>Email</Text>
						<Text style={styles.subtitle_info}>
							{this.props.contact.email}
						</Text>
					</View>
					<View style={styles.container_userInfo}>
						<Text style={styles.title_info}>Phone</Text>
						<Text style={styles.subtitle_info}>
							{this.props.contact.phone}
						</Text>
					</View>
					<View style={styles.container_userInfo}>
						<Text style={styles.title_info}>Github</Text>
						<Text style={styles.subtitle_info}>
							{this.props.contact.github}
						</Text>
					</View>
				</View>
				{/* end bottom */}
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		id: state.id,
		contact: state.contact,
	};
};

export default connect(mapStateToProps, null)(profile);
