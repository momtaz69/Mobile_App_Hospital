import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const DragStoreDetail = props => {
    return (
        <View style={styles.container}>
             <Text>نام:{props.route.params.DragStore}</Text>
            <Text>شماره تماس:{props.route.params.phone} </Text>
            <Text>آدرس: {props.route.params.Add}</Text>
            <Text> ایمیل: {props.route.params.Em}  </Text>
        </View>
    );
}
export default DragStoreDetail;
const styles = StyleSheet.create({
    container:{
        margin:5,
        padding: 5,
        alignContent:'center',
        backgroundColor:'#fcb1f1'
        
    }
})