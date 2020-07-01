import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    login: StyleSheet.create({
        btn: {
            borderColor: '#f5f6fa',
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
            textAlign: 'center'

        },
        label: {
            textAlign: 'center'
        },
        container: {
            alignItems: 'center'
        },
        contaierInput: {
            width: Dimensions.get('window').width / (10 / 9.5),
            marginTop: 20
        },
        input: {
            borderWidth: 1,
            borderColor: '#f5f6fa'
        },
        btnText: {
            color: '#f5f6fa',
            textAlign: 'center',
            fontWeight: 'bold'
        }

    }),
    signIn: StyleSheet.create({
        container: {
            flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#c23616'
        },
        logo: {
            fontSize: 20,
            color: '#f5f6fa',
            fontWeight: 'bold'
        },
        input: {
            width: Dimensions.get('window').width / (10 / 9.5), borderWidth: 1, borderColor: '#f5f6fa', marginTop: 30
        },
        btnContainer:{
            flexDirection:'row',justifyContent:'space-between',width:Dimensions.get('window').width/(10/9.5)
        },
        btnStyle:{
            borderWidth:1,borderColor:'#f5f6fa', padding:10, marginTop:10
        }
    })
}

export default styles