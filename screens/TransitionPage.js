// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function TransitionPage({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Transitioning to Online Resolution</Text>
//       <Button title="Proceed ➜" onPress={() => navigation.navigate('PushResolution')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });


import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TransitionPage({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate("PushResolution"), 2000); // 2-second transition
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Later that day...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" },
  text: { fontSize: 24, fontWeight: "bold" },
});
