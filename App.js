import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AddAction from "./Components/AddAction";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';
import { StateProvider, initialState, reducer } from "./ContextApi/State";
import { useEffect, useState,useCallback } from 'react';
const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady,setAppIsReady] = useState(false);
  const [resetPressed,setResetPressed]=useState();
  const onLayoutRootView = useCallback(async () => {
    if(appIsReady){
    // hide the splash screen.
    await SplashScreen.hideAsync();
    }
  },[appIsReady]);

  useEffect(()=>{
    async function show_splash_screen(){
      try{
          // our api calls will be here.
          new Promise(resolve => setTimeout(resolve,3000)); 
      }catch(e){
          console.warn(e);
      }finally{
          setAppIsReady(true); 
      }
      }
    show_splash_screen()
  })
  

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <NavigationContainer>
      <View  onLayout={onLayoutRootView}></View>
      <Header />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ActionScreen" component={AddAction}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </StateProvider>
  );
}


