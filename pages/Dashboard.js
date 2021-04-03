import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Dashboard = props => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <TouchableOpacity style={[styles.fromTouchable, {backgroundColor:'#d7f52f'}]} onPress={() => props.navigation.navigate('Hospitals')}>
                    <Text>شفاخانه ها</Text>
                </TouchableOpacity>
            </View>

           
            <View style={styles.item}>
                <TouchableOpacity style={[styles.fromTouchable, {backgroundColor:'#fcb1f1'}]} onPress={() => props.navigation.navigate('DragStores')}>
                    <Text>دوا خانه ها</Text>
                </TouchableOpacity>

            </View>
            
           

            
        </View>
    );
}
export default Dashboard;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        height: 200,
        width: '50%',
        padding: 10
    },
    fromTouchable:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        flex: 1,
        borderRadius: 10,
        
    }
})