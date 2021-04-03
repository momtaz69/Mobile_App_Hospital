import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const HospitalDetail = ({ route }) => {
	const { name, phone, address } = route.params.item;
	const img =route.params.img;
	return (
		
		<View style={styles.container}>
			<View>
			<Image source={{uri: img}} style={{height: 200}} />
			</View>
			<View style={styles.info}>
				
				<Text style={styles.txt}>{name}</Text>
				<Text style={styles.txt}>{phone}</Text>
			</View>
			<View style={styles.address}>
				<Text>آدرس: {address}</Text>
			</View>
		</View>
	);
};
export default HospitalDetail;
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	info: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "pink",
		padding: 20,
	},
	txt: {
		color: "black",
		marginBottom: 10,
	},
	address: {
		flex: 1,
		padding: 10,
		alignItems: "flex-end",
	},
});

