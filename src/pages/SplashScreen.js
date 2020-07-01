import React, { useEffect } from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {

    useEffect(() => {
        AsyncStorage.getItem("@USER_ID")
        .then(res => {
            if(res == null){
                props.navigation.navigate("LoginPage")
            }else{
                props.navigation.navigate("MainPage")
            }
        })

    }, [])


    return(
        <SafeAreaView>
            <View>
                <Text>Splash Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export  {SplashScreen}