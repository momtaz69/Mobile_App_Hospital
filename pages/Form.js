import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("contacts.db");

export default function CreateContact({ navigation }) {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const addHospitals = (name, phone, address) => {
		db.transaction((tx) => {
			tx.executeSql(
				"insert into hospitals(name, phone, address) values(?, ?, ?);",
				[name, phone, address],
				() => navigation.navigate("Hospitals")
			);
		});
	};
	return (
		<View style={styles.formContainer}>
			<TextInput
				placeholder="Name"
				style={styles.input}
				value={name}
				onChangeText={(name) => setName(name)}
			/>

			<TextInput
				placeholder="Phone"
				keyboardType="numeric"
				style={styles.input}
				value={phone}
				onChangeText={(phone) => setPhone(phone)}
			/>
			<TextInput
				placeholder="Address"
				style={styles.input}
				value={address}
				onChangeText={(address) => setAddress(address)}
			/>
			<TouchableOpacity style={[styles.button, { backgroundColor: "blue" }]}>
				<Text
					style={styles.buttonTxt}
					onPress={() => addHospitals(name, phone, address)}>
					Save
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, { backgroundColor: "red" }]}>
				<Text style={styles.buttonTxt}>Cancel</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	formContainer: {
		borderRadius: 30,
		marginTop: 60,
		paddingVertical: 20,
		paddingHorizontal: 40,
		backgroundColor: "white",
	},
	input: {
		paddingBottom: 20,
		marginBottom: 10,
		borderBottomColor: "red",
		borderBottomWidth: 1,
	},
	button: {
		padding: 20,
		marginTop: 20,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonTxt: {
		color: "white ",
	},
});
