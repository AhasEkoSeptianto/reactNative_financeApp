import React from "react";
import {
	View,
	Text,
	Modal,
	TouchableHighlight,
	Image,
	TextInput,
	ActivityIndicator,
	AsyncStorage,
} from "react-native";

// mycss
import styles from "./../../../assets/css/layout/profile_/settings.android.js";

// import image
import Hero from "./../../../assets/img/hero.jpg";
import Edit from "./../../../assets/img/edit.png";
import BackArrow from "./../../../assets/img/back-arrow.png";
import Logout from "./../../../assets/img/logout.png";

import { Link } from "react-router-native";

// redux
import { connect } from "react-redux";

// axios
import Axios from "axios";

class settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			modalaccount_name: null,
			new_user: {
				name: this.props.contact.name,
				phone: this.props.contact.phone,
				email: this.props.contact.email,
				github: this.props.contact.github,
			},
			old_user: {
				name: this.props.contact.name,
				phone: this.props.contact.phone,
				email: this.props.contact.email,
				github: this.props.contact.github,
			},
			isLoading: false,
		};
	}

	_logout = async () => {
		console.log("logout");
		await AsyncStorage.multiRemove(["token", "user_id"]);
	};

	update_account = async () => {
		// update loading
		this.setState({ isLoading: true });

		let user = await Axios.post(
			"https://api-finance-app-reactnative.herokuapp.com/api/account/update",
			{
				id: this.props.id,
				new_user: this.state.new_user.name,
				new_account: this.state.new_user,
			}
		)
			.then(async (res) => {
				await this.props.Update(this.state.new_user); //update ke backend
				// update pada ui account
				this.setState({
					old_user: {
						...this.state.new_user,
					},
				});
			})
			.catch((err) => {
				alert(err);
			});

		this.setState({ isLoading: false });
	};

	render() {
		return (
			<View
				style={[
					this.state.modalVisible ? styles.body_modal : styles.body,
					{
						opacity: this.state.fadeAnim, // Bind opacity to animated value
					},
				]}
			>
				{/* modal */}

				<Modal
					animationType="slide"
					visible={this.state.modalVisible}
					transparent={true}
				>
					<View style={styles.container_modal}>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.para_modal}>
								Enter your {this.state.modalaccount_name}
							</Text>
							{this.state.isLoading === true ? (
								<ActivityIndicator
									size="small"
									color="#0000ff"
								/>
							) : null}
						</View>

						<TextInput
							// jika user update nomor hp maka akan diset keyboard hanya number
							keyboardType={
								this.state.modalaccount_name === "phone"
									? "number-pad"
									: "default"
							}
							autoCapitalize="none"
							style={styles.inputform}
							onChangeText={(value) => {
								this.setState({
									new_user: {
										...this.state.new_user,
										[this.state.modalaccount_name]: value,
									},
								});
							}}
						/>
						<View style={styles.form_group_modal}>
							<TouchableHighlight
								underlayColor="transparent"
								style={styles.button_modal}
								onPress={() =>
									this.setState({ modalVisible: false })
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
									await this.update_account();
									this.setState({ modalVisible: false });
								}}
							>
								<Text style={styles.text_btn_modal}>SAVE</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				{/* end modal */}

				{/* header */}

				<View style={styles.comp_header}>
					<Link
						to="/profile"
						underlayColor="transparent"
						style={styles.link}
					>
						<Image source={BackArrow} style={styles.header_icons} />
					</Link>
				</View>

				{/* end header */}

				<View style={styles.card_img}>
					<Image source={Hero} style={styles.img_hero} />
				</View>

				{/* disini adalah componenct card untuk pilihan edit user  */}
				{/* card name */}
				<View style={styles.card}>
					<View style={{ flex: 1 }}>
						<Text style={styles.info}>Change your name </Text>
						<Text style={styles.info_user}>
							{this.state.old_user.name}
						</Text>
					</View>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={() => {
							this.setState({
								modalVisible: true,
								modalaccount_name: "name",
							});
						}}
					>
						<Image source={Edit} style={styles.edit_icons} />
					</TouchableHighlight>
				</View>

				{/* card phone */}
				<View style={styles.card}>
					<View style={{ flex: 1 }}>
						<Text style={styles.info}>Change your phone </Text>
						<Text style={styles.info_user}>
							{this.state.old_user.phone}
						</Text>
					</View>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={() => {
							this.setState({
								modalVisible: true,
								modalaccount_name: "phone",
							});
						}}
					>
						<Image source={Edit} style={styles.edit_icons} />
					</TouchableHighlight>
				</View>
				{/* card email */}
				<View style={styles.card}>
					<View style={{ flex: 1 }}>
						<Text style={styles.info}>Change your email </Text>
						<Text style={styles.info_user}>
							{this.state.old_user.email}
						</Text>
					</View>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={() => {
							this.setState({
								modalVisible: true,
								modalaccount_name: "email",
							});
						}}
					>
						<Image source={Edit} style={styles.edit_icons} />
					</TouchableHighlight>
				</View>

				{/* card github */}
				<View style={styles.card}>
					<View style={{ flex: 1 }}>
						<Text style={styles.info}>Change your github </Text>
						<Text style={styles.info_user}>
							{this.state.old_user.github}
						</Text>
					</View>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={() => {
							this.setState({
								modalVisible: true,
								modalaccount_name: "github",
							});
						}}
					>
						<Image source={Edit} style={styles.edit_icons} />
					</TouchableHighlight>
				</View>

				{/* disini akhir dari card edit user */}

				<Link
					to="/Login"
					onPress={() => {
						this._logout();
					}}
					style={styles.linkLogout}
					underlayColor="transparent"
				>
					<View style={styles.card}>
						<Text style={styles.text_logout}>Logout</Text>
						<Image source={Logout} style={styles.edit_icons} />
					</View>
				</Link>
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

const mapDispatchToProps = (dispatch) => {
	return {
		Update: (new_contact) => {
			dispatch({ type: "UpdateAccount", contact: new_contact });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(settings);
