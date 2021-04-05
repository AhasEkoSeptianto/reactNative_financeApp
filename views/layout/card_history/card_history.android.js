import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./card_history_css.android.js";

// img
import PaymentGet from "./../../../assets/img/payment_get.png";

class all extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// alert(JSON.stringify(this.props.data));
	}

	render() {
		return (
			<ScrollView style={styles.payment_comp}>
				{this.props.data.reverse().map((val, index) => (
					<View style={styles.container_payment} key={index}>
						<Image
							source={PaymentGet}
							style={styles.logo_payment}
						/>
						<View style={styles.info_payment}>
							<Text>{val.payment}</Text>
							<Text>Payment with {val.from}</Text>
							<Text>{val.time}</Text>
						</View>
						<Text style={styles.price}>$ {val.total}</Text>
					</View>
				))}
			</ScrollView>
		);
	}
}
export default all;
