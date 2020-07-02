import React, { useState, useEffect } from 'react'
import {View , Text, SafeAreaView, Button, TextInput, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';
import {ListItem} from '../components/'

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
        //getPosts() bunu kullan
        //getir()
       

          //      database()
        //.ref(`/${kisiId}/`)
        //.once('value')
        //.then(snapshot => {
       //     console.log('Gelen: ', snapshot.val());
       // });

        //console.log("Gelen Mail Adresi :"+mailadresi)
        //console.log("\n Kullanıcı Adı :"+newUserName)

        getPostsRealTime()

    }, [])

    const getPostsRealTime = () => {
        database()
        .ref('/post/')
        .on('value', snapshot => {
         console.log(snapshot.val());
         let deneme = Object.values(snapshot.val())
         setPostList(deneme)
        })
    }
    

    const getPosts = () => {
        database()
        .ref('/post/')
        .once('value')
        .then(snapshot => {
            let deneme = Object.values(snapshot.val())
            setPostList(deneme)
            //console.log('User data: ', snapshot.val());

        });
    }

    const getir = () => {
        var veriler = database().ref("/post/")
        veriler.once('value').then(snapshot => {
            let deneme = Object.values(snapshot.val())
            setPostList(deneme)
            //console.log(deneme)
        
        })
    }

    //Burası yapılacak
  //  const renderPosts = (item) => {
    //    console.log(item.item.yazi)
    //    return(
    //        <ListItem itemMail={item.item.username}  itemData={item.item.yazi} />
    //    )
   // }
   const renderPosts = (item) => {
   
    return(
        <ListItem itemMail="asdasd"  itemData="asdasd" />
    )
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
                    .ref(`/post`)
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
            <View style={{alignSelf:'center'}}>

            
            <FlatList 
            data={postList}
            keyExtractor={(_,index) => index.toString()}
            renderItem={  renderPosts}
            
            
            />
            </View>
          
        </View>
        </SafeAreaView>

      
        
    )
    }
export {MainPage}