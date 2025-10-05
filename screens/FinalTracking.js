// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function FinalTracking() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Case Resolved 🎉</Text>
//       <Text style={styles.subText}>Thank you for using NyayaSetu!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BBDEFB' },
//   text: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
//   subText: { fontSize: 18, color: '#333' },
// });


import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function FinalTracking({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Final Application Status</Text>

      <Text>✅ Application Submitted</Text>
      <Text>✅ Document Verification</Text>
      <Text>✅ Officer Review (Approved)</Text>
      <Text>✅ Fund Disbursed (₹1,00,000 Credited)</Text>

      <Button title="Download Sanction Order" onPress={() => alert("Sanction Order Downloaded ✅")} />
      <Button title="Back to Dashboard" onPress={() => navigation.navigate("Dashboard")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
