import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import { useNavigation } from "@react-navigation/native";
const db = SQLite.openDatabase("contacts.db");

const Hospitals = (props) => {
	const navigation = useNavigation();
	const [hospitals, setHospitals] = useState([]);

	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql("select * from hospitals", [], (tx, { rows }) => {
				var data = [];
				for (var i = 0; i < rows.length; i++) {
					data.push(rows[i]);
				}
				setHospitals(data);
			});
		});
	});

	// const onDeleteHospitals = (id) => {
    //     db.transaction(tx => {
    //         tx.executeSql('delete from hospital where id = ?', [id])
    //     })
    // }
	const images = [
        require("../assets/qalib.jpg"),
        require("../assets/kimia.jpg"),
        require("../assets/kisha.jpg"),
        require("../assets/apolo.jpg"),
        require("../assets/mehraban.jpg"),
		require("../assets/qalib.jpg"),
        require("../assets/kimia.jpg"),
        require("../assets/kisha.jpg"),
        require("../assets/apolo.jpg"),
        require("../assets/mehraban.jpg"),
        
    ]

	return (
		<View>
			{hospitals.length > 0 ? (
				<FlatList
					data={hospitals}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={styles.hospital}
								onPress={() =>
								navigation.navigate("HospitalDetail", {img:images[item.id] ,item: item  })
								}>
								<Text>{item.name}</Text>
								<Text>{item.phone}</Text>
								<Text style={styles.address}>{item.address}</Text>

								 {/* <View> 
                					 <MaterialCommunityIcons name="trash-can" color="red" size={24} onPress={onDeletHospitals} /> 
            					 </View> */}
							</TouchableOpacity>
						);
					}}
				/>
			) : (
				<View>
					<Text>no hospitals to display</Text>
				</View>
			)}
			<TouchableOpacity
				style={styles.floatButton}
				onPress={() => navigation.navigate("Form")}>
				<Text>
					<Feather name="plus" size={28} color="white" />
				</Text>
			</TouchableOpacity>
		</View>
	);
};
export default Hospitals;
const styles = StyleSheet.create({
	// listrow:{
	//     flexDirection: 'row',
	//     padding: 10,
	//     margin: 5,
	//     backgroundColor: '#d7f52f',
	//     justifyContent: 'space-between',
	//     borderRadius: 10

	// },
	listheader: {
		flexDirection: "row",
		padding: 10,
		color: "white",
		justifyContent: "space-between",
		borderRightColor: "white",
	},
	floatButton: {
		backgroundColor: "#DAF7A6",
		padding: 20,
		borderRadius: "50%",
		position: "absolute",
		bottom: 0,
		right: 40,
	},

	hospital: {
		backgroundColor: '#d7f52f',
		borderBottomWidth: 0.5,
		borderBottomColor: "gray",
		textAlign: "right",
		padding: 20,
		borderRadius: 20
	},
	address: {
		color: "gray",
		fontSize: 10,
	},
});

