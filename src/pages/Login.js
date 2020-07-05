import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Dimensions, Alert } from 'react-native'
import { MyButton } from '../components/'
import styles from './styles'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';



const Login = props => {

    const [usermail, setUserMail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    //Inputtan gelen veri usermail state'ine aktarılıyor.
    const getUserMail = (text) => setUserMail(text)
    //Inputtan gelen veri userPassword state'ine aktarılıyor. 
    const getUserPassword = (text) => setUserPassword(text)


    const goSignIn = () => {
        props.navigation.navigate('SignInPage')
    }
    const cleaner = () => {
        setUserMail("")
        setUserPassword("")
    }

    const controlLogin = () => {
        if(usermail == "" || userPassword == ""){
            Alert.alert("Kullanıcı maili veya şifre boş bırakılamaz.")
        }else{
            auth().signInWithEmailAndPassword(usermail,userPassword)
        .then(response => {
            props.navigation.navigate("MainPage")
            AsyncStorage.setItem('@USER_ID', auth().currentUser.uid)
            cleaner()
        })
        .catch(error => {
            console.log(error)
            Alert.alert("Giriş Yapılamadı.")
        })
        }

        
    }


    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#393e46' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color:'white' }}>Oturum Aç</Text>
                </View>
                <View style={styles.login.contaierInput}>
                    <TextInput 
                    placeholderTextColor="#f5f6fa"
                     placeholder="Kullanıcı Adı"
                      style={styles.login.input}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={getUserMail}
                      value={usermail}
                      
                      />
                </View>
                <View style={styles.login.contaierInput}>
                    <TextInput 
                    placeholderTextColor="#f5f6fa"
                     placeholder="Şifreniz"
                      style={styles.login.input}
                      secureTextEntry
                      onChangeText={getUserPassword}
                      value={userPassword}
                      />
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{ width: Dimensions.get('window').width / 2.5 }}>
                        <MyButton press={goSignIn} btnStyle={styles.login.btn} labelStyle={styles.login.btnText} label="Giriş Yap" />
                    </View>
                    <Text style={{color:'white', marginTop:50}}>Hesabınız yok mu?</Text>
                    <View style={{ width: Dimensions.get('window').width / 2.5 }}>
                        <MyButton press={controlLogin} btnStyle={styles.login.btn} labelStyle={styles.login.btnText} label="Kayıt Olun" />
                    </View>
                </View>

                <View></View>
            </View>
        </SafeAreaView>

    )
}

export { Login }