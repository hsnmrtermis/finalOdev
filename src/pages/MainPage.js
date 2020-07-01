import React, { useState, useEffect } from 'react'
import {View , Text, SafeAreaView, Button, TextInput} from 'react-native'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
const MainPage = props => {

    const [mail , setMail] = useState("")
    const [userName, setUserName] = useState("Henüz Çevirilmedi , butona tıkla")
    useEffect(() => {
        
      let mailadresi =   auth().currentUser._user.email
        setMail(mailadresi)

    }, [])
    
    

    const LogOut = () => {
        AsyncStorage.removeItem("@USER_ID")
        auth().signOut()
        props.navigation.navigate("LoginPage")
    }

    const ConvertUserName = () => {
        var indis = mail.lastIndexOf("@")
        var newUserName = mail.slice(0,indis)
        setUserName(newUserName)
    }

    return(
        <SafeAreaView>
            <View>
            <Text>Mail Adresi :{mail}</Text>
            <Text style={{fontWeight:'bold'}}>Kullanıcı Adı :{userName}</Text>
            
            <View style={{marginTop:15}}></View>
             <Button 
            title="Kullanıcı Adına Çevir"
            onPress={ConvertUserName}
            
            />
            <View style={{marginTop:15}}>
                <Button 
            title="Çıkış Yap"
            onPress={LogOut}
            
            />
            </View>
            
           
            </View>
        </SafeAreaView>
        
    )
}

export {MainPage}