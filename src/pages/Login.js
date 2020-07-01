import React from 'react'
import {View, Text, SafeAreaView, TextInput, Dimensions} from 'react-native'
import {MyButton} from '../components/'
import styles from './styles'




const Login = props => {


    const yazdir = () => {
        props.navigation.navigate('SignInPage')
     }


    return(
        <SafeAreaView style={{flex:1 , alignItems:'center',backgroundColor:'#9c88ff'}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontStyle:'italic',fontWeight:'bold',fontSize:20}}>Login</Text>
                </View>
                <View style={styles.login.contaierInput}>
                    <TextInput placeholderTextColor="#f5f6fa" placeholder="Kullanıcı Adı" style={styles.login.input}/>
                </View>
                <View style={styles.login.contaierInput}>
                <TextInput placeholderTextColor="#f5f6fa" placeholder="Şifreniz" style={styles.login.input}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{width:Dimensions.get('window').width/2.5}}>
                    <MyButton press={yazdir} btnStyle={styles.login.btn} labelStyle={styles.login.btnText} label="Kayıt Ol" />
                </View>
                <View style={{width:Dimensions.get('window').width/2.5 }}>
                    <MyButton btnStyle={styles.login.btn} labelStyle={styles.login.btnText} label="Giriş Yap" />
                </View>
                </View>
                
                <View></View>
            </View>
        </SafeAreaView>
        
    )
}

export {Login}