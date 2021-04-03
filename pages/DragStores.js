import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';


const DragStores = props => {
    const ArrayData = [
        {
            id: '1',
            name: 'دواخانه شفا',
            address: 'سرک ولایت رو بروی شفاخانه حوزوی ',
            phoneNumber: '0799809098',
            Email: 'Shefa@gmail.com'
         

        },
        {
            id: '2',
            name: ' دواخانه شریف ',
            phoneNumber: '0799809098',
            address: 'سرک ولایت',
            Email: 'Sharif@gmail.com'

        },
        {
            id: '3',
            name: ' دواخانه مسلم ',
            phoneNumber: '0729877665',
            address: '',
            Email: 'Moslem@gmail.com'
        },
        {
            id: '4',
            name: ' دواخانه مهر',
            phoneNumber: '079999090',
            address: ' سرک باغ آزادی',
            Email: 'Mehrmelton@gmail.com'
        },
        {
            id: '5',
            name: ' دواخانه عزیزی ',
            phoneNumber: '0798990090',
            address: 'سرک سی متره کوچه باغمراد',
            Email: 'AziziMelton@gmail.com'
        },
    ]
    return (
        <FlatList
            data={ArrayData}
            ListHeaderComponent={
                <View style={styles.listheader}>
                    <Text>...</Text>
                    <Text>شماره تماس</Text>
                    <Text>نام دواخانه</Text>
                   
                    
                </View>
            }
           
            renderItem={({ item }) => 
                <TouchableOpacity style={styles.listrow} onPress={() => props.navigation.navigate('DragStoreDetail',{DragStore: item.name, phone: item.phoneNumber, Add: item.address, Em: item.Email})}>
                    <Text>...</Text>
                    <Text>{item.phoneNumber}</Text>
                    <Text>{item.name}</Text>
                    
                    
                </TouchableOpacity>
            }
        />
    )
}
export default DragStores;
const styles = StyleSheet.create({
    listrow:{
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        backgroundColor: '#fcb1f1',
       
        justifyContent: 'space-between',
        borderRadius: 10
        
    },
    listheader:{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        borderRightColor: 'white'
    }
    

})