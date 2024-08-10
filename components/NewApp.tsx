import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

interface NewsItme {
  title: string;
  description: string;
  publishedAt: string; 
  url: string;
}

const NewApp = (): React.JSX.Element => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const API_KEY = '1bceee7358dd4162afb56bbf390a9964';
    const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1bceee7358dd4162afb56bbf390a9964';

  });
  const renderItem = ({item}:{item:NewsItme}) =>(
    <TouchableOpacity style={styles.card}>
        <Text style={styles.headline}>{item.title}</Text>
        <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
        <Text style={styles.description}>{item.description}</Text>

    </TouchableOpacity>

  );
  return <View></View>;
};

export default NewApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FFFA",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContarineer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#20B2AA",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
