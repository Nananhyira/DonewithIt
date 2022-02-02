import react from "react";
import StatusBar, { Alert } from "react-native";

import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

function Second() {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					alert(console.log("You tapped the button!"));
				}}>
				<View style={styles.close}></View>
				<View style={styles.delete}></View>
				<Button
					onPress={() => {
						alert(console.log("You tapped the button!"));
					}}
					title="Press Me"
				/>
			</TouchableOpacity>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require("../assets/2.jpeg")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "yellow",
	},
	close: {
		backgroundColor: "red",
		width: 80,
		height: 70,
		position: "absolute",
		top: 50,
		left: 30,
	},
	delete: {
		backgroundColor: "blue",
		width: 80,
		height: 70,
		position: "absolute",
		top: 50,
		right: 30,
	},

	image: {
		width: "100%",
		height: "100%",
	},
});

export default Second;
