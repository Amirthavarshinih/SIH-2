// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function OTPScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Verify OTP</Text>
//       <Button title="Verify & Continue ➜" onPress={() => navigation.navigate('Dashboard')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function OTPScreen({ navigation }) {
  const [otp, setOtp] = useState("587309");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Identity</Text>
      <Text>Transaction ID: NS-KYC-2510051050A</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        keyboardType="numeric"
      />
      <Text>Resend OTP in 00:{timer < 10 ? `0${timer}` : timer}</Text>
      <Button title="Verify & Proceed" onPress={() => navigation.navigate("Dashboard")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginVertical: 20 },
});
