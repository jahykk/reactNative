import { StyleSheet } from "react-native";

export default StyleSheet.create({
  herderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f08080",
  },
  normalText: {
    fontSize: 16,
    color: "#800000",
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
    fontWeight: "bold",
  },
});
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
});

const stylesPractice = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff'
    },
    
  header: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
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

  footer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 8,
    marginLeft:50
    }
    
});


export { styles,stylesPractice };

