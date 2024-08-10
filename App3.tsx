import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import { stylesPractice } from './components/styles';

export default function App():React.JSX.Element {

  const [fullname,setFullName] = useState('');
  const [message,setMessage] = useState('Message from App.tsx');
  const [footerMessage,setFooterMessage] = useState('Thai-Nichi Institute of Technology');
  useEffect(()=>{
    console.log("Componet has mounted");
  },[]);
  useEffect(()=>{
    console.log( `Fullname has changed to : ${fullname} `);
  },[fullname]);//This will run whenever 'fullname' changes

  const handleButtonClick = () =>{
   
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  } 
 
  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      <Content message={message} onButtonClick={handleButtonClick} />
      
      <TextInput
      style = {stylesPractice.input}
      placeholder="Enter your fullname"
      value={fullname}
      onChangeText={setFullName}
      />
   <AppFooter footerMessage={footerMessage}/>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center"
  },
 
});
