import StatusBar from "react-native";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	ImageBackground,
	TouchableOpacity,
	Button,
} from "react-native";

import React from "react";

function First() {
	return (
		<ImageBackground
			style={styles.background}
			resizeMode="cover"
			source={require("../assets/1.jpeg")}
			style={{ width: "100%", height: "100%" }}>
			<View style={styles.log}>
				<Image style={styles.logo} source={require("../assets/3.jpeg")} />
				<Text style={styles.tet}>Sell What You Don't Want</Text>
			</View>

			<TouchableOpacity
				style={styles.reg}
				onPress={() => {
					alert("You tapped the button!");
				}}
				title="Press Me">
				<View style={styles.but}>
					<View style={styles.login}></View>
					<View style={styles.register}></View>
				</View>
			</TouchableOpacity>

			<Button
				style={styles.register}
				onPress={() => {
					alert("You tapped the button!");
				}}
				title="Press Me"
			/>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	login: {
		width: "100%",
		height: 70,
		backgroundColor: "dodgerblue",
	},
	register: {
		width: "100%",
		height: 70,
		backgroundColor: "red",
	},
	logo: {
		width: 250,
		height: 250,
		borderRadius: 120,
	},
	log: {
		position: "absolute",
		top: 150,
		alignSelf: "center",
	},
	tet: {
		color: "#ffff",
		alignSelf: "center",
		fontSize: 20,
	},
	but: {
		flex: 1,
	},
	reg: {
		marginVertical:690
	},
});

export default First;
