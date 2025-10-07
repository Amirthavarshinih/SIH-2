// // import React from 'react';
// // import { View, Text, Button, StyleSheet } from 'react-native';

// // export default function CompletedTimeline({ navigation }) {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>Timeline of Case Progress</Text>
// //       <Button title="Continue ➜" onPress={() => navigation.navigate('TransitionPage')} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// //   text: { fontSize: 22, marginBottom: 20 },
// // });


// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function CompletedTimeline({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Application Tracking Timeline</Text>

//       <Text>✅ Officer Review - Approved by Nodal Officer - 07-Oct-2025, 02:30 PM</Text>
//       <Text>✅ Fund Disbursement - Amount Credited - UTR: SBINH25280123456 - 07-Oct-2025, 02:45 PM</Text>

//       <Button title="Go to Profile" onPress={() => navigation.navigate("TransitionPage")} />
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
const MUTED_COLOR = '#888';

// --- Mock Data ---
const applicationData = {
    id: 'APP-2025-5001',
    scheme: 'Financial Relief Scheme 2025 (PCR Act)',
    amount: '₹ 85,000',
    utr: 'SBINH25280123456',
    timeline: [
        {
            stage: 'Application Submitted',
            detail: 'Initial submission of documents.',
            date: '05-Oct-2025, 04:00 PM',
            isComplete: true,
        },
        {
            stage: 'Document Verification',
            detail: 'FIR and Community Certificate verified via CCTNS/DigiLocker.',
            date: '06-Oct-2025, 10:15 AM',
            isComplete: true,
        },
        {
            stage: 'Officer Review - Approved',
            detail: 'Approved by Nodal Officer, Tiruvallur.',
            date: '07-Oct-2025, 02:30 PM',
            isComplete: true,
        },
        {
            stage: 'Fund Disbursement - Completed',
            detail: `Amount Credited. UTR: ${'SBINH25280123456'}`,
            date: '07-Oct-2025, 02:45 PM',
            isComplete: true,
            isFinal: true,
        },
    ]
};

// --- Helper Component: Timeline Node ---
const TimelineNode = ({ item, isFirst, isLast }) => {
    const iconName = item.isComplete ? 'check-circle' : 'circle-outline';
    const lineColor = item.isComplete ? SUCCESS_COLOR : MUTED_COLOR;

    return (
        <View style={timelineStyles.nodeContainer}>
            {/* 1. Line Above (Not for the first item) */}
            {!isFirst && <View style={[timelineStyles.line, { backgroundColor: lineColor, height: 30 }]} />}
            
            {/* 2. Icon (Circle) */}
            <View style={timelineStyles.iconWrapper}>
                <MaterialIcons 
                    name={iconName} 
                    size={24} 
                    color={item.isComplete ? SUCCESS_COLOR : MUTED_COLOR} 
                />
            </View>
            
            {/* 3. Line Below (Not for the last item) */}
            {!isLast && <View style={[timelineStyles.line, { backgroundColor: lineColor, flex: 1 }]} />}

            {/* 4. Content */}
            <View style={timelineStyles.content}>
                <Text style={[timelineStyles.stage, item.isFinal && timelineStyles.finalStage]}>
                    {item.stage}
                </Text>
                <Text style={timelineStyles.detail}>{item.detail}</Text>
                <Text style={timelineStyles.date}>{item.date}</Text>
            </View>
        </View>
    );
};


export default function CompletedTimeline({ navigation }) {
    
    // Find the final, completed stage for quick display
    const finalStage = applicationData.timeline.find(item => item.isFinal && item.isComplete);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.title}>Application Tracking Timeline</Text>
                <Text style={styles.subtitle}>ID: {applicationData.id} | Scheme: {applicationData.scheme}</Text>
            </View>
            
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* 1. Final Status Summary Banner */}
                {finalStage && (
                    <View style={styles.summaryBox}>
                        <MaterialIcons name="paid" size={30} color={SUCCESS_COLOR} />
                        <Text style={styles.summaryTitle}>Funds Disbursed!</Text>
                        <Text style={styles.summaryAmount}>{applicationData.amount}</Text>
                        <Text style={styles.summaryUTR}>UTR: {applicationData.utr}</Text>
                    </View>
                )}

                {/* 2. Timeline Steps */}
                <Text style={styles.sectionHeader}>Full Application History</Text>
                <View style={timelineStyles.timelineContainer}>
                    {applicationData.timeline.map((item, index) => (
                        <TimelineNode
                            key={index}
                            item={item}
                            isFirst={index === 0}
                            isLast={index === applicationData.timeline.length - 1}
                        />
                    ))}
                </View>

            </ScrollView>

            {/* Fixed Footer Button */}
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Dashboard")}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Return to Dashboard</Text>
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
    header: {
        paddingTop: 15,
        paddingHorizontal: 20,
        paddingBottom: 15,
        backgroundColor: FONT_COLOR,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    title: { 
        fontSize: 24, 
        fontWeight: "700", 
        color: BRAND_PRIMARY 
    },
    subtitle: {
        fontSize: 12,
        color: MUTED_COLOR,
        marginTop: 4,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100, // Space for the fixed button
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_COLOR,
        marginTop: 15,
        marginBottom: 10,
    },
    // --- Summary Box (Final Status) ---
    summaryBox: {
        backgroundColor: FONT_COLOR,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        borderLeftWidth: 5,
        borderLeftColor: SUCCESS_COLOR,
        marginBottom: 20,
    },
    summaryTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: SUCCESS_COLOR,
        marginTop: 10,
    },
    summaryAmount: {
        fontSize: 36,
        fontWeight: '900',
        color: TEXT_COLOR,
        marginVertical: 5,
    },
    summaryUTR: {
        fontSize: 14,
        color: MUTED_COLOR,
        fontWeight: '500',
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

const timelineStyles = StyleSheet.create({
    timelineContainer: {
        flexDirection: 'column',
    },
    nodeContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        minHeight: 80, // Ensure space for the line
    },
    iconWrapper: {
        width: 30, // Fixed width for the icon column
        alignItems: 'center',
        zIndex: 10,
        marginTop: -5, // Slight adjustment to center icon
    },
    line: {
        position: 'absolute',
        width: 3,
        left: 13.5, // Center the line under the icon
    },
    content: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 0,
    },
    stage: {
        fontSize: 16,
        fontWeight: '700',
        color: TEXT_COLOR,
    },
    finalStage: {
        color: SUCCESS_COLOR,
        fontSize: 18,
    },
    detail: {
        fontSize: 14,
        color: TEXT_COLOR,
        marginTop: 2,
    },
    date: {
        fontSize: 12,
        color: MUTED_COLOR,
        marginTop: 4,
    },
});