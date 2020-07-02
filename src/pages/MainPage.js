import React, { useState, useEffect } from 'react'
import {View , Text, SafeAreaView, Button, TextInput, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';

const MainPage = props => {
    let kisiId =  auth().currentUser.uid
    const [mail , setMail] = useState("")
    const [userName, setUserName] = useState("Henüz Çevirilmedi , butona tıkla")
    const [postList, setPostList] = useState([])
    const [yazi, setYazi] = useState("")
    
    useEffect(() => {
        
        let mailadresi =   auth().currentUser._user.email
        setMail(mailadresi)
        var indis = mailadresi.lastIndexOf("@")
        var newUserName = mailadresi.slice(0,indis)
        setUserName(newUserName)
        getPosts()
       

                database()
        .ref(`/${kisiId}/`)
        .once('value')
        .then(snapshot => {
            console.log('Gelen: ', snapshot.val());
        });

    }, [])
    

    const getPosts = () => {
        database()
        .ref()
        .once('value')
        .then(snapshot => {
            console.log('User data: ', snapshot.val());

        });
    }

    const pushData = () => {
        //var indis = mail.lastIndexOf("@")
        //var newUserName = mail.slice(0,indis)
        //setUserName(newUserName)

        var data = {
            username : userName,
            yazi : yazi

        }

                    database()
                    .ref(`${kisiId}`)
                    .push(data);
    }

    const changePost = (text) => setYazi(text)
    

    const LogOut = () => {
        AsyncStorage.removeItem("@USER_ID")
        auth().signOut()
        props.navigation.navigate("LoginPage")
    }
   

 

    return(
        <SafeAreaView>
            <View>
            <Text>Mail Adresi :{mail}</Text>
            <Text style={{fontWeight:'bold'}}>Kullanıcı Adı :{userName}</Text>
            
            <View style={{marginTop:15}}></View>
            
            <View style={{marginTop:15}}>
                <Button 
            title="Çıkış Yap"
            onPress={LogOut}
            
            />
            </View>
            <FlatList
            keyExtractor={(_,index)=>index.toString()}
            data={postList}
    renderItem={({item}) => <Text>deneme</Text>}
            
            
            />
           
            </View>
            <View>
            <TextInput
            onChangeText={changePost}
            placeholder="Post Giriniz"
            
            />
            <Button 
            title="Ekle"
            onPress={pushData}
            
            />
        </View>
        </SafeAreaView>

      
        
    )
}

export {MainPage}