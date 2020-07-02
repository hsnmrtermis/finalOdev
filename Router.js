import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Login, SignIn, MainPage, SavedPost, SplashScreen, SavedPage} from './src/pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="LoginPage"
                component={Login}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="SignInPage"
                component={SignIn}
                options={{
                    headerShown:false
                }}
            />
             <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={{
                    headerShown:false
                }}
            />
             <Stack.Screen
                name="SavedPage"
                component={SavedPage}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

const Main = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator >

                <Tab.Screen
                    name="MainPage"
                    component={MainPage}
                    options={{
                        title: "Postlar MainPage"
                    }}
                />

                <Tab.Screen
                    name="SavedPage"
                    component={SavedPost}
                    options={{
                        title: "SavedPage"
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Router;