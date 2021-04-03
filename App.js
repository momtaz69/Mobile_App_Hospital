import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import DragStores from "./pages/DragStores";
import HospitalDetail from "./pages/HospitalDetail";
import SearchScreen from "./pages/SearchScreen";
import { MaterialIcons } from "@expo/vector-icons";
// import DragStoreDetail from './pages/DragStoreDetail'
import Form from "./pages/Form";
import * as SQLite from "expo-sqlite";
const Stack = createStackNavigator();
const db = SQLite.openDatabase("contacts.db");
export default function App() {
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"create table hospitals(id integer primary key autoincrement, name text, phone text, address text);",
				[],
				() => console.log("table created successfully")
			);
		});
	});
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Dashboard"
					component={Dashboard}
					options={({ navigation }) => ({
						headerTitle:'داشبورد',
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate("SearchScreen")}
								style={{ paddingRight: 20 }}>
								<Text style={styles.searchIcon}>
										<MaterialIcons name="search" size={30} color="black" />
								</Text>
							</TouchableOpacity>
						),
					})}
				/>
				<Stack.Screen
					name="SearchScreen"
					component={SearchScreen}
					options={{ headerTitle: "جستجو" }}
				/>
				<Stack.Screen
					name="Form"
					component={Form}
					options={{ headerTitle: "اضافه کردن" }}
				/>
				<Stack.Screen
					name="Hospitals"
					component={Hospitals}
					options={{ headerTitle: "شفاخانه ها" }}
				/>
				<Stack.Screen
					name="DragStores"
					component={DragStores}
					options={{ headerTitle: "دواخانه ها" }}
				/>
				<Stack.Screen
					name="HospitalDetail"
					component={HospitalDetail}
					options={{ headerTitle: "جزییًات شفاخانه ها" }}
				/>
				{/* <Stack.Screen name="DragStoreDetail" component={DragStoreDetail} options={{headerTitle: 'جزییًات دواخانه ها'}}/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	searchIcon:{
		marginLeft:20
	}
});

