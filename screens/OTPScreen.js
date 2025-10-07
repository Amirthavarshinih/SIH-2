// // import React from 'react';
// // import { View, Text, Button, StyleSheet } from 'react-native';

// // export default function OTPScreen({ navigation }) {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>Verify OTP</Text>
// //       <Button title="Verify & Continue ➜" onPress={() => navigation.navigate('Dashboard')} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// //   text: { fontSize: 22, marginBottom: 20 },
// // });



// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// export default function OTPScreen({ navigation }) {
//   const [otp, setOtp] = useState("587309");
//   const [timer, setTimer] = useState(30);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prev => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify Your Identity</Text>
//       <Text>Transaction ID: NS-KYC-2510051050A</Text>
//       <TextInput
//         style={styles.input}
//         value={otp}
//         onChangeText={setOtp}
//         placeholder="Enter OTP"
//         keyboardType="numeric"
//       />
//       <Text>Resend OTP in 00:{timer < 10 ? `0${timer}` : timer}</Text>
//       <Button title="Verify & Proceed" onPress={() => navigation.navigate("Dashboard")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginVertical: 20 },
// });


import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from "react-native";

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; // Professional Blue
const TEXT_COLOR = '#333333';
const LIGHT_GREY = '#F5F5F5';
const FONT_COLOR = '#FFFFFF';      // Pure White

const OTP_LENGTH = 6;

export default function OTPScreen({ navigation }) {
  // Hardcoded OTP for the prototype video: 587309
  const [otp, setOtp] = useState("587309"); 
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);
  const otpArray = otp.split(''); // Convert string to array for input boxes

  // Timer useEffect hook
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOTPChange = (text, index) => {
    // 1. Update the overall OTP state
    const newOtp = otpArray.map((digit, i) => (i === index ? text : digit)).join('');
    setOtp(newOtp);

    // 2. Auto-focus to the next input field
    if (text && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    // In the prototype, this navigates to the Dashboard
    // Ensure you have a screen named 'Dashboard' in your navigator
    navigation.navigate("Dashboard");
  };

  const handleResend = () => {
    if (timer === 0) {
      // Logic to resend OTP goes here
      console.log("OTP Resent!");
      setTimer(30); // Reset timer
      setOtp("");    // Clear current OTP
      inputRefs.current[0].focus(); // Focus on the first box
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Verify Identity</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Verify Your Identity</Text>
          <Text style={styles.message}>
            Enter the OTP sent to your registered mobile.
          </Text>
          
          <Text style={styles.transactionId}>
            Transaction ID (Ref: {`NS-KYC-2510051050A`})
          </Text>
          
          {/* OTP Input Boxes */}
          <View style={styles.otpContainer}>
            {Array(OTP_LENGTH).fill(0).map((_, index) => (
              <TextInput
                key={index}
                ref={el => inputRefs.current[index] = el}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={otpArray[index]}
                onChangeText={(text) => handleOTPChange(text, index)}
                placeholder={index < 5 ? '•' : '•'} // Placeholder dot
                selectionColor={BRAND_PRIMARY}
              />
            ))}
          </View>
          
          {/* Resend Timer & Button */}
          <View style={styles.resendContainer}>
            <Text style={styles.timerText}>
              Resend OTP in 00:{timer < 10 ? `0${timer}` : timer}
            </Text>
            <TouchableOpacity 
              onPress={handleResend} 
              disabled={timer > 0}
              style={[
                styles.resendButton, 
                { opacity: timer > 0 ? 0.5 : 1 } // Dim button when disabled
              ]}
            >
              <Text style={styles.resendButtonText}>
                {timer === 0 ? "Resend OTP" : "Resend"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Verify Button */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleVerify}
            activeOpacity={0.8}
            disabled={otp.length < OTP_LENGTH}
          >
            <Text style={styles.buttonText}>Verify & Proceed</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: LIGHT_GREY,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    backgroundColor: BRAND_PRIMARY, 
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#0056b3',
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: FONT_COLOR,
  },
  card: {
    backgroundColor: '#FFFFFF', 
    margin: 20,
    padding: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: BRAND_PRIMARY,
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: TEXT_COLOR,
    textAlign: 'center',
    marginBottom: 20,
  },
  transactionId: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 45,
    height: 55,
    borderWidth: 2,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_COLOR,
    backgroundColor: LIGHT_GREY,
    // Add focus styling for a real app:
    // &:focus: { borderColor: BRAND_PRIMARY }
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 14,
    color: '#888',
  },
  resendButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  resendButtonText: {
    color: BRAND_PRIMARY,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: BRAND_PRIMARY,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: FONT_COLOR,
    fontSize: 18,
    fontWeight: '700',
  },
});