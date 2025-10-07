// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function FinalTracking() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>Case Resolved 🎉</Text>
// //       <Text style={styles.subText}>Thank you for using NyayaSetu!</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BBDEFB' },
// //   text: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
// //   subText: { fontSize: 18, color: '#333' },
// // });


// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function FinalTracking({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Final Application Status</Text>

//       <Text>✅ Application Submitted</Text>
//       <Text>✅ Document Verification</Text>
//       <Text>✅ Officer Review (Approved)</Text>
//       <Text>✅ Fund Disbursed (₹1,00,000 Credited)</Text>

//       <Button title="Download Sanction Order" onPress={() => alert("Sanction Order Downloaded ✅")} />
//       <Button title="Back to Dashboard" onPress={() => navigation.navigate("Dashboard")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
// });


import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView 
} from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; 
const TEXT_COLOR = '#333333';
const LIGHT_GREY = '#F5F5F5';
const FONT_COLOR = '#FFFFFF';
const SUCCESS_COLOR = '#28a745'; // Primary color for success
const ACCENT_COLOR = '#6c757d'; // Muted color for details

// --- Mock Data ---
const sanctionData = {
    amount: '₹ 1,00,000',
    appId: 'APP-2025-5001',
    date: '07-Oct-2025',
    steps: [
        'Application Submitted',
        'Document Verification',
        'Officer Review (Approved)',
        'Fund Disbursed',
    ]
};

// --- Helper Component: Completed Step ---
const CompletedStep = ({ text }) => (
    <View style={stepStyles.container}>
        <MaterialIcons name="check-circle" size={24} color={SUCCESS_COLOR} style={stepStyles.icon} />
        <Text style={stepStyles.text}>{text}</Text>
    </View>
);


export default function FinalTracking({ navigation }) {

    const handleDownload = () => {
        // Mock download action
        alert("Sanction Order APP-2025-5001 successfully downloaded! ✅");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* 1. Success Header Banner */}
                <View style={styles.successBanner}>
                    <MaterialIcons name="paid" size={60} color={FONT_COLOR} />
                    <Text style={styles.bannerTitle}>APPLICATION SANCTIONED!</Text>
                    <Text style={styles.bannerSubtitle}>
                        Your financial relief has been approved and disbursed.
                    </Text>
                </View>

                {/* 2. Amount and ID Details */}
                <View style={styles.detailCard}>
                    <Text style={styles.detailLabel}>Disbursed Amount</Text>
                    <Text style={styles.amountText}>{sanctionData.amount}</Text>
                    <View style={styles.divider} />
                    <Text style={styles.detailSmall}>Application ID: {sanctionData.appId}</Text>
                    <Text style={styles.detailSmall}>Sanction Date: {sanctionData.date}</Text>
                </View>

                {/* 3. Completed Steps */}
                <View style={styles.stepsContainer}>
                    <Text style={styles.stepsHeader}>Processing Timeline</Text>
                    {sanctionData.steps.map((step, index) => (
                        <CompletedStep key={index} text={step} />
                    ))}
                </View>

            </ScrollView>

            {/* Fixed Action Buttons */}
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={[styles.button, styles.downloadButton]} 
                    onPress={handleDownload}
                    activeOpacity={0.8}
                >
                    <MaterialIcons name="file-download" size={20} color={BRAND_PRIMARY} style={{ marginRight: 8 }} />
                    <Text style={[styles.buttonText, { color: BRAND_PRIMARY }]}>
                        Download Sanction Order
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.button, styles.dashboardButton]} 
                    onPress={() => navigation.navigate("Dashboard")}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Back to Dashboard</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: LIGHT_GREY,
    },
    scrollContent: {
        paddingBottom: 160, // Space for fixed footer
    },
    // --- 1. Success Banner ---
    successBanner: {
        backgroundColor: SUCCESS_COLOR,
        padding: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 20,
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: FONT_COLOR,
        marginTop: 10,
    },
    bannerSubtitle: {
        fontSize: 14,
        color: FONT_COLOR,
        opacity: 0.9,
        marginTop: 5,
    },
    // --- 2. Detail Card ---
    detailCard: {
        backgroundColor: FONT_COLOR,
        marginHorizontal: 20,
        padding: 25,
        borderRadius: 15,
        marginTop: -40, // Pulls the card partially over the banner for a visual effect
        shadowColor: SUCCESS_COLOR,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 14,
        color: ACCENT_COLOR,
        fontWeight: '600',
    },
    amountText: {
        fontSize: 40,
        fontWeight: '900',
        color: TEXT_COLOR,
        marginVertical: 5,
    },
    divider: {
        height: 1,
        backgroundColor: LIGHT_GREY,
        width: '80%',
        marginVertical: 10,
    },
    detailSmall: {
        fontSize: 14,
        color: ACCENT_COLOR,
    },
    // --- 3. Completed Steps ---
    stepsContainer: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    stepsHeader: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_COLOR,
        marginBottom: 15,
    },
    // --- Footer Buttons ---
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
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    downloadButton: {
        backgroundColor: LIGHT_GREY,
        borderWidth: 1,
        borderColor: BRAND_PRIMARY,
    },
    dashboardButton: {
        backgroundColor: BRAND_PRIMARY,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: FONT_COLOR,
    },
});

const stepStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    icon: {
        marginRight: 15,
    },
    text: {
        fontSize: 16,
        color: TEXT_COLOR,
        fontWeight: '500',
    },
});