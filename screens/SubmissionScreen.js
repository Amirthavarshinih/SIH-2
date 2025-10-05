// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function SubmissionScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Application Submitted ✅</Text>
//       <Button title="View Notifications ➜" onPress={() => navigation.navigate('NotificationScreen')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SubmissionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application Submitted Successfully ✅</Text>
      <Text>Application ID: NY-POA/TN/2025/10/0123</Text>
      <Text>Status: Forwarded to District Nodal Officer, Tiruvallur</Text>

      <Text style={{ marginTop: 20 }}>Tracking Timeline:</Text>
      <Text>✅ Application Submitted - 05-Oct-2025, 10:51 AM</Text>
      <Text>✅ Automated Verification Complete - 05-Oct-2025, 10:51 AM</Text>
      <Text>🔵 Officer Review - Status: Assigned</Text>

      <Button title="Two Days Later..." onPress={() => navigation.navigate("NotificationScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
