// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function SubmissionScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Application Submitted ✅</Text>
//       <Button title="View Notifications ➜" onPress={() => navigation.navigate('NotificationScreen')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function SubmissionScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Application Submitted Successfully ✅</Text>
//       <Text>Application ID: NY-POA/TN/2025/10/0123</Text>
//       <Text>Status: Forwarded to District Nodal Officer, Tiruvallur</Text>

//       <Text style={{ marginTop: 20 }}>Tracking Timeline:</Text>
//       <Text>✅ Application Submitted - 05-Oct-2025, 10:51 AM</Text>
//       <Text>✅ Automated Verification Complete - 05-Oct-2025, 10:51 AM</Text>
//       <Text>🔵 Officer Review - Status: Assigned</Text>

//       <Button title="Two Days Later..." onPress={() => navigation.navigate("NotificationScreen")} />
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
import { MaterialIcons } from '@expo/vector-icons'; 

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; 
const TEXT_COLOR = '#333333';
const LIGHT_GREY = '#F5F5F5';
const FONT_COLOR = '#FFFFFF';
const SUCCESS_COLOR = '#28a745'; 
const PROCESSING_COLOR = '#ffc107'; 
const MUTED_COLOR = '#888';

// --- Mock Data ---
const submittedData = {
    id: 'NY-POA/TN/2025/10/0123',
    officer: 'District Nodal Officer, Tiruvallur',
    submissionDate: '05-Oct-2025, 10:51 AM',
    timeline: [
        { stage: 'Application Submitted', isComplete: true, date: '05-Oct-2025, 10:51 AM' },
        { stage: 'Automated Verification', isComplete: true, date: '05-Oct-2025, 10:51 AM' },
        { stage: 'Officer Review', isComplete: false, status: 'Assigned' },
        { stage: 'Final Sanction', isComplete: false, status: 'Pending' },
    ]
};

// --- Helper Component: Timeline Step (No Emojis) ---
const TimelineStep = ({ item }) => {
    let icon, color, statusText;

    if (item.isComplete) {
        icon = 'check-circle';
        color = SUCCESS_COLOR;
        statusText = item.date;
    } else if (item.status === 'Assigned') {
        icon = 'hourglass-empty';
        color = PROCESSING_COLOR;
        statusText = `Status: ${item.status}`;
    } else {
        icon = 'radio-button-unchecked';
        color = MUTED_COLOR;
        statusText = `Status: ${item.status}`;
    }

    return (
        <View style={timelineStyles.stepContainer}>
            <MaterialIcons name={icon} size={20} color={color} style={timelineStyles.icon} />
            <View style={timelineStyles.textWrapper}>
                <Text style={timelineStyles.stage}>{item.stage}</Text>
                <Text style={timelineStyles.statusText}>{statusText}</Text>
            </View>
        </View>
    );
};


export default function SubmissionScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* 1. Success Header Banner */}
                <View style={styles.successBanner}>
                    <MaterialIcons name="done-all" size={50} color={FONT_COLOR} />
                    <Text style={styles.bannerTitle}>Application Submitted!</Text>
                </View>

                {/* 2. Key Details Card */}
                <View style={styles.detailCard}>
                    <Text style={styles.detailLabel}>Tracking ID</Text>
                    <Text style={styles.idText}>{submittedData.id}</Text>
                    
                    <View style={styles.divider} />

                    <Text style={styles.detailLabel}>Forwarded To</Text>
                    <Text style={styles.forwardedText}>{submittedData.officer}</Text>
                    
                    <Text style={styles.dateText}>
                        Submitted: {submittedData.submissionDate}
                    </Text>
                </View>

                {/* 3. Tracking Timeline */}
                <View style={styles.timelineContainer}>
                    <Text style={styles.sectionHeader}>Processing Timeline</Text>
                    {submittedData.timeline.map((item, index) => (
                        <TimelineStep key={index} item={item} />
                    ))}
                </View>
                
                <Text style={styles.note}>
                    You will receive an SMS notification once the review stage is complete.
                </Text>

            </ScrollView>

            {/* Fixed Action Button */}
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Dashboard")}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Return to Dashboard</Text>
                </TouchableOpacity>
                
                {/* Mock navigation for the next step in the prototype video */}
                <TouchableOpacity 
                    style={styles.mockButton} 
                    onPress={() => navigation.navigate("CompletedTimeline")} 
                >
                    <Text style={styles.mockButtonText}>[PROTOTYPE: Skip 2 Days]</Text>
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
        paddingBottom: 160, 
    },
    // --- 1. Success Banner ---
    successBanner: {
        backgroundColor: BRAND_PRIMARY,
        padding: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: FONT_COLOR,
        marginTop: 10,
    },
    // --- 2. Detail Card ---
    detailCard: {
        backgroundColor: FONT_COLOR,
        marginHorizontal: 20,
        padding: 25,
        borderRadius: 15,
        marginTop: -30, 
        shadowColor: BRAND_PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
    },
    detailLabel: {
        fontSize: 14,
        color: MUTED_COLOR,
        fontWeight: '600',
    },
    idText: {
        fontSize: 24,
        fontWeight: '800',
        color: BRAND_PRIMARY,
        marginTop: 5,
    },
    divider: {
        height: 1,
        backgroundColor: LIGHT_GREY,
        marginVertical: 15,
    },
    forwardedText: {
        fontSize: 18,
        fontWeight: '600',
        color: TEXT_COLOR,
        marginBottom: 10,
    },
    dateText: {
        fontSize: 12,
        color: MUTED_COLOR,
    },
    // --- 3. Tracking Timeline ---
    timelineContainer: {
        marginHorizontal: 20,
        marginTop: 30,
        backgroundColor: FONT_COLOR,
        padding: 20,
        borderRadius: 10,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_COLOR,
        marginBottom: 15,
    },
    note: {
        fontSize: 12,
        color: MUTED_COLOR,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 20,
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
    // PROTOTYPE ONLY: Hidden button to skip to the next screen
    mockButton: {
        marginTop: 10,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
    },
    mockButtonText: {
        fontSize: 10,
        color: MUTED_COLOR,
    }
});

const timelineStyles = StyleSheet.create({
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderLeftWidth: 2, // Vertical line
        borderLeftColor: LIGHT_GREY,
        marginLeft: 10,
    },
    icon: {
        marginLeft: -11, // Pull the icon over the line
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 1,
    },
    textWrapper: {
        paddingLeft: 15,
    },
    stage: {
        fontSize: 16,
        fontWeight: '600',
        color: TEXT_COLOR,
    },
    statusText: {
        fontSize: 12,
        color: MUTED_COLOR,
        marginTop: 2,
    },
});