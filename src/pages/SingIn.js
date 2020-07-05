import React, { useState } from 'react'
import {View , Text, SafeAreaView, TextInput, Dimensions, Alert} from 'react-native'
import {MyButton} from '../components/MyButton'
import styles from './styles'
import auth from '@react-native-firebase/auth';

const SignIn = props => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const backLogin = () => {
        props.navigation.navigate('LoginPage')
    }

    const controlSign = () => {

        if(password == "" || rePassword == "" || username == ""){
            Alert.alert("Kısımlar boş girilemez.")
        }
        else if(password != rePassword){
            Alert.alert("Şifreler uyuşmuyor.")
        }
        else{
            auth().createUserWithEmailAndPassword(username,password)
            .then(response=>{
                Alert.alert("Kayıt İşlemi Başarılı.")
                console.log(response)
                props.navigation.goBack() 
            })
            .catch(error => {
                console.log(error) 
            })
        }
    }
 
     const getUserName = (text) => {
         setUserName(text)
         console.log(username)
     }

     const getPassword = (text) => {
         setPassword(text)
         console.log(password)
     }

     const getRePassword = (text) => {
         setRePassword(text)
         console.log(rePassword)
     }


    return(
        <SafeAreaView style={styles.signIn.container}>
        <View>
            <Text style={styles.signIn.logo}>Kayıt Ol</Text>
        </View>
        <View>
            <TextInput 
            placeholder="Mail Adresiniz"
            placeholderTextColor="#f5f6fa"
            style={styles.signIn.input}
            
            onChangeText={getUserName}
            />
        </View>
        <View>
            <TextInput 
            placeholder="Şifreniz"
            placeholderTextColor="#f5f6fa"
            style={styles.signIn.input}
            onChangeText={getPassword}
            
            />
        </View>
        <View>
        <TextInput 
            placeholder="Şifreniz (Tekrar)"
            placeholderTextColor="#f5f6fa"
            style={styles.signIn.input}
            onChangeText={getRePassword}
            
            />
        </View>
        <View style={styles.signIn.btnContainer}>
            <View>
                <MyButton
                btnStyle={styles.signIn.btnStyle}
                labelStyle={{color:'#f5f6fa'}}
                label="Kayıt Ol"
                press={controlSign}
                />
                
            </View>
            <View>
            <MyButton
                btnStyle={styles.signIn.btnStyle}
                labelStyle={{color:'#f5f6fa'}}
                label="Giriş Yap Sayfasına Git"
                press={backLogin}
                />
            </View>
        </View>
    </SafeAreaView>
    )
}

export {SignIn}