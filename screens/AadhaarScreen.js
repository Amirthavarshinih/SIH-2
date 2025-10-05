// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const AadhaarAuth = () => {
//   const [aadhaar, setAadhaar] = useState("123456789012");
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Beneficiary Authentication</Text>
//       <TextInput
//         style={styles.input}
//         value={aadhaar}
//         onChangeText={setAadhaar}
//         keyboardType="numeric"
//       />
//       <Button title="Authenticate via OTP" onPress={() => navigation.navigate("OTPVerification")} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
//   title: { fontSize: 24, marginBottom: 20 },
//   input: { width: "80%", borderWidth: 1, borderColor: "#ccc", marginBottom: 20, padding: 10, borderRadius: 5 },
// });

// export default AadhaarAuth;


import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AadhaarScreen({ navigation }) {
  const [aadhaar, setAadhaar] = useState("123456789012");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beneficiary Authentication</Text>
      <TextInput
        style={styles.input}
        value={aadhaar}
        onChangeText={setAadhaar}
        placeholder="Enter 12-Digit Aadhaar Number"
        keyboardType="numeric"
      />
      <Button title="Authenticate via OTP" onPress={() => navigation.navigate("OTP")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 20 },
});
