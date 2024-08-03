import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { stylesPractice } from './styles';

 type AppHeaderProp = {
  title:string;
  year? :number;
 }

 interface AppHeaderProps{
  message: string;
  fullname : string;
  
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#b3e5fc',
    },
    subtitleText:{
        fontSize: 16,
        color: '#212121',
    },
});


const AppHeader = ({message,fullname}:AppHeaderProps) : React.JSX.Element=> {
  
  return (
    <View>
      <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>{message}</Text>
      <Text style={stylesPractice.subtitleText}>{fullname}</Text>
    </View>
    </View>
  )
}

export default AppHeader