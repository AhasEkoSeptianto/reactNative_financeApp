import React from "react";
import {
	Text,
	TextInput,
	Image,
	View,
	TouchableHighlight,
	SafeAreaView,
	ScrollView,
	Modal,
} from "react-native";

// my css
import styles from "./../../assets/css/layout/payment.android.js";

// icons
import BackArrow from "./../../assets/img/back-arrow.png";
import Dollar from "./../../assets/img/dollar.png";
import Boy from "./../../assets/img/boy.png";
import Girl from "./../../assets/img/girl.png";
import AddFriends from "./../../assets/img/add-friend.png";
import checklist from "./../../assets/img/checklist.png";

// router
import { Link } from "react-router-native";

// redux
import { connect } from "react-redux";

import * as DocumentPicker from "expo-document-picker";
import Axios from "axios";

class payments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalrequestloan: false,
			modaladdfriens: false,
			modalSendPayment: false,
			totalRequestLoan: null,
			sendTo: null, //send payment to ?
			loan: 0,
			requestToLoan: [],
			totalSendmoney: null,
			btn_send: true,
			btn_loan: false,
		};
	}

	btnTransaction = (val) => {
		switch (val) {
			case "send": {
				this.setState({ btn_send: true, btn_loan: false });
				break;
			}
			case "loan": {
				this.setState({ btn_loan: true, btn_send: false });
				break;
			}
		}
	};

	_sendPayment = async () => {
		console.log("here = ", this.state.totalSendmoney);
		await Axios(
			"https://api-finance-app-reactnative.herokuapp.com/api/payment/send",
			{
				id: this.props.id,
				money: this.state.totalSendmoney,
			}
		)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	requestLoan = async () => {
		await Axios({
			method: "POST",
			url:
				"https://api-finance-app-reactnative.herokuapp.com/api/payment/loan",
			data: {
				id: this.props.id,
				friend: this.state.requestToLoan,
				total: this.state.totalRequestLoan,
			},
		})
			.then(async (res) => {
				await this.props.sendPayment(res.data.newmoney);
				await this.props.rekaphistory(res.data.newhis);
				alert("success");
				this.setState({ modalrequestloan: false });
			})
			.catch((e) => console.log(e));
	};

	async componentDidMount() {
		this.props.loan.map((val) => {
			this.setState({ loan: (this.state.loan += val.total) });
		});
		await this.props.friend.map((val) => {
			this.state[val.name] = null;
		});
	}

	render() {
		return (
			<SafeAreaView
				style={
					this.state.modalSendPayment === true
						? styles.body_modal
						: styles.body
				}
			>
				{/* modal add-friend */}
				<Modal
					animationType="slide"
					visible={this.state.modaladdfriens}
				>
					<View style={styles.container_modal}>
						<View style={{ flex: 1 }}>
							<Text style={styles.titlemodal}>Add friend</Text>
							<View style={styles.form_group}>
								<Text style={styles.para_form}>
									Masukan Nama
								</Text>
								<TextInput style={styles.inputform} />
							</View>
							<View style={styles.form_group}>
								<Text style={styles.para_form}>Masukan ID</Text>
								<TextInput style={styles.inputform} />
							</View>
							<View style={styles.form_group}>
								<Text style={styles.para_form}>
									Masukan Gender
								</Text>
								<TextInput
									style={styles.inputform}
									placeholder={"male/female"}
								/>
							</View>
						</View>
						<View style={styles.form_group_save}>
							<TouchableHighlight
								underlayColor="transparent"
								style={styles.button_modal}
								onPress={() =>
									this.setState({ modaladdfriens: false })
								}
							>
								<Text style={styles.text_btn_modal}>
									CANCEL
								</Text>
							</TouchableHighlight>
							<TouchableHighlight
								underlayColor="transparent"
								style={styles.button_modal}
								onPress={async () => {
									this.setState({ modaladdfriens: false });
									alert("features coming soon");
								}}
							>
								<Text style={styles.text_btn_modal}>SAVE</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>
				{/* end modal add friend */}

				{/* modal request laon */}

				<Modal
					animationType="slide"
					visible={this.state.modalrequestloan}
				>
					<View style={styles.container_modal}>
						<View style={styles.bodyheaderrequestloan}>
							<Text style={styles.text_jml}>Jumlah</Text>
							<TextInput
								style={styles.textinputrequestloan}
								placeholder={"Rp."}
								onChangeText={(text) =>
									this.setState({ totalRequestLoan: text })
								}
							/>
						</View>
						<View style={styles.bodylistfriend}>
							<ScrollView style={styles.container_getnameloan}>
								{this.props.friend.map((val, index) => (
									<View
										style={styles.card_request}
										key={index}
									>
										<Text
											onPress={() => {
												var deleteexistfriend = this.state.requestToLoan.filter(
													(e) => e.name !== val.name
												);

												this.state[val.name] === null
													? this.setState({
															[val.name]: true,
															requestToLoan: [
																...this.state
																	.requestToLoan,
																{
																	name:
																		val.name,
																	gender:
																		val.gender,
																},
															],
													  })
													: this.setState({
															[val.name]: null,
															requestToLoan: deleteexistfriend,
													  });
											}}
											style={
												this.state[val.name] === null
													? styles.getNameloan
													: styles.getNameloanselected
											}
										>
											{val.name}
										</Text>
										{/* check jika nama teman dipilih maka akan tampil checklist */}
										{this.state[val.name] ===
										null ? null : (
											<Image
												source={checklist}
												style={styles.iconsloan}
											/>
										)}
										{/* end tampil nama checklist */}
									</View>
								))}
							</ScrollView>
						</View>
						<View style={styles.containerfooterrequestloan}>
							<TouchableHighlight
								underlayColor="transparent"
								onPress={() =>
									this.setState({ modalrequestloan: false })
								}
								style={styles.btn_req_loan}
							>
								<Text style={styles.textbtn}>Cancel</Text>
							</TouchableHighlight>
							<TouchableHighlight
								onPress={() => {
									this.requestLoan();
								}}
								style={styles.btn_req_loan}
							>
								<Text style={styles.textbtn}>Request</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				{/* end modal request loan */}

				{/* modal send payment */}

				<Modal
					animationType="slide"
					visible={this.state.modalSendPayment}
					transparent={true}
				>
					<View style={styles.containerModalSendPayment}>
						<View style={styles.form_group}>
							<Text style={styles.parasend}>
								Send to {this.state.sendTo}{" "}
							</Text>
							<TextInput
								style={styles.textinputsend}
								onChangeText={(money) => {
									this.setState({ totalSendmoney: money });
								}}
								placeholder="Rp."
							/>
						</View>
						<View style={styles.form_group_btn}>
							<TouchableHighlight
								underlayColor="transparent"
								style={styles.btn_sendPayment}
								onPress={() =>
									this.setState({ modalSendPayment: false })
								}
							>
								<Text style={styles.parabtn}>Cancel</Text>
							</TouchableHighlight>
							<TouchableHighlight
								style={styles.btn_sendPayment}
								underlayColor="transparent"
								onPress={() => {
									this.setState({ modalSendPayment: false });
									this._sendPayment();
								}}
							>
								<Text style={styles.parabtn}>Send</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				{/* end modal send panment */}

				{/* main ====>  */}
				<ScrollView>
					<View style={styles.top_nav}>
						<Link
							to="/home"
							underlayColor="transparent"
							style={styles.link}
						>
							<Image source={BackArrow} style={styles.icons} />
						</Link>
						<TouchableHighlight
							onPress={() =>
								this.setState({ modaladdfriens: true })
							}
							underlayColor="transparent"
							style={styles.link_add_friend}
						>
							<Image source={AddFriends} style={styles.icons} />
						</TouchableHighlight>
					</View>
					<Text style={styles.info_title}>Payments</Text>

					{/* select payment  */}
					<View style={styles.choiseTransaction}>
						<TouchableHighlight
							onPress={() => this.btnTransaction("send")}
							underlayColor="#DDDDDD"
							style={
								this.state.btn_send === true
									? styles.comp_choise_active
									: styles.comp_choise_notActive
							}
						>
							<Text
								style={
									this.state.btn_send === true
										? styles.para_active
										: styles.para_notActive
								}
							>
								send
							</Text>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => {
								this.btnTransaction("loan");
							}}
							underlayColor="#DDDDDD"
							style={
								this.state.btn_loan === true
									? styles.comp_choise_active
									: styles.comp_choise_notActive
							}
						>
							<Text
								style={
									this.state.btn_loan === true
										? styles.para_active
										: styles.para_notActive
								}
							>
								loan
							</Text>
						</TouchableHighlight>
					</View>

					{this.state.btn_send === true ? (
						// view untuk send tf
						this.props.friend.map((val, index) => (
							<View
								onPress={() => console.log("clicker")}
								style={styles.card}
								key={index}
							>
								{val.gender === "male" ? (
									<Image
										source={Boy}
										style={styles.icons_card}
									/>
								) : (
									<Image
										source={Girl}
										style={styles.icons_card}
									/>
								)}
								<View style={styles.container_info_card}>
									<Text style={styles.gender_card}>
										{val.gender}
									</Text>
									<Text style={styles.name_card}>
										{val.name}
									</Text>
								</View>
								<TouchableHighlight
									underlayColor="transparent"
									onPress={() =>
										this.setState({
											modalSendPayment: true,
											sendTo: val.name,
										})
									}
								>
									<Image
										source={Dollar}
										style={styles.icons_card_dollar}
									/>
								</TouchableHighlight>
							</View>
						))
					) : (
						// end untuk send tf
						// view untuk hutang
						<View>
							<TouchableHighlight
								onPress={() =>
									this.setState({ modalrequestloan: true })
								}
								underlayColor="#DDDDDD"
								style={styles.request_loan}
							>
								<Text>Request To Friends ? </Text>
							</TouchableHighlight>
							<Text style={styles.info_loan}>
								You have {this.state.loan} loan
							</Text>
							<Text style={styles.info_loan}>
								from {this.props.loan.length} people
							</Text>

							{this.props.loan.map((val, index) => (
								<View style={styles.card} key={index}>
									{val.gender === "male" ? (
										<Image
											source={Boy}
											style={styles.icons_card}
										/>
									) : (
										<Image
											source={Girl}
											style={styles.icons_card}
										/>
									)}
									<View style={styles.container_info_card}>
										<Text style={styles.gender_card}>
											{val.gender}
										</Text>
										<Text style={styles.name_card}>
											{val.name}
										</Text>
									</View>
									<Image
										source={Dollar}
										style={styles.icons_card_dollar}
									/>
									<Text>{val.total}</Text>
								</View>
							))}
							{/* end view hutang */}
						</View>
					)}
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		id: state.id,
		his: state.payment_his,
		money: state.money,
		friend: state.friend,
		loan: state.money.loan,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendPayment: (newMoney) =>
			dispatch({ type: "sendPayment", money: newMoney }),
		rekaphistory: (newHis) =>
			dispatch({ type: "rekapincome", payment_his: newHis }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(payments);
