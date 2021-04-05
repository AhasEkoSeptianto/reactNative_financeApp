import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

// link
import { Link, Redirect } from "react-router-native";

// my css
import styles from "./../../assets/css/layout/history.android.js";

// snippets
import AvatarMaster from "./../../snippets/avatar/masterAvatar.android.js";
import AvatartFriends from "./../../snippets/avatar/avatar.android.js";

// img
import BackArrow from "./../../assets/img/back-arrow.png";
import Search from "./../../assets/img/search.png";
// hero
import Hero from "./../../assets/img/hero.jpg";
import Hero_1 from "./../../assets/img/avatar/hero_1.png";
import Hero_2 from "./../../assets/img/avatar/hero_2.png";
import Hero_3 from "./../../assets/img/avatar/hero_3.png";
import Hero_4 from "./../../assets/img/avatar/hero_4.png";
import Hero_5 from "./../../assets/img/avatar/hero_5.png";

// redux
import { connect } from "react-redux";

// card
import Card_all from "./card_history/card_history.android.js";

class History extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			back: false,
			btn_all: true,
			btn_income: false,
			btn_expense: false,
		};
	}

	btnTransaction = (val) => {
		switch (val) {
			case "all": {
				this.setState({
					btn_all: true,
					btn_income: false,
					btn_expense: false,
				});
				break;
			}
			case "income": {
				this.setState({
					btn_all: false,
					btn_income: true,
					btn_expense: false,
				});
				break;
			}
			case "expense": {
				this.setState({
					btn_all: false,
					btn_income: false,
					btn_expense: true,
				});
				break;
			}
		}
	};

	render() {
		return (
			<View style={styles.body}>
				{/* top components */}
				<View style={styles.top_comp}>
					<Link
						to="/home"
						style={styles.linkBack}
						underlayColor="transparent"
					>
						<Image source={BackArrow} style={styles.backArrow} />
					</Link>
					<Image source={Search} style={styles.search} />
				</View>
				{/* end top component */}

				<Text style={styles.header}>Recent Transactions</Text>
				<View style={styles.choiseTransaction}>
					<TouchableHighlight
						onPress={() => this.btnTransaction("all")}
						underlayColor="#DDDDDD"
						style={
							this.state.btn_all === true
								? styles.comp_choise_active
								: styles.comp_choise_notActive
						}
					>
						<Text
							style={
								this.state.btn_all === true
									? styles.para_active
									: styles.para_notActive
							}
						>
							All
						</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => this.btnTransaction("income")}
						underlayColor="#DDDDDD"
						style={
							this.state.btn_income === true
								? styles.comp_choise_active
								: styles.comp_choise_notActive
						}
					>
						<Text
							style={
								this.state.btn_income === true
									? styles.para_active
									: styles.para_notActive
							}
						>
							Income
						</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => this.btnTransaction("expense")}
						underlayColor="#DDDDDD"
						style={
							this.state.btn_expense === true
								? styles.comp_choise_active
								: styles.comp_choise_notActive
						}
					>
						<Text
							style={
								this.state.btn_expense === true
									? styles.para_active
									: styles.para_notActive
							}
						>
							Expense
						</Text>
					</TouchableHighlight>
				</View>
				<Text style={styles.subHeader}>Today</Text>

				{/* data set */}

				{this.state.btn_all === true ? (
					<Card_all data={[...this.props.payment_his.all]} />
				) : null}

				{this.state.btn_income === true ? (
					<Card_all data={[...this.props.payment_his.income]} />
				) : null}

				{this.state.btn_expense === true ? (
					<Card_all data={[...this.props.payment_his.expense]} />
				) : null}

				{/* end data set */}

				{/* background image */}
				<View style={styles.comp_background}>
					<View>
						<AvatarMaster img={Hero} />
					</View>
				</View>
				{/* background img friends */}
				<View style={styles.comp_background}>
					<AvatartFriends
						imgOne={Hero_1}
						imgTwo={Hero_2}
						imgThree={Hero_3}
						imgFour={Hero_4}
						imgFive={Hero_5}
					/>
				</View>

				{/* end background image */}
				{/* button see detail */}
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.payment_his);
	return {
		payment_his: state.payment_his,
	};
};

export default connect(mapStateToProps, null)(History);
