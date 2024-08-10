import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles, { stylesProfile } from "./styles";
import Login from "./Login";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profile.jpg");
  const [name, setName] = useState("Yaowaret Kaenmalee");
  const [image, setImage] = useState(profileImage);
const  proimg = require("../assets/New.png");
  const handleChangeName = () => {
    setName(name == "Yaowaret Kaenmalee"? "Jah" : "Yaowaret Kaenmalee"); // กดปุ่มแล้วชื่อเปลี่ยนจากชื่อใหม่กลับไปเป็นชื่อเดิม
  };
  const handleChangImage = () => {
    setImage(image == profileImage ? proimg :  profileImage );
  };
 
  return (
    <View style={stylesProfile.container}>
      <View style={stylesProfile.profileContainer}>
         <Image source={image} style={styles.profileImage} /> 
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="Change Image" onPress={handleChangImage} />
        </View>
        <Login />
      </View>
    </View>
  );
};

export default ProfileScreen;
/*
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#f5f5f5", //ตั้งค่าสีพื้นหลัง
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "pink",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    fontSize: 20,
    color: "#fff0f5",
    fontWeight:"bold",
},
});*/
