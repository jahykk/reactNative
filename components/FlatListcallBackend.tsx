import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface User{
    id:number;
    name:string;
    email:string;
}

const FlatListcallBackend = () => {
    //กำหนด State สำหรบเก็บข้อมูลผู้ใช้และสถานะการโหลด
   const[data,setData] = useState<User[]>([]);
   const[loading,setLoading]=useState(true);

//กำหนด useEffect สำหรบเก็บข้อมูลผู้ใช้และสถานะการโหลด
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse=>reponse.json())
    .then(data => {
        setData(data);
        setLoading(false);
    })
    .catch(error=>{
        console.error(error);
        setLoading(false);
    });

},[]);

//ฟังก์ชั่น_renderItemสำหรับใช้ในFlastList
const _renderItem = ({ item }: { item: User }) => (
    <view style={styles.item}>
      <text style={styles.name}>{item.name}</text>
      <text style={styles.email}>{item.email}</text>
    </view>
  );

  return (
    <View style={styles.container}>
     {loading?( //ถ้ายังโหลดข้อมูลอยู่ให้แสดงActivityIndicator
        <ActivityIndicator size="large" color="red"/>

     ):(//ถ้าถูกโหลดมาแล้วให้แสดง FlastList
        <FlatList
           data={data}
           renderItem={_renderItem}
          keyExtractor = {item => item.id.toString()}
        
        />
     )

     }
    </View>
  )
};

export default FlatListcallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
