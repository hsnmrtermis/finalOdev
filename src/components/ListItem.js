import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const ListItem = props => {
    return(
        <View style={styles.container}>
            <View style={styles.containerRow}>
            <Text style={styles.itemUsername}>{props.itemMail}</Text>
            <Text style={{borderWidth:1,borderColor:'green',padding:4,borderRadius:4,backgroundColor:'green',color:'white'}}>Kaydet</Text>
            </View>
            
            <Text style={styles.itemUserText}>{props.itemData}</Text>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width / (10/9.5),
        backgroundColor:'#ececec',
        flexDirection:'column',
        marginBottom:10,
        marginTop:10,
        padding:10,
    },
    itemUsername:{
    
        fontWeight:'bold'
    },
    itemUserText:{
        color:'#34495e'
    },
    containerRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:Dimensions.get('window').width / (10/9)
    },
    
})

export {ListItem}