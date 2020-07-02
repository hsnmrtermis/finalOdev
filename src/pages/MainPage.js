import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, TextInput, FlatList, Dimensions, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem, MyButton } from '../components/'
import styles from './styles';

const MainPage = props => {
    let kisiId = auth().currentUser.uid
    const [mail, setMail] = useState("")
    const [userName, setUserName] = useState("Henüz Çevirilmedi , butona tıkla")
    const [postList, setPostList] = useState([])
    const [yazi, setYazi] = useState("")

    useEffect(() => {

        let mailadresi = auth().currentUser._user.email
        setMail(mailadresi)
        var indis = mailadresi.lastIndexOf("@")
        var newUserName = mailadresi.slice(0, indis)
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
        //console.log(item.item.yazi) Yazıları getiriyor.
        return (
            <ListItem itemMail={item.item.username} itemData={item.item.yazi} />
        )
    }



    const pushData = () => {
        //var indis = mail.lastIndexOf("@")
        //var newUserName = mail.slice(0,indis)
        //setUserName(newUserName)

        var data = {
            username: userName,
            yazi: yazi

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


    return (
        <SafeAreaView>
            <View style={styles.mainPage.containerColumn}>
                <View style={styles.mainPage.containerHeader}>
                    <View style={styles.mainPage.headerUserName}>
                        <Text style={{ fontWeight: 'bold' }}>Kullanıcı Adı :{userName}</Text>
                    </View>
                    <View style={styles.mainPage.headerLogOut}>
                    <Button
                            title="Çıkış Yap"
                            onPress={LogOut}

                        />
                    </View>
                </View>
                <View style={styles.mainPage.containerList}>
                <FlatList
                        data={postList}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={renderPosts}


                    />
                </View>
                <View style={styles.mainPage.containerFooter}>
               
                    <View style={styles.mainPage.footerInputBtn}>
                        <View style={styles.mainPage.footerInput}>
                        <TextInput
                        onChangeText={changePost}
                        placeholder="Post Giriniz"
                        style={{borderWidth:1,borderBottomColor:'black'}}

                    />
                        </View>
                        <View style={styles.mainPage.footerAddBtn}>
                       
                    <MyButton 
                    press={pushData}
                    label="Ekle"
                    btnStyle={styles.mainPage.addBtn}
                    labelStyle={styles.mainPage.addBtnTxt}
                    
                    
                    />
                        </View>

                    </View>
                   
                    <View style={styles.mainPage.footerNavigation}>
                        <View style={styles.mainPage.footerBtnNavigation}>
                        <MyButton 
                    press={pushData}
                    label="Posts Page"
                    btnStyle={styles.mainPage.footerNavigationBtnActive}
                    labelStyle={styles.mainPage.addBtnTxt}
                    
                    
                    />
                        </View>
                        <View style={styles.mainPage.footerBtnNavigation}>
                        <MyButton 
                    press={pushData}
                    label="Saved Post Page"
                    btnStyle={styles.mainPage.footerNavigationBtnActive}
                    labelStyle={styles.mainPage.addBtnTxt}
                    
                    
                    />
                   
                        </View>
                       
                    </View>
                </View>
                
                
                  
                    

                        

                <View>
                   
                   


                </View>
            </View>
        </SafeAreaView>


    )
}
export { MainPage }