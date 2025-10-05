// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function PushResolution({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Push for Resolution</Text>
//       <Button title="Track Case ➜" onPress={() => navigation.navigate('FinalTracking')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8F5E9' },
//   text: { fontSize: 22, marginBottom: 20 },
// });


import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PushResolution({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NyayaSetu</Text>
      <Text>Your application (ID: ...0123) has been approved.</Text>
      <Text>₹1,00,000 has been disbursed to your bank account.</Text>

      <Button title="View Completed Tracking" onPress={() => navigation.navigate("FinalTracking")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
