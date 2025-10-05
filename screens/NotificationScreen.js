// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function NotificationScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>New Notifications 📨</Text>
//       <Button title="Check Timeline ➜" onPress={() => navigation.navigate('CompletedTimeline')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });


import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NyayaSetu DBT Alert</Text>
      <Text>
        Disbursement Successful: An amount of ₹1,00,000 has been credited to your Bank Account ending in 0300 against Sanction Order #SO-789-25
      </Text>

      <Button title="View Application Tracking" onPress={() => navigation.navigate("CompletedTimeline")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
