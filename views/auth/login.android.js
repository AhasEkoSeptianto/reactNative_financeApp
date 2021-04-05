import React from "react";

import {
	View,
	Text,
	Image,
	TextInput,
	TouchableHighlight,
	KeyboardAvoidingView,
	ActivityIndicator,
	AsyncStorage,
} from "react-native";

import styles from "./../../assets/css/auth/login.android.js";

// mylogo
import Logo from "./../../assets/img/key.png";
import Email from "./../../assets/img/mail.png";
import Password from "./../../assets/img/password.png";

// router-react-native
import { Redirect } from "react-router-native";

// axios
import Axios from "axios";

// redux
import { connect } from "react-redux";

class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			login: false,
			isLoading: false,
			isAuth: false,
			isLoan: false,
			isLoad: true, // untuk menghandel ui jika belum terload semua
		};
	}

	_storeData = async (token, user) => {
		try {
			// console.log("user = ", user);
			await AsyncStorage.multiSet([
				["token", token],
				["user_id", user],
			]);
		} catch (error) {
			// Error saving data
			alert(error);
		}
	};

	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem("key");
			const user = await AsyncStorage.getItem("user_id");
			if (value !== null) {
				await Axios.post(
					"https://api-finance-app-reactnative.herokuapp.com/api/retrieve",
					{
						id: user,
					}
				)
					.then(async (res) => {
						let Auth = res.data;
						if (Auth.status === true) {
							this.props.Login(
								Auth.user._id,
								Auth.user.username,
								Auth.user.contact,
								Auth.user.money,
								Auth.user.payment_his,
								Auth.user.friend
							);
							//ubah state dari dalam ajax akan error
							await this._storeData(Auth.token, Auth.user._id);
							this.setState({ login: true });
						}
					})
					.catch((e) => console.log(e));
			}
		} catch (error) {
			console.log("error ", error);
		}
	};

	_onPressButtonLogin = async () => {
		// change state btn
		this.setState({ isLoading: true });
		let isAuth = false;

		let user = await Axios.post(
			"https://api-finance-app-reactnative.herokuapp.com/api",
			{
				username: this.state.username,
				password: this.state.password,
			}
		)
			.then((res) => {
				let Auth = res.data;
				if (Auth.status === true) {
					this.props.Login(
						Auth.user._id,
						Auth.user.username,
						Auth.user.contact,
						Auth.user.money,
						Auth.user.payment_his,
						Auth.user.friend
					);
					isAuth = true; //definisikan ulang karna jika
					//ubah state dari dalam ajax akan error
					this._storeData(Auth.token, Auth.user._id);
				} else {
					alert("username atau password salah");
				}
			})
			.catch((err) => {
				alert("err " + err);
			});
		this.setState({ isLoading: false });

		if (isAuth === true) {
			this.setState({ login: true });
		}
	};

	_onPressButtonSignUp = () => {
		alert("features coming soon");
	};

	_onPressButtonForgot = () => {
		alert("features coming soon");
	};

	async componentDidMount() {
		await this._retrieveData(); //check apakah user memiliki token untuk authenticate
		this.setState({ isLoad: false });
		alert(
			"untuk demo silahkan gunakan akun\nusername : admin\npassword : admin"
		);
	}

	render() {
		if (this.state.login === true) {
			return <Redirect to="/home" />;
		}
		return (
			<KeyboardAvoidingView
				style={this.state.isLoad ? { display: "none" } : { flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				{/* header logi */}
				<View style={styles.view_logo}>
					<View style={styles.logo_container}>
						<Image source={Logo} style={styles.image} />
					</View>
				</View>
				<View style={{ flex: 1 }}>
					<View style={styles.container_email}>
						<Text style={styles.para_form}>Email adress</Text>
						<View style={styles.form_input_email}>
							<Image source={Email} style={styles.logo_form} />

							<TextInput
								onChangeText={(text) =>
									this.setState({ username: text })
								}
								autoCapitalize="none"
								value={this.state.email}
								style={styles.input}
								placeholder="masukan username anda"
							/>
						</View>
					</View>
					<View style={styles.container_password}>
						<Text style={styles.para_form}>Password</Text>
						<View style={styles.form_input_password}>
							<Image source={Password} style={styles.logo_form} />

							<TextInput
								onChangeText={(text) =>
									this.setState({ password: text })
								}
								value={this.state.password}
								secureTextEntry={true}
								style={styles.input}
								autoCompleteType="password"
								placeholder="masukan passowrd anda"
							/>
						</View>
					</View>

					<View style={styles.view_button}>
						<TouchableHighlight
							onPress={this._onPressButtonLogin}
							style={styles.Btn}
							underlayColor="#DDDDDD"
						>
							<Text style={styles.text_btn}>
								{this.state.isLoading ? (
									<ActivityIndicator
										size="small"
										color="#0000ff"
									/>
								) : (
									"Login"
								)}
							</Text>
						</TouchableHighlight>
					</View>

					<View style={styles.view_singup}>
						<TouchableHighlight
							underlayColor="#DDDDDD"
							onPress={this._onPressButtonSignUp}
							style={styles.singup}
						>
							<Text style={styles.text_btn_bottom}>Signup</Text>
						</TouchableHighlight>
						<TouchableHighlight
							underlayColor="#DDDDDD"
							onPress={this._onPressButtonForgot}
							style={styles.forgot_pass}
						>
							<Text style={styles.text_btn_bottom}>
								Forgot password ?
							</Text>
						</TouchableHighlight>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		Login: (id, user, contact, money, payment_his, friend) =>
			dispatch({
				type: "setAccount",
				id: id,
				user: user,
				contact: contact,
				money: money,
				payment_his: payment_his,
				friend: friend,
			}),
	};
};

export default connect(null, mapDispatchToProps)(login);
