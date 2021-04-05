import React from "react";

import { View, Text, ScrollView, Image } from "react-native";

// mycss
import styles from "./../../assets/css/layout/home.android.js";

// navbar bottom
import NavBot from "./../../snippets/navbar/navbar.android.js";

// Picture
import myPict from "./../../assets/img/hero.jpg";
import Bell from "./../../assets/img/bell.png";

// my card
import CardOverview from "./card_overview/card_overview.android.js";

// redux
import { connect } from "react-redux";

export class home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loan: 0,
		};
	}

	async componentDidMount() {
		await this.props.money.loan.map((val) => {
			this.setState({ loan: (this.state.loan += val.total) });
		});
	}

	render() {
		return (
			<View style={styles.body}>
				<View style={styles.imageHeader}>
					<Image source={myPict} style={styles.pictHero} />
					<Text style={styles.name}>{this.props.contact.name}</Text>
					<Text style={styles.as_profile}>
						React Native Developer
					</Text>
					<View style={styles.container_headerKeuangan}>
						<View style={styles.container_headerKeuangan_left}>
							<Text style={styles.para_money_header}>
								${this.props.money.income}
							</Text>
							<Text>Income</Text>
						</View>
						<View style={styles.container_headerKeuangan_mid}>
							<Text style={styles.para_money_header}>
								${this.props.money.expense}
							</Text>
							<Text>Expenses</Text>
						</View>
						<View style={styles.container_headerKeuangan_right}>
							<Text style={styles.para_money_header}>
								${this.state.loan}
							</Text>
							<Text>Loan</Text>
						</View>
					</View>
				</View>
				<View style={styles.comp_container_overview}>
					{/* container overview */}
					<View style={styles.container_title_overview}>
						<Text style={styles.left_title_overview}>Overview</Text>
						<Image source={Bell} style={styles.bell_img} />
						<Text style={styles.right_title_overview}>
							{new Date().toISOString().split("T")[0]}
						</Text>
					</View>

					{/* card list */}
					<CardOverview
						income={this.props.money.income}
						expense={this.props.money.expense}
						loan={this.state.loan}
					/>
				</View>
				{/* navbar bottom */}
				<NavBot />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contact: state.contact,
		money: state.money,
	};
};

export default connect(mapStateToProps, null)(home);
