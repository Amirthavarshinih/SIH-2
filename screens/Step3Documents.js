// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function Step3Documents({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Step 3: Upload Documents</Text>
//       <Button title="Next ➜" onPress={() => navigation.navigate('SubmissionScreen')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8E1' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function Step3Documents({ navigation }) {
//   const [firUploaded, setFirUploaded] = useState(false);
//   const [communityUploaded, setCommunityUploaded] = useState(false);

//   const uploadFIR = () => {
//     setTimeout(() => setFirUploaded(true), 2000); // mock upload + verification
//   };

//   const uploadCommunity = () => {
//     setTimeout(() => setCommunityUploaded(true), 2000); // mock upload + verification
//   };

//   const reviewAndSubmit = () => {
//     if (firUploaded && communityUploaded) {
//       navigation.navigate("SubmissionScreen");
//     } else {
//       alert("Please upload both documents.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Step 3 of 3: Document Upload</Text>

//       <Button
//         title={firUploaded ? "FIR Verified ✅" : "Upload FIR Copy"}
//         onPress={uploadFIR}
//       />
//       <Button
//         title={communityUploaded ? "Certificate Verified ✅" : "Upload Community Certificate"}
//         onPress={uploadCommunity}
//       />

//       <Button title="Review & Submit Application" onPress={reviewAndSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: "center", gap: 15 },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
// });



import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Alert 
} from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

// --- Design Constants (Keep consistent across all steps) ---
const BRAND_PRIMARY = '#007BFF'; 
const TEXT_COLOR = '#333333';
const LIGHT_GREY = '#F5F5F5';
const SUCCESS_COLOR = '#28a745'; 
const WARNING_COLOR = '#ffc107'; 
const INPUT_BACKGROUND = '#F0F0F0'; 
const FONT_COLOR = '#FFFFFF'; 

// States for the verification process
const STATUS = {
    PENDING: 'PENDING',
    SELECTED: 'SELECTED', // File is selected, awaiting verification
    UPLOADING: 'UPLOADING',
    VERIFIED: 'VERIFIED',
};
const DISABLED_COLOR = '#A0A0A0';

// --- Custom Upload Item Component ---
const DocumentUploadItem = ({ 
    title, 
    verificationText, 
    onSelect,
    status,
    fileName
}) => {
    let icon, color, buttonText, statusDisplay;

    // Logic for button text and status display based on state
    switch (status) {
        case STATUS.VERIFIED:
            icon = 'check-circle';
            color = SUCCESS_COLOR;
            buttonText = 'Verified';
            statusDisplay = `✅ ${verificationText}`;
            break;
        case STATUS.UPLOADING:
            icon = 'settings-remote'; 
            color = WARNING_COLOR;
            buttonText = 'Verifying...';
            statusDisplay = 'Connecting to database...';
            break;
        case STATUS.SELECTED:
            icon = 'cloud-upload';
            color = BRAND_PRIMARY;
            buttonText = 'Verify & Upload'; // Clear action after file is chosen
            statusDisplay = `File Ready: ${fileName}`;
            break;
        case STATUS.PENDING:
        default:
            icon = 'attach-file'; // Professional icon for file selection
            color = TEXT_COLOR;
            buttonText = `Choose ${title.split(' ')[0]}`;
            statusDisplay = `Required: ${title.split(' ')[0]}`;
            break;
    }
    
    // Handles the two-step click process (Select -> Verify)
    const handlePress = () => {
        onSelect();
    };

    const isActionDisabled = status === STATUS.UPLOADING || status === STATUS.VERIFIED;

    return (
        <View style={[uploadStyles.itemContainer, {borderColor: status === STATUS.VERIFIED ? SUCCESS_COLOR : '#EEE'}]}>
            <Text style={uploadStyles.itemTitle}>{title}</Text>
            
            <TouchableOpacity 
                style={[
                    uploadStyles.uploadButton, 
                    { backgroundColor: isActionDisabled ? LIGHT_GREY : (status === STATUS.SELECTED ? BRAND_PRIMARY : INPUT_BACKGROUND) },
                    { borderColor: isActionDisabled ? DISABLED_COLOR : (status === STATUS.SELECTED ? BRAND_PRIMARY : DISABLED_COLOR), borderWidth: 1 }
                ]}
                onPress={handlePress}
                disabled={isActionDisabled}
                activeOpacity={0.8}
            >
                {status === STATUS.UPLOADING && <ActivityIndicator color={BRAND_PRIMARY} size="small" style={{ marginRight: 8 }}/>}
                
                {status !== STATUS.UPLOADING && (
                    <MaterialIcons 
                        name={icon} 
                        size={18} 
                        color={isActionDisabled || status === STATUS.PENDING ? TEXT_COLOR : FONT_COLOR} 
                        style={{ marginRight: 8 }} 
                    />
                )}
                <Text style={[
                    uploadStyles.buttonText, 
                    { color: isActionDisabled || status === STATUS.PENDING ? TEXT_COLOR : FONT_COLOR }
                ]}>
                    {buttonText}
                </Text>
            </TouchableOpacity>

            {/* Verification Status */}
            <View style={uploadStyles.verificationRow}>
                <Text style={[
                    uploadStyles.verificationText, 
                    {color: status === STATUS.VERIFIED ? SUCCESS_COLOR : TEXT_COLOR}
                ]}>
                    {statusDisplay}
                </Text>
            </View>
        </View>
    );
};


