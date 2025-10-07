// import React from "react";
// import { View, Text } from "react-native";

// export default function ApplicationsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Applications Screen</Text>
//     </View>
//   );
// }


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

// Status Colors
const STATUS_COLORS = {
    PROCESSING: '#ffc107',    // Yellow/Amber
    SANCTIONED: '#28a745',    // Green
    REJECTED: '#dc3545',      // Red
    DRAFT: '#6c757d',         // Grey
};

// --- Mock Application Data ---
const mockApplications = [
    {
        id: 'APP-2025-5001',
        scheme: 'Financial Relief Scheme 2025 (PCR Act)',
        date: '03-Oct-2025',
        status: 'PROCESSING',
        amount: '₹ 85,000',
        stage: 'Nodal Officer Review',
    },
    {
        id: 'APP-2024-3091',
        scheme: 'Housing Subsidy Program (PoA Act)',
        date: '15-Mar-2024',
        status: 'SANCTIONED',
        amount: '₹ 2,00,000',
        stage: 'Disbursed',
    },
    {
        id: 'APP-2024-0411',
        scheme: 'Legal Aid Grant',
        date: '10-Jan-2024',
        status: 'REJECTED',
        amount: 'N/A',
        stage: 'Documents Incomplete',
    },
    {
        id: 'APP-2025-5102',
        scheme: 'Financial Relief Scheme 2025 (PCR Act)',
        date: '05-Oct-2025',
        status: 'DRAFT',
        amount: 'TBD',
        stage: 'Pending Step 3: Upload',
    },
];

// --- Helper Component: Application Card ---
const ApplicationCard = ({ app, navigation }) => {
    const statusColor = STATUS_COLORS[app.status] || STATUS_COLORS.DRAFT;

    return (
        <TouchableOpacity 
            style={cardStyles.card}
            onPress={() => navigation.navigate("ApplicationDetailScreen", { appId: app.id })}
            activeOpacity={0.8}
        >
            <View style={[cardStyles.statusPill, { backgroundColor: statusColor }]}>
                <Text style={cardStyles.statusText}>{app.status.toUpperCase()}</Text>
            </View>

            <View style={cardStyles.headerRow}>
                <Text style={cardStyles.appId}>{app.id}</Text>
                <Text style={cardStyles.date}>{app.date}</Text>
            </View>

            <Text style={cardStyles.schemeName}>{app.scheme}</Text>

            <View style={cardStyles.detailsRow}>
                <View style={cardStyles.detailItem}>
                    <Text style={cardStyles.detailLabel}>Current Stage</Text>
                    <Text style={cardStyles.detailValue}>{app.stage}</Text>
                </View>
                <View style={cardStyles.detailItem}>
                    <Text style={cardStyles.detailLabel}>Sanction Amount</Text>
                    <Text style={[cardStyles.detailValue, { color: app.status === 'REJECTED' ? '#888' : BRAND_PRIMARY }]}>
                        {app.amount}
                    </Text>
                </View>
            </View>
            
            <View style={cardStyles.arrowContainer}>
                <MaterialIcons name="arrow-forward-ios" size={16} color="#AAA" />
            </View>
        </TouchableOpacity>
    );
};


export default function ApplicationsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.title}>My Applications</Text>
                <Text style={styles.subtitle}>Track your submissions and benefit status.</Text>
            </View>
            
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {mockApplications.map((app) => (
                    <ApplicationCard key={app.id} app={app} navigation={navigation} />
                ))}

                <View style={styles.infoBox}>
                    <FontAwesome5 name="info-circle" size={18} color={BRAND_PRIMARY} style={{ marginRight: 10 }} />
                    <Text style={styles.infoText}>Tap any application to view the full timeline and detailed status.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: LIGHT_GREY, // Use light grey background for list views
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
        fontSize: 14,
        color: TEXT_COLOR,
        marginTop: 4,
    },
    scrollContent: {
        padding: 20,
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6F0FF', // Very light blue
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        borderLeftWidth: 4,
        borderLeftColor: BRAND_PRIMARY,
    },
    infoText: {
        fontSize: 12,
        color: BRAND_PRIMARY,
        flex: 1,
    }
});

const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: FONT_COLOR,
        padding: 18,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        position: 'relative',
    },
    statusPill: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        zIndex: 10,
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: FONT_COLOR,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 10, // Push content down due to absolute status pill
    },
    appId: {
        fontSize: 18,
        fontWeight: 'bold',
        color: BRAND_PRIMARY,
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
    schemeName: {
        fontSize: 15,
        color: TEXT_COLOR,
        marginBottom: 15,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        paddingTop: 10,
    },
    detailItem: {
        flex: 1,
    },
    detailLabel: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '700',
        color: TEXT_COLOR,
    },
    arrowContainer: {
        position: 'absolute',
        right: 18,
        bottom: 15,
    }
});