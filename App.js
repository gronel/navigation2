import React from "react";
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';
import AuthLoadingScreen from "./src/screen/AuthLoadingScreen";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import SignInScreen from "./src/screen/SignInScreen";
import SignUpScreen from "./src/screen/SignUpScreen";
import HomeScreen from "./src/screen/HomeScreen";
import SettingsScreen from "./src/screen/SettingsScreen"
const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen:{
    screen:HomeScreen
  },
  Settings:{
    screen:SettingsScreen
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions:({navigation}) => ({
      title: 'Your App',
      headerLeft:(
        <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
        <View style={{paddingHorizontal:10}}>
           <Icon name="md-menu" size={24}/>
        </View>
        </TouchableOpacity>
       
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
