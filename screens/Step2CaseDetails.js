// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function Step2CaseDetails({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Step 2: Case Details</Text>
//       <Button title="Next ➜" onPress={() => navigation.navigate('Step3Documents')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Step2CaseDetails({ navigation }) {
  const [firNumber, setFirNumber] = useState("TVL-WPS-105/2025");
  const [firDate, setFirDate] = useState("02-Oct-2025");
  const [statement, setStatement] = useState("Incident of caste-based atrocity reported. FIR filed with local police.");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 2 of 3: Case Details</Text>

      <TextInput
        style={styles.input}
        value={firNumber}
        onChangeText={setFirNumber}
        placeholder="FIR Number"
      />
      <TextInput
        style={styles.input}
        value={firDate}
        onChangeText={setFirDate}
        placeholder="Date of FIR"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={statement}
        onChangeText={setStatement}
        multiline
        placeholder="Statement of Incident"
      />

      <Button title="Save & Continue" onPress={() => navigation.navigate("Step3Documents")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 10, borderRadius: 5 },
});
