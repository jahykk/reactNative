import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profile.jpg");
  const [name, setName] = useState("Yaowaret Kaenmalee");
  const [Image, setImage] = useState(require("../assets/รูปอวตาร.png"));

  const handleChangeName = () => {
    setName("Jah");
  };
  const handleChangImage = () => {
    setImage("../assets/รูปอวตาร.png");
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} />
        </View>
        <View>
            <Button title="Change Image"onPress={handleChangImage}/>
        </View>
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
