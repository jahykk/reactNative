import { StyleSheet } from "react-native";

export default StyleSheet.create({
    herderText:{
        fontSize:20,
        fontWeight: "bold",
        color:"#f08080",
   },
   normalText:{
     fontSize:16,
     color:"#800000",
   },
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
}
});