// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function CompletedTimeline({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Timeline of Case Progress</Text>
//       <Button title="Continue ➜" onPress={() => navigation.navigate('TransitionPage')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });


import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CompletedTimeline({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application Tracking Timeline</Text>

      <Text>✅ Officer Review - Approved by Nodal Officer - 07-Oct-2025, 02:30 PM</Text>
      <Text>✅ Fund Disbursement - Amount Credited - UTR: SBINH25280123456 - 07-Oct-2025, 02:45 PM</Text>

      <Button title="Go to Profile" onPress={() => navigation.navigate("TransitionPage")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
