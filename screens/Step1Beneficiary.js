// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function Step1Beneficiary({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Step 1: Beneficiary Details</Text>
//       <Button title="Next ➜" onPress={() => navigation.navigate('Step2CaseDetails')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA' },
//   text: { fontSize: 22, marginBottom: 20 },
// });


import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Step1Beneficiary({ navigation }) {
  const [bankAccount, setBankAccount] = useState("300100200300");
  const [ifsc, setIfsc] = useState("SBIN0001234");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 1 of 3: Beneficiary Details</Text>
      
      <Text>Beneficiary Name: Priya Sharma</Text>
      <Text>Address: 123, Ambedkar Nagar, Ikkadu, Tiruvallur, Tamil Nadu</Text>
      <Text>Community: Scheduled Caste (Verified ✅)</Text>
      
      <TextInput
        style={styles.input}
        value={bankAccount}
        onChangeText={setBankAccount}
        placeholder="Bank Account Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={ifsc}
        onChangeText={setIfsc}
        placeholder="IFSC Code"
      />

      <Button title="Save & Continue" onPress={() => navigation.navigate("Step2CaseDetails")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 10, borderRadius: 5 },
});
