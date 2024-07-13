import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';

export default function App():React.JSX.Element {

  const onClickMe = ()=>{
    Alert.alert('Hi',"Hello React.JS");

  }

  const users =[
    {id:'2113110411',name:'เยาวเรศ แก่นมาลี'},
    
  ]
  return (
    <View style={styles.container}>
      <AppHeader title="Input your fullname" />
      
      
      { users.map((data,index)=>{
        return(
          <Text key={data.id}>
           ID: {data.id} Name: {data.name} 
          </Text>

        )

      })}


      <Button title="Click Me" 
      onPress={onClickMe}
      color="pink"
      /* // onPress={()=>{
      Alert.alert('Hi','React Native is FUn!!')}
      } *//>
      <StatusBar style="auto" />
      <AppFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#f9bdbb',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
     fontSize: 20,
     fontWeight: 'bold',
     color: '#8e24aa',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8bbd0',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
