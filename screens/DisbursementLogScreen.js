// import React from "react";
// import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// export default function DisbursementLogScreen() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Disbursement Log</Text>
//         <Text style={styles.text}>A history of all received funds and transactions will be displayed here.</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
//   container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: '#007BFF' },
//   text: { fontSize: 16, color: '#333333', textAlign: 'center' },
// });




import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; 
const BRAND_SUCCESS = '#28A745'; // Green for incoming funds
const LIGHT_GREY = '#F5F5F5';
const TEXT_COLOR = '#333333';
const MUTED_COLOR = '#888';
const FONT_COLOR = '#FFFFFF';

// --- Mock Disbursement Data ---
const MOCK_DISBURSEMENTS = [
    { 
        id: 'TXN005', 
        date: '01/Oct/2025', 
        amount: 25000.00, 
        status: 'Completed', 
        type: 'Initial Assistance',
        scheme: 'PoA Act, 2018 (Section 18)' 
    },
    { 
        id: 'TXN004', 
        date: '15/Sep/2025', 
        amount: 5000.00, 
        status: 'Completed', 
        type: 'Medical Aid',
        scheme: 'Scheduled Castes Sub-Plan' 
    },
    { 
        id: 'TXN003', 
        date: '05/Sep/2025', 
        amount: 500.00, 
        status: 'Completed', 
        type: 'Travel Reimbursement',
        scheme: 'Legal Aid Scheme' 
    },
    { 
        id: 'TXN002', 
        date: '28/Aug/2025', 
        amount: 1500.00, 
        status: 'Completed', 
        type: 'Court Fee Aid',
        scheme: 'Legal Aid Scheme' 
    },
];

// Helper Component for a single transaction row
const TransactionRow = ({ transaction }) => (
    <View style={transactionRowStyles.row}>
        <View style={transactionRowStyles.iconContainer}>
            <FontAwesome5 name="receipt" size={20} color={BRAND_SUCCESS} />
        </View>
        <View style={transactionRowStyles.detailsContainer}>
            <Text style={transactionRowStyles.amountText}>₹ {transaction.amount.toLocaleString('en-IN')}</Text>
            <Text style={transactionRowStyles.typeText}>{transaction.type}</Text>
        </View>
        <View style={transactionRowStyles.statusContainer}>
            <Text style={transactionRowStyles.dateText}>{transaction.date}</Text>
            <View style={[transactionRowStyles.statusBadge, { backgroundColor: BRAND_SUCCESS + '15' }]}>
                <Text style={[transactionRowStyles.statusText, { color: BRAND_SUCCESS }]}>{transaction.status}</Text>
            </View>
        </View>
    </View>
);

export default function DisbursementLogScreen({ navigation }) {
    
    const totalDisbursed = MOCK_DISBURSEMENTS.reduce((sum, txn) => sum + txn.amount, 0);

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                     <MaterialIcons name="arrow-back" size={24} color={TEXT_COLOR} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Disbursement Log</Text>
                <MaterialIcons name="filter-list" size={24} color={BRAND_PRIMARY} /> 
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryLabel}>Total Funds Received to Date</Text>
                    <Text style={styles.summaryAmount}>₹ {totalDisbursed.toLocaleString('en-IN')}</Text>
                    <Text style={styles.summarySubtext}>Funds deposited directly to the registered account.</Text>
                </View>

                {/* Transaction List */}
                <Text style={styles.sectionTitle}>Transaction History ({MOCK_DISBURSEMENTS.length})</Text>
                <View style={styles.logContainer}>
                    {MOCK_DISBURSEMENTS.map(txn => (
                        <TransactionRow key={txn.id} transaction={txn} />
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: LIGHT_GREY 
    },
    scrollContent: {
        paddingBottom: 20,
    },
    // --- Header ---
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        paddingRight: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_COLOR,
        flex: 1, // Allows title to take up most space
    },
    // --- Summary Card ---
    summaryCard: {
        backgroundColor: BRAND_PRIMARY,
        margin: 20,
        padding: 25,
        borderRadius: 15,
        shadowColor: BRAND_PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    summaryLabel: {
        fontSize: 14,
        color: FONT_COLOR,
        opacity: 0.8,
        marginBottom: 5,
    },
    summaryAmount: {
        fontSize: 32,
        fontWeight: '900',
        color: FONT_COLOR,
        marginBottom: 5,
    },
    summarySubtext: {
        fontSize: 12,
        color: FONT_COLOR,
        opacity: 0.9,
    },
    // --- Transaction List ---
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_COLOR,
        marginLeft: 20,
        marginBottom: 10,
    },
    logContainer: {
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        overflow: 'hidden', // Ensures border radius clips rows
    }
});

const transactionRowStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: LIGHT_GREY,
    },
    iconContainer: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: BRAND_SUCCESS + '30',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    detailsContainer: {
        flex: 1,
    },
    amountText: {
        fontSize: 16,
        fontWeight: '700',
        color: TEXT_COLOR,
    },
    typeText: {
        fontSize: 12,
        color: MUTED_COLOR,
        marginTop: 2,
    },
    statusContainer: {
        alignItems: 'flex-end',
    },
    dateText: {
        fontSize: 12,
        color: MUTED_COLOR,
        marginBottom: 4,
    },
    statusBadge: {
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    statusText: {
        fontSize: 11,
        fontWeight: 'bold',
    }
});