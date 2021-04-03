import React from 'react';
import { StyleSheet, Text, View,TextInput,Switch } from 'react-native';


const profile = props => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput placeholder="نام"  style={styles.input}/>
                <TextInput placeholder="سن" style={styles.input}/>
                <Switch />
                 <Text>سرپرست</Text>
           </View>
        
        </View>
        
        
    );
}
export default profile;
const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    form:{
        width: 80,
        backgroundColor: 'green',
        borderRadius: 10,
        margin: '10',
        padding: 10,
        justifyContent: 'center'  ,
        alignItems: 'strech' 
 }, 
 input:{
     textAlign: 'center',
     margin: 10,
     padding: 10,
     borderBottomColor: 'gray',
     borderBottomWidth :1

 }
    
})