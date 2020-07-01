import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const MyButton = props => {
    return(
        <TouchableOpacity onPress={props.press} style={props.btnStyle}>

            <Text style={props.labelStyle}>{props.label}</Text>

        </TouchableOpacity>

    )
}

const buttonStyles = StyleSheet.create({
    btn:{
        borderColor:'#2ecc71',
        borderWidth:1,
        padding:10,
        marginTop:10

    },
    label:{
        textAlign:'center'
    }
})

export {MyButton}