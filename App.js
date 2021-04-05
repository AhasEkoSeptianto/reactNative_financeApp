import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// router
import Router from "./router.android.js";

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/redux.android.js";

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
