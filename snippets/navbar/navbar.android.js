import React from "react";

import {
	Text,
	View,
	Image,
	TouchableOpacity,
	DrawerLayoutAndroid,
} from "react-native";
import { Link } from "react-router-native";

import styles from "./navbar_css.android.js";

// my icons
import Home from "./../../assets/img/home.png";
import Purse from "./../../assets/img/purse.png";
import ReactIcons from "./../../assets/img/react.png";
import Dollar from "./../../assets/img/dollar.png";
import Profile from "./../../assets/img/profile.png";

export class navbar extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.navHome}>
					<Image source={Home} style={styles.icons_nav} />
				</View>
				<Link
					to="/history"
					style={styles.navhistory}
					underlayColor="#DDDDDD"
				>
					<Image source={Purse} style={styles.icons_nav} />
				</Link>
				<View style={styles.logo}>
					<Image source={ReactIcons} style={styles.icons_react} />
				</View>
				<Link
					to="/payment"
					underlayColor="#DDDDDD"
					style={styles.payment}
				>
					<Image source={Dollar} style={styles.icons_nav} />
				</Link>
				<Link
					to="/profile"
					style={styles.profile}
					underlayColor="#DDDDDD"
				>
					<Image source={Profile} style={styles.icons_nav} />
				</Link>
			</View>
		);
	}
}

export default navbar;
