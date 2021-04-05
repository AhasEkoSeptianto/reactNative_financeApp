import React from "react";

import { View, Text, Image } from "react-native";

// librearu react-route
import { NativeRouter, Route, Link } from "react-router-native";

// pages
import Login from "./views/auth/login.android.js";
import Home from "./views/layout/home.android.js";
import History from "./views/layout/history.android.js";
import Payment from "./views/layout/payments.android.js";
import Profile from "./views/layout/profile.android.js";
import Settings from "./views/layout/profile_/settings.android.js";

import ImageView from "./image.android.js";

class router extends React.Component {
	render() {
		return (
			<NativeRouter>
				<Route path="/home" component={Home} />
				<Route path="/history" component={History} />
				<Route path="/payment" component={Payment} />
				<Route path="/profile_/settings" component={Settings} />
				<Route path="/profile" component={Profile} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={Login} />
			</NativeRouter>
		);
	}
}

export default router;
