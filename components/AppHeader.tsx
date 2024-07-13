import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    title:string;
    year? :number;//?ส่งค่าแบบแสดงหรือไม่แสดงก็ได้
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


const AppHeader = ({title,year}:AppHeaderProps) : React.JSX.Element=> {
  return (
    <View>
      <Text>
        {title} 
        {year && year + 543}</Text>
    </View>
  )
}

export default AppHeader