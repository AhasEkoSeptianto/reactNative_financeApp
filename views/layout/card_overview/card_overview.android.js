import React from "react";

import { View, Text, Image } from "react-native";

// css
import styles from "./card_overview_css.android.js";

// Picture
import UpArrows from "./../../../assets/img/up_arrow.png";
import DownArrows from "./../../../assets/img/bot_arrow.png";
import DollarsIcons from "./../../../assets/img/dollar_icons.png";

function card_overview(props) {
	return (
		<>
			<View style={styles.send_overview}>
				<View style={styles.img}>
					<Image source={UpArrows} style={styles.logo_img} />
				</View>
				<View style={styles.info_payment}>
					<Text style={styles.para_info_payment}>Send</Text>
					<Text style={styles.sub_para_info_payment}>
						sending payment to client
					</Text>
				</View>
				<View style={styles.payment}>
					<Text style={styles.para_payment}>${props.income}</Text>
				</View>
			</View>
			<View style={styles.send_overview}>
				<View style={styles.img}>
					<Image source={DownArrows} style={styles.logo_img} />
				</View>
				<View style={styles.info_payment}>
					<Text style={styles.para_info_payment}>Receive</Text>
					<Text style={styles.sub_para_info_payment}>
						receive salary from company
					</Text>
				</View>
				<View style={styles.payment}>
					<Text style={styles.para_payment}>${props.expense}</Text>
				</View>
			</View>
			<View style={styles.send_overview}>
				<View style={styles.img}>
					<Image source={DollarsIcons} style={styles.logo_img} />
				</View>
				<View style={styles.info_payment}>
					<Text style={styles.para_info_payment}>Loan</Text>
					<Text style={styles.sub_para_info_payment}>
						loan for the car
					</Text>
				</View>
				<View style={styles.payment}>
					<Text style={styles.para_payment}>${props.loan}</Text>
				</View>
			</View>
		</>
	);
}

export default card_overview;
