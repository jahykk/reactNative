// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import { View, Text, ActivityIndicator } from "react-native";
import React,{useState} from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./components/ProductScreen";
import LoginScreen from "./screens/LoginScreen";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/CreatePostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from './redux-toolkit/store';
import { useAppSelector,useAppDispatch } from './redux-toolkit/hoos';
import {selectAuthState,setIsLogin,setIsLoading } from './auth/auth-silec';
import { getProfile } from "./services/auth-servise";
import Toast from "react-native-toast-message";




import DetailScreen from "./screens/DetailScreen";

const HomeStack = createNativeStackNavigator();
const ProductStack = createDrawerNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle:{backgroundColor:'#20b2aa'},
        // headerTintColor:'white',
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        //  options={{title:"หน้าหลัก"}}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      {/* <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/> */}
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Product" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}


  


const App = (): React.JSX.Element => {
  const {isLogin,isLoading} = useAppSelector(selectAuthState);

  if(isLoading){
    return(
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <ActivityIndicator size='large' color='blue'/>
    </View>
     )
     }
    
  return (
    <></>
  )
  
  };
     
  






const AppWrapper = () =>{
  return(
    <Provider store={store}>
      <SafeAreaProvider>
         <NavigationContainer>
            <App/>
         </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default AppWrapper;
