// import React from "react";
// import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// export default function ContactScreen() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Contact Nodal Officer</Text>
//         <Text style={styles.text}>Direct calling, email, and appointment booking options for the assigned Nodal Officer will be listed here.</Text>
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



import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    TouchableOpacity,
    Linking, // Import Linking for external actions (call/email)
    ScrollView 
} from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; 
const LIGHT_GREY = '#F5F5F5';
const TEXT_COLOR = '#333333';
const MUTED_COLOR = '#888';
const FONT_COLOR = '#FFFFFF';

// --- Mock Officer Data (Change this based on the user's application) ---
const nodalOfficer = {
    name: "Mr. R. Kumaravel",
    title: "District Nodal Officer",
    district: "Tiruvallur",
    phone: "+919876543210", 
    email: "nodal.tiruvallur@nyayasetu.gov.in",
    officeHours: "Mon - Fri, 10:00 AM to 5:00 PM"
};

// Helper function to open call/email apps
const openLink = (type, value) => {
    let url;
    if (type === 'phone') {
        url = `tel:${value}`;
    } else if (type === 'email') {
        url = `mailto:${value}`;
    }
    
    // Safety check before opening link
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            alert(`Cannot handle ${type} request.`);
        }
    });
};

// Helper Component for Contact Row
const ContactRow = ({ iconName, label, value, type, action }) => (
    <View style={contactRowStyles.row}>
        <MaterialIcons name={iconName} size={24} color={BRAND_PRIMARY} style={contactRowStyles.icon} />
        <View style={contactRowStyles.textContainer}>
            <Text style={contactRowStyles.label}>{label}</Text>
            <Text style={contactRowStyles.value}>{value}</Text>
        </View>
        {action && (
            <TouchableOpacity 
                style={contactRowStyles.actionButton} 
                onPress={() => openLink(type, value)}
                activeOpacity={0.8}
            >
                <MaterialIcons name={action} size={20} color={FONT_COLOR} />
            </TouchableOpacity>
        )}
    </View>
);

export default function ContactScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Header with Back Button */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                         <MaterialIcons name="arrow-back" size={24} color={TEXT_COLOR} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Nodal Officer Contact</Text>
                </View>

                {/* Officer Card */}
                <View style={styles.officerCard}>
                    <FontAwesome5 name="user-tie" size={40} color={BRAND_PRIMARY} style={{ marginBottom: 10 }}/>
                    <Text style={styles.officerName}>{nodalOfficer.name}</Text>
                    <Text style={styles.officerTitle}>{nodalOfficer.title}</Text>
                    <Text style={styles.officerDistrict}>District: {nodalOfficer.district}</Text>
                </View>

                {/* Contact Actions */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Get in Touch</Text>

                    <ContactRow 
                        iconName="phone" 
                        label="Phone Number" 
                        value={nodalOfficer.phone}
                        type="phone"
                        action="call"
                    />

                    <ContactRow 
                        iconName="email" 
                        label="Email Address" 
                        value={nodalOfficer.email}
                        type="email"
                        action="mail"
                    />

                    <View style={styles.infoRow}>
                        <MaterialIcons name="access-time" size={24} color={MUTED_COLOR} style={contactRowStyles.icon} />
                        <View style={contactRowStyles.textContainer}>
                            <Text style={contactRowStyles.label}>Office Hours</Text>
                            <Text style={contactRowStyles.value}>{nodalOfficer.officeHours}</Text>
                        </View>
                    </View>
                </View>

                {/* Guidance Text */}
                <Text style={styles.guidanceText}>
                    Please respect office hours for phone calls. For legal documentation or formal inquiries, email is preferred.
                </Text>

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
    },
    // --- Officer Card ---
    officerCard: {
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    officerName: {
        fontSize: 22,
        fontWeight: '900',
        color: TEXT_COLOR,
        marginBottom: 5,
    },
    officerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: BRAND_PRIMARY,
        marginBottom: 5,
    },
    officerDistrict: {
        fontSize: 14,
        color: MUTED_COLOR,
    },
    // --- Contact Section ---
    sectionContainer: {
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_COLOR,
        marginBottom: 15,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    guidanceText: {
        fontSize: 12,
        color: MUTED_COLOR,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 30,
    }
});

const contactRowStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: LIGHT_GREY,
    },
    icon: {
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: MUTED_COLOR,
        fontWeight: '600',
    },
    value: {
        fontSize: 16,
        color: TEXT_COLOR,
        fontWeight: '500',
        marginTop: 2,
    },
    actionButton: {
        backgroundColor: BRAND_PRIMARY,
        padding: 10,
        borderRadius: 8,
        marginLeft: 10,
    }
});