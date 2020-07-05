import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, SignIn, MainPage, SavedPost, SplashScreen } from './src/pages'
import Provider from './src/context/Provider'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="SignInPage"
                        component={SignIn}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="MainPage"
                        component={MainPage}
                        options={{
                            headerShown: false
                        }}
                    />
                      <Stack.Screen
                        name="SavedPage"
                        component={SavedPost}
                        options={{
                            title: "Kayıtlılar"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const Router = () => {
    return (
        <Provider>

            <NavigationContainer>
                <Tab.Navigator >

                    <Tab.Screen
                        name="MainPage"
                        component={MainPage}
                        options={{
                            title: "Postlar"
                        }}
                    />

                    <Tab.Screen
                        name="SavedPage"
                        component={SavedPost}
                        options={{
                            title: "Kayıtlılar"
                        }}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Router;