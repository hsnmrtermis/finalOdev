import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const MyButton = props => {
    return(
        <TouchableOpacity onPress={props.press} style={props.btnStyle}>

            <Text style={props.labelStyle}>{props.label}</Text>

        </TouchableOpacity>

    )
}



export {MyButton}