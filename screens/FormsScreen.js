import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function FormsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Forms & Documents</Text>
        <Text style={styles.text}>A library of downloadable government forms, circulars, and necessary documents will be hosted here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: '#007BFF' },
  text: { fontSize: 16, color: '#333333', textAlign: 'center' },
});