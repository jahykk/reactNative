import { StyleSheet, Text, View,Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from "axios";
import { TextInput } from 'react-native';

const AxiosPostData = () => {
      
     const [formData,setFormData] = useState({name:'',email:''});
     
     const handleInputChange = (key:string,value:string)=>{
        const handleInputChange = (key:string,value:string) => {
            setFormData(prevState=>({...prevState,[key]:value})); //...prevState เข้าถึง acttribute เข้าหมดก่อนหน้า
        };
     const handleSubmit = async ()=>{
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/users',FormData);
            Alert.alert('User Created',`
                ID: ${response.data.id}
                Name: ${response.data.name}
                Email: ${response.data.email}
                `);
        }catch{

        }
     }


     return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={formData.name}
                onChangeText={value => handleInputChange('name', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)}
            />
            <Button title="Create User" onPress={handleSubmit} />
        </View>
    );
  
};
export default AxiosPostData

const styles = StyleSheet.create({
    container: { 
     justifyContent: 'center',

    padding: 20,

    marginTop:50

},

input: {

    height: 40,

    borderColor: 'gray',

    borderWidth: 1,

    marginBottom: 12,

    paddingHorizontal: 10,
  },
});
}