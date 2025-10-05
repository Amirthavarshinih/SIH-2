// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function SchemeSelection({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Select Scheme</Text>
//       <Button title="Next ➜" onPress={() => navigation.navigate('Step1Beneficiary')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SchemeSelection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Scheme</Text>
      <View style={styles.buttonContainer}>
        <Button title="Atrocity Relief (SC/ST PoA)" onPress={() => navigation.navigate("Step1Beneficiary")} />
        <Button title="Inter-Caste Marriage Incentive" onPress={() => alert("Not implemented")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  buttonContainer: { gap: 20 },
});
