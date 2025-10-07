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


// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// export default function AadhaarScreen({ navigation }) {
//   const [aadhaar, setAadhaar] = useState("123456789012");

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Beneficiary Authentication</Text>
//       <TextInput
//         style={styles.input}
//         value={aadhaar}
//         onChangeText={setAadhaar}
//         placeholder="Enter 12-Digit Aadhaar Number"
//         keyboardType="numeric"
//       />
//       <Button title="Authenticate via OTP" onPress={() => navigation.navigate("OTP")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 20 },
// });


import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, // WARN: Note the warning about using 'react-native-safe-area-context'
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// --- Design Constants Defined Clearly ---
const BRAND_PRIMARY = '#007BFF'; // Professional Blue
const TEXT_COLOR = '#333333';
const LIGHT_GREY = '#F5F5F5';
const FONT_COLOR = '#FFFFFF'; // Defined here to resolve ReferenceError

export default function AadhaarScreen({ navigation }) {
  // Hardcoded value for the prototype video as requested
  // Note: For a real app, you'd initialize this to an empty string ("")
  const [aadhaar, setAadhaar] = useState("1234 5678 9012"); 

  const handleAuthenticate = () => {
    // Navigate to the OTP screen as per your prototype flow
    // Ensure you have a screen named 'OTP' or 'OTPVerification' set up in your navigator.
    navigation.navigate("OTP"); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Beneficiary Authentication</Text>
        </View>

        <View style={styles.card}>
          {/* Visual Placeholder for Aadhaar Logo or Icon */}
          <View style={styles.iconContainer}>
            {/* Using a security-related icon */}
            <Text style={styles.icon}>🔒</Text>
          </View>
          
          <Text style={styles.label}>Enter 12-Digit Aadhaar Number</Text>
          <TextInput
            style={styles.input}
            value={aadhaar} 
            onChangeText={setAadhaar}
            placeholder="XXXX XXXX XXXX"
            placeholderTextColor="#AAAAAA"
            keyboardType="numeric"
            maxLength={14} // 12 digits + 2 spaces
          />
          
          <Text style={styles.infoText}>
            This number is used only to securely verify your identity for accessing government benefits.
          </Text>

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleAuthenticate}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Authenticate via OTP</Text>
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
    justifyContent: "flex-start", 
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
    color: FONT_COLOR, // Fixed: FONT_COLOR is now defined
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
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 50,
    color: BRAND_PRIMARY,
  },
  label: {
    fontSize: 14,
    color: TEXT_COLOR,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: LIGHT_GREY,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    color: TEXT_COLOR,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
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