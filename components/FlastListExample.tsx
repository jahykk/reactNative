import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

interface UserItem {
  id: string;
  name: string;
  email: string;
}

const FlastListExample = (): React.JSX.Element => {
  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  //ฟังก์ชั่น _renderItem
  const _renderItem = ({ item }: { item: UserItem }) => (
    <view style={styles.item}>
      <text style={styles.name}>{item.name}</text>
      <text style={styles.email}>{item.email}</text>
    </view>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={user} //กำหนดข้้อมูลให้กับFlatList
        renderItem={_renderItem} //สร้างฟังก์ั่น _renderItem
        keyExtractor={(item) => item.id} //กำหนดคีย์สำหรับแต่ละ item
      />
    </View>
  );
};

export default FlastListExample;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
});