export default function Step3Documents({ navigation }) {
    const [firStatus, setFirStatus] = useState(STATUS.PENDING);
    const [communityStatus, setCommunityStatus] = useState(STATUS.PENDING);
    const [firFileName, setFirFileName] = useState("");
    const [communityFileName, setCommunityFileName] = useState("");

    // Universal handler for the two-step process
    const handleDocumentAction = (currentStatus, setStatus, setFileName, mockFileName) => {
        if (currentStatus === STATUS.PENDING) {
            // Step 1: Simulate opening file picker/gallery and selecting a file
            console.log(`Simulating opening file picker for ${mockFileName}`);
            setFileName(mockFileName); 
            setStatus(STATUS.SELECTED);
        } else if (currentStatus === STATUS.SELECTED) {
            // Step 2: Simulate verification after file selection
            setStatus(STATUS.UPLOADING);
            setTimeout(() => {
                setStatus(STATUS.VERIFIED);
            }, 2000); 
        }
    };

    const reviewAndSubmit = () => {
        if (firStatus === STATUS.VERIFIED && communityStatus === STATUS.VERIFIED) {
            navigation.navigate("SubmissionScreen"); 
        } else {
            Alert.alert(
                "Verification Required",
                "Please ensure both documents have been successfully verified before proceeding.",
                [{ text: "OK" }]
            );
        }
    };

    const isReadyToSubmit = firStatus === STATUS.VERIFIED && communityStatus === STATUS.VERIFIED;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                {/* Simplified header titles */}
                <Text style={styles.title}>Application Form</Text>
                <Text style={styles.subtitle}>Step 3 of 3: Document Upload</Text>
                
                {/* Progress Bar (100% complete) */}
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: '100%' }]} />
                </View>
            </View>

            <View style={styles.scrollContent}>
                
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Required Documents</Text>

                    <DocumentUploadItem
                        title="FIR Copy"
                        verificationText="FIR Verified with CCTNS Database."
                        onSelect={() => handleDocumentAction(firStatus, setFirStatus, setFirFileName, "TVL-WPS-105-FIR.pdf")}
                        status={firStatus}
                        fileName={firFileName}
                    />

                    <DocumentUploadItem
                        title="Community Certificate"
                        verificationText="Certificate Verified with State DigiLocker Vault."
                        onSelect={() => handleDocumentAction(communityStatus, setCommunityStatus, setCommunityFileName, "PriyaSharma_SC_Cert.pdf")}
                        status={communityStatus}
                        fileName={communityFileName}
                    />
                </View>

                <Text style={styles.note}>
                    (Formats: PDF, JPG. Max size: 5MB)
                </Text>
            </View>

            {/* Fixed Footer Button */}
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={[
                        styles.button, 
                        { opacity: isReadyToSubmit ? 1 : 0.6 }
                    ]} 
                    onPress={reviewAndSubmit}
                    disabled={!isReadyToSubmit}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Review & Submit Application</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  // --- Header & Progress Bar ---
  header: {
    paddingTop: 15, // Reduced padding for a tighter look
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GREY,
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
  
  // --- Content Area ---
  scrollContent: { 
    flex: 1,
    padding: 20, 
    paddingBottom: 100 
  },
  section: {
    padding: 15,
    backgroundColor: INPUT_BACKGROUND,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: BRAND_PRIMARY,
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: BRAND_PRIMARY,
    marginBottom: 15,
  },
  note: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
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
    color: FONT_COLOR,
    fontSize: 18,
    fontWeight: '700',
  },
});

const uploadStyles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: TEXT_COLOR,
        marginBottom: 10,
    },
    uploadButton: {
        flexDirection: 'row',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 45,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
    },
    verificationRow: {
        marginTop: 10,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: LIGHT_GREY,
    },
    verificationText: {
        fontSize: 14,
        fontWeight: '600',
    }
});