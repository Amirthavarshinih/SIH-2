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


// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// export default function Step1Beneficiary({ navigation }) {
//   const [bankAccount, setBankAccount] = useState("300100200300");
//   const [ifsc, setIfsc] = useState("SBIN0001234");

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Step 1 of 3: Beneficiary Details</Text>
      
//       <Text>Beneficiary Name: Priya Sharma</Text>
//       <Text>Address: 123, Ambedkar Nagar, Ikkadu, Tiruvallur, Tamil Nadu</Text>
//       <Text>Community: Scheduled Caste (Verified ✅)</Text>
      
//       <TextInput
//         style={styles.input}
//         value={bankAccount}
//         onChangeText={setBankAccount}
//         placeholder="Bank Account Number"
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         value={ifsc}
//         onChangeText={setIfsc}
//         placeholder="IFSC Code"
//       />

//       <Button title="Save & Continue" onPress={() => navigation.navigate("Step2CaseDetails")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 10, borderRadius: 5 },
// });


import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";

// --- Design Constants Defined Clearly ---
const BRAND_PRIMARY = '#007BFF'; 
const TEXT_COLOR = '#333333';
const DISABLED_COLOR = '#A0A0A0'; 
const INPUT_BACKGROUND = '#F0F0F0'; 
const SUCCESS_COLOR = '#28a745'; 
const LIGHT_GREY = '#F5F5F5'; // <--- FIX: Defined here!

export default function Step1Beneficiary({ navigation }) {
  // Hardcoded bank details for the prototype video
  const [bankAccount, setBankAccount] = useState("300100200300");
  const [ifsc, setIfsc] = useState("SBIN0001234");
  
  // Pre-filled beneficiary details (Locked/read-only)
  const beneficiaryDetails = {
    name: "Priya Sharma",
    address: "123, Ambedkar Nagar, Ikkadu, Tiruvallur, Tamil Nadu",
    community: "Scheduled Caste",
  };

  const handleContinue = () => {
    // Navigate to Step 2 (Case Details)
    navigation.navigate("Step2CaseDetails"); 
  };

  // Helper component for Locked/Pre-filled fields
  const LockedField = ({ label, value, isVerified }) => (
      <View style={styles.lockedFieldContainer}>
          <Text style={styles.lockedLabel}>{label}</Text>
          <View style={styles.lockedValueBox}>
            <Text style={styles.lockedValue}>{value}</Text>
            {isVerified && (
                <Text style={styles.verifiedCheck}>✅ Verified</Text>
            )}
          </View>
      </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Application Form</Text>
        <Text style={styles.subtitle}>Step 1 of 3: Beneficiary Details</Text>
        {/* Simple Progress Bar */}
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '33.33%' }]} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Pre-filled and Locked Section */}
        <View style={styles.section}>
            <Text style={styles.sectionHeader}>Authenticated Details (Read-Only)</Text>
            <LockedField label="Beneficiary Name" value={beneficiaryDetails.name} />
            <LockedField label="Address" value={beneficiaryDetails.address} />
            <LockedField label="Community" value={beneficiaryDetails.community} isVerified={true} />
        </View>

        {/* User Input Section */}
        <View style={styles.section}>
            <Text style={styles.sectionHeader}>Bank Account Details (Required)</Text>
            
            <Text style={styles.inputLabel}>Bank Account Number</Text>
            <TextInput
              style={styles.input}
              value={bankAccount}
              onChangeText={setBankAccount}
              placeholder="Enter your Bank A/c No."
              keyboardType="numeric"
            />
            
            <Text style={styles.inputLabel}>IFSC Code</Text>
            <TextInput
              style={styles.input}
              value={ifsc}
              onChangeText={setIfsc}
              placeholder="Enter IFSC Code"
              autoCapitalize="characters"
            />
        </View>

      </ScrollView>

      {/* Fixed Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Save & Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { padding: 20, paddingBottom: 100 },
  
  // --- Header & Progress Bar ---
  header: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: INPUT_BACKGROUND,
  },
  title: { fontSize: 24, fontWeight: "800", color: BRAND_PRIMARY },
  subtitle: { fontSize: 16, fontWeight: "500", color: TEXT_COLOR, marginBottom: 10 },
  progressBarContainer: {
    height: 6,
    backgroundColor: LIGHT_GREY, // Fixed: LIGHT_GREY is now defined
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: SUCCESS_COLOR,
    borderRadius: 3,
  },

  // --- Section Styling (Pre-filled/Locked) ---
  section: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: BRAND_PRIMARY,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: BRAND_PRIMARY,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: DISABLED_COLOR,
    paddingBottom: 5,
  },
  lockedFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  lockedLabel: {
    fontSize: 14,
    color: DISABLED_COLOR,
    fontWeight: '500',
    flex: 1,
  },
  lockedValueBox: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lockedValue: {
    fontSize: 15,
    color: DISABLED_COLOR,
    fontWeight: '600',
  },
  verifiedCheck: {
    fontSize: 14,
    color: SUCCESS_COLOR,
    fontWeight: '600',
    marginLeft: 10,
  },
  
  // --- Input Styling (Editable) ---
  inputLabel: {
    fontSize: 14,
    color: TEXT_COLOR,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 5,
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#CCC', 
    backgroundColor: INPUT_BACKGROUND,
    padding: 12, 
    borderRadius: 8, 
    fontSize: 16,
    color: TEXT_COLOR,
  },

  // --- Footer & Button ---
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  button: {
    backgroundColor: BRAND_PRIMARY,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});