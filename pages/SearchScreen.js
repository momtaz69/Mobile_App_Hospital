import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from "react-native";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("contacts.db");

export default function SearchScreen({ navigation }) {
	const [allHospitals, setallHospitals] = useState([]);
	const [filteredHospitals, setfilteredHospitals] = useState([]);

	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql("select * from hospitals", [], (tx, { rows }) => {
				var data = [];
				for (var i = 0; i < rows.length; i++) {
					data.push(rows[i]);
				}
				setallHospitals(data);
			});
		});
	});

	const searchHospitals = (text) => {
		const filterText = text.toLowerCase();
		const newHospitals = allHospitals.filter((contact) => {
			const item = contact.name.toLowerCase();
			return item.indexOf(filterText) > -1;
		});
		setfilteredHospitals(newHospitals);
		if (text.length < 1) {
			setfilteredHospitals([]);
		}
	};
	return (
		<View>
			<View style={styles.SearchContainer}>
				<TextInput
					placeholder="search..."
					style={styles.searchInput}
					onChangeText={(text) => {
						searchHospitals(text);
					}}></TextInput>
			</View>
			{filteredHospitals.length > 0 ? (
				<FlatList
					data={filteredHospitals}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={styles.hospital}
								onPress={() =>
									navigation.navigate("HospitalDetail", { item: item })
								}>
								<Text>{item.name}</Text>
								<Text>{item.phone}</Text>
								<Text style={styles.address}>{item.address}</Text>
							</TouchableOpacity>
						);
					}}
				/>
			) : (
				<View>
					<Text>Nothing to display</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	SearchContainer: {
		backgroundColor: "pink",
	},
	searchInput: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		margin: 20,
		borderRadius: 10,
		backgroundColor: "white",
	},

	hospital: {
		backgroundColor: "#efe",
		borderBottomWidth: 0.5,
		borderBottomColor: "gray",
		textAlign: "right",
		padding: 20,
	},
	address: {
		color: "gray",
		fontSize: 10,
	},
});

