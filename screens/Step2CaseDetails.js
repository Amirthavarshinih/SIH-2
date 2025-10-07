// // import React from 'react';
// // import { View, Text, Button, StyleSheet } from 'react-native';

// // export default function Step2CaseDetails({ navigation }) {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>Step 2: Case Details</Text>
// //       <Button title="Next ➜" onPress={() => navigation.navigate('Step3Documents')} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// //   text: { fontSize: 22, marginBottom: 20 },
// // });



// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// export default function Step2CaseDetails({ navigation }) {
//   const [firNumber, setFirNumber] = useState("TVL-WPS-105/2025");
//   const [firDate, setFirDate] = useState("02-Oct-2025");
//   const [statement, setStatement] = useState("Incident of caste-based atrocity reported. FIR filed with local police.");

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Step 2 of 3: Case Details</Text>

//       <TextInput
//         style={styles.input}
//         value={firNumber}
//         onChangeText={setFirNumber}
//         placeholder="FIR Number"
//       />
//       <TextInput
//         style={styles.input}
//         value={firDate}
//         onChangeText={setFirDate}
//         placeholder="Date of FIR"
//       />
//       <TextInput
//         style={[styles.input, { height: 100 }]}
//         value={statement}
//         onChangeText={setStatement}
//         multiline
//         placeholder="Statement of Incident"
//       />

//       <Button title="Save & Continue" onPress={() => navigation.navigate("Step3Documents")} />
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
import { MaterialIcons } from '@expo/vector-icons'; 

// --- Design Constants (Keep consistent across all steps) ---
const BRAND_PRIMARY = '#007BFF'; 
const TEXT_COLOR = '#333333';
const INPUT_BACKGROUND = '#F0F0F0'; 
const SUCCESS_COLOR = '#28a745'; 
const LIGHT_GREY = '#F5F5F5';

export default function Step2CaseDetails({ navigation }) {
  // Hardcoded case details for the prototype video
  const [firNumber, setFirNumber] = useState("TVL-WPS-105/2025");
  const [firDate, setFirDate] = useState("02-Oct-2025");
  const [statement, setStatement] = useState("Incident of caste-based atrocity reported. FIR filed with local police.");

  const handleContinue = () => {
    // Navigate to Step 3 (Document Upload)
    navigation.navigate("Step3Documents"); 
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Application Form</Text>
        <Text style={styles.subtitle}>Step 2 of 3: Case Details</Text>
        
        {/* Progress Bar (66.66% complete) */}
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '66.66%' }]} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.section}>
            <Text style={styles.sectionHeader}>First Information Report (FIR)</Text>
            
            {/* FIR Number Input */}
            <Text style={styles.inputLabel}>FIR Number</Text>
            <TextInput
              style={styles.input}
              value={firNumber}
              onChangeText={setFirNumber}
              placeholder="Enter FIR Number"
              autoCapitalize="characters"
            />
            
            {/* FIR Date Input (Simulated Date Picker) */}
            <Text style={styles.inputLabel}>Date of FIR</Text>
            <View style={styles.dateInputContainer}>
                <TextInput
                    style={[styles.input, styles.dateInput]}
                    value={firDate}
                    onChangeText={setFirDate}
                    placeholder="DD-MMM-YYYY"
                />
                <MaterialIcons name="calendar-today" size={24} color={BRAND_PRIMARY} style={styles.calendarIcon} />
            </View>

            {/* Statement of Incident */}
            <Text style={styles.inputLabel}>Statement of Incident</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={statement}
              onChangeText={setStatement}
              multiline
              numberOfLines={4}
              placeholder="Briefly describe the incident (Max 500 characters)"
              textAlignVertical="top" 
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
  // --- Header & Progress Bar ---
  header: {
    paddingTop: 30, // <<<--- FIX: Pushes content down from the top edge
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: INPUT_BACKGROUND,
  },
  title: { fontSize: 24, fontWeight: "800", color: BRAND_PRIMARY },
  subtitle: { fontSize: 16, fontWeight: "500", color: TEXT_COLOR, marginBottom: 10 },
  progressBarContainer: {
    height: 6,
    backgroundColor: LIGHT_GREY,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: SUCCESS_COLOR, 
    borderRadius: 3,
  },
  
  // --- Scroll Content (Starts close to the header) ---
  scrollContent: { 
    padding: 20, 
    paddingBottom: 100 
  },
  section: {
    padding: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: BRAND_PRIMARY,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: BRAND_PRIMARY,
    marginBottom: 15,
  },

  // --- Input Styling ---
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
  textArea: {
      height: 100,
      paddingTop: 12, 
  },
  dateInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  dateInput: {
      flex: 1,
      marginRight: 10,
  },
  calendarIcon: {
      padding: 5,
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