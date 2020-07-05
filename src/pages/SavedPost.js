import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import Context from '../context/store'
import Provider from '../context/Provider'


const SavedPost = props => {
  //  const { state, dispatch } = useContext(Context)

    return(
        <Provider>
        <View>
            <Text>Deneme</Text>
            <Text>{state.SavedPost}</Text>
        </View>
        </Provider>
    )
}


export {SavedPost}