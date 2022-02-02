import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Dimensions,
} from "react-native";
import First from "./Components/First";
import Second from "./Components/Second";

export default function App() {
	return (
		<View>
			<First />
			{/* <Second /> */}
		</View>
	);
}
