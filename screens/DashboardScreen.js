import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Priya</Text>
      <Text>Last Login: 03-Oct-2025, 04:22 PM</Text>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Apply for Financial Relief</Text>
        <Text>Access benefits under the PCR & PoA Acts</Text>
        <Button title="Start New Application" onPress={() => navigation.navigate("SchemeSelection")} />
      </View>

      <View style={styles.services}>
        <Text>Services Grid (9 icons)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  banner: { backgroundColor: "#43BCCD", padding: 15, borderRadius: 10, marginVertical: 20 },
  bannerText: { fontSize: 18, fontWeight: "bold", color: "white" },
  services: { marginTop: 30 },
});



