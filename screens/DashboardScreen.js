// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function DashboardScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome, Priya</Text>
//       <Text>Last Login: 03-Oct-2025, 04:22 PM</Text>
//       <View style={styles.banner}>
//         <Text style={styles.bannerText}>Apply for Financial Relief</Text>
//         <Text>Access benefits under the PCR & PoA Acts</Text>
//         <Button title="Start New Application" onPress={() => navigation.navigate("SchemeSelection")} />
//       </View>

//       <View style={styles.services}>
//         <Text>Services Grid (9 icons)</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
//   banner: { backgroundColor: "#43BCCD", padding: 15, borderRadius: 10, marginVertical: 20 },
//   bannerText: { fontSize: 18, fontWeight: "bold", color: "white" },
//   services: { marginTop: 30 },
// });





// import React from "react";
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; // Assuming you have vector icons available (e.g., Expo)

// // --- Design Constants ---
// const BRAND_PRIMARY = '#007BFF'; // The main blue
// const BRAND_ACCENT = '#20A4F3';  // Lighter blue for gradients/accents
// const LIGHT_GREY = '#F5F5F5';
// const TEXT_COLOR = '#333333';
// const FONT_COLOR = '#FFFFFF';

// // Placeholder data for the 9 services
// const servicesData = [
//     { name: "My Applications", icon: "file-signature", target: "ApplicationList" },
//     { name: "Track Status", icon: "search", target: "Tracking" },
//     { name: "Service Portal", icon: "life-ring", target: "ServicePortal" },
//     { name: "Disbursement Log", icon: "rupee-sign", target: "DisbursementLog" },
//     { name: "Legal Aid", icon: "gavel", target: "LegalAid" },
//     { name: "Contact Nodal Officer", icon: "headset", target: "Contact" },
//     { name: "Grievance Redressal", icon: "exclamation-triangle", target: "Grievance" },
//     { name: "Forms & Docs", icon: "folder-open", target: "Forms" },
//     { name: "FAQs", icon: "question-circle", target: "FAQs" },
// ];

// // Helper Component for Service Grid Item
// const ServiceItem = ({ name, icon, onPress }) => (
//     <TouchableOpacity style={gridStyles.item} onPress={onPress}>
//         {/* Using FontAwesome5 for a consistent icon set */}
//         <FontAwesome5 name={icon} size={30} color={BRAND_PRIMARY} />
//         <Text style={gridStyles.itemName}>{name}</Text>
//     </TouchableOpacity>
// );

// export default function DashboardScreen({ navigation }) {
//     // Hardcoded details for the prototype video
//     const userName = "Priya";
//     const lastLogin = "03-Oct-2025, 04:22 PM";

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ScrollView contentContainerStyle={styles.scrollContent}>
                
//                 {/* 1. PROFESSIONAL HEADER */}
//                 <View style={styles.header}>
//                     <View>
//                         <Text style={styles.welcomeText}>Welcome, {userName}</Text>
//                         <Text style={styles.loginText}>Last Login: {lastLogin}</Text>
//                     </View>
//                     {/* Bell Icon for Notifications */}
//                     <MaterialIcons name="notifications-none" size={30} color={TEXT_COLOR} />
//                 </View>

//                 {/* 2. PRIMARY APPLICATION BANNER */}
//                 <View style={styles.banner}>
//                     <View style={styles.bannerTextContent}>
//                         <Text style={styles.bannerTitle}>Apply for Financial Relief</Text>
//                         <Text style={styles.bannerSubtitle}>
//                             Access benefits under the PCR & PoA Acts.
//                         </Text>
//                     </View>
//                     <TouchableOpacity 
//                         style={styles.bannerButton} 
//                         onPress={() => navigation.navigate("SchemeSelection")}
//                         activeOpacity={0.8}
//                     >
//                         <Text style={styles.bannerButtonText}>Start New Application</Text>
//                         <MaterialIcons name="arrow-forward" size={18} color={FONT_COLOR} style={{ marginLeft: 5 }}/>
//                     </TouchableOpacity>
//                 </View>

//                 {/* 3. SERVICES GRID */}
//                 <Text style={styles.sectionTitle}>NyayaSetu Services</Text>
//                 <View style={gridStyles.gridContainer}>
//                     {servicesData.map((service, index) => (
//                         <ServiceItem 
//                             key={index}
//                             name={service.name}
//                             icon={service.icon}
//                             onPress={() => console.log(`Navigating to ${service.target}`)}
//                             // In a real app, replace console.log with navigation.navigate(service.target)
//                         />
//                     ))}
//                 </View>

//                 {/* 4. FOOTER / BRANDING (Optional, for completeness) */}
//                  <View style={styles.footer}>
//                     <Text style={styles.footerText}>Ministry of Social Justice & Empowerment, Govt. of India</Text>
//                  </View>

//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: LIGHT_GREY, // Light gray background for a clean look
//     },
//     scrollContent: {
//         paddingBottom: 40,
//     },
//     // --- 1. HEADER STYLES ---
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: FONT_COLOR, // White header bar
//         borderBottomWidth: 1,
//         borderBottomColor: '#E0E0E0',
//     },
//     welcomeText: {
//         fontSize: 24,
//         fontWeight: "700",
//         color: BRAND_PRIMARY, // Primary blue title
//     },
//     loginText: {
//         fontSize: 12,
//         color: '#666',
//         marginTop: 4,
//     },
//     // --- 2. BANNER STYLES ---
//     banner: {
//         backgroundColor: BRAND_PRIMARY, // Solid blue background
//         margin: 20,
//         padding: 20,
//         borderRadius: 15,
//         overflow: 'hidden',
//         // Subtle shadow for depth
//         shadowColor: BRAND_PRIMARY,
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 8,
//     },
//     bannerTextContent: {
//         marginBottom: 15,
//     },
//     bannerTitle: {
//         fontSize: 22,
//         fontWeight: "800",
//         color: FONT_COLOR,
//         marginBottom: 5,
//     },
//     bannerSubtitle: {
//         fontSize: 14,
//         color: FONT_COLOR,
//         opacity: 0.9,
//     },
//     bannerButton: {
//         flexDirection: 'row',
//         backgroundColor: BRAND_ACCENT, // Lighter blue button for contrast
//         paddingVertical: 12,
//         paddingHorizontal: 20,
//         borderRadius: 10,
//         alignSelf: 'flex-start',
//         alignItems: 'center',
//     },
//     bannerButtonText: {
//         fontSize: 16,
//         fontWeight: '700',
//         color: FONT_COLOR,
//     },
//     // --- 3. SERVICES GRID STYLES ---
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: TEXT_COLOR,
//         marginLeft: 20,
//         marginBottom: 15,
//         marginTop: 5,
//     },
//     footer: {
//         padding: 20,
//         alignItems: 'center',
//     },
//     footerText: {
//         fontSize: 12,
//         color: '#888',
//         textAlign: 'center',
//     }
// });

// const gridStyles = StyleSheet.create({
//     gridContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         paddingHorizontal: 10,
//     },
//     item: {
//         width: '30%', // Allows for 3 items per row with some padding
//         alignItems: 'center',
//         backgroundColor: FONT_COLOR,
//         paddingVertical: 20,
//         margin: 5,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.05,
//         shadowRadius: 2,
//         elevation: 2,
//     },
//     itemName: {
//         fontSize: 12,
//         fontWeight: '600',
//         color: TEXT_COLOR,
//         marginTop: 8,
//         textAlign: 'center',
//     },
// });


// import React from "react";
// import { 
//     View, 
//     Text, 
//     TouchableOpacity, 
//     StyleSheet, 
//     SafeAreaView,
//     ScrollView,
//     Alert // Import Alert for clean user feedback
// } from "react-native";
// import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 

// // --- Design Constants ---
// const BRAND_PRIMARY = '#007BFF'; 
// const BRAND_ACCENT = '#20A4F3'; 
// const LIGHT_GREY = '#F5F5F5';
// const TEXT_COLOR = '#333333';
// const FONT_COLOR = '#FFFFFF';

// // Placeholder data for the services
// const servicesData = [
//     // NOTE: Targets that exist in your current setup will navigate.
//     { name: "My Applications", icon: "file-signature", target: "ApplicationsScreen" }, 
//     { name: "Track Status", icon: "search", target: "TrackingScreen" },
//     { name: "Service Portal", icon: "life-ring", target: "ServicePortalScreen" },
//     { name: "Disbursement Log", icon: "rupee-sign", target: "DisbursementLogScreen" },
//     { name: "Legal Aid", icon: "gavel", target: "LegalAidScreen" },
//     { name: "Contact Nodal Officer", icon: "headset", target: "ContactScreen" },
//     { name: "Grievance Redressal", icon: "exclamation-triangle", target: "GrievanceScreen" },
//     { name: "Forms & Docs", icon: "folder-open", target: "FormsScreen" },
//     { name: "FAQs", icon: "question-circle", target: "FAQScreen" },
//     { name: "My Profile", icon: "user-circle", target: "ProfileScreen" }, 
// ];

// // List of screens that are currently implemented and safe to navigate to.
// const IMPLEMENTED_SCREENS = ["ApplicationsScreen", "SchemeSelection"];

// // Helper Component for Service Grid Item
// const ServiceItem = ({ name, icon, navigation, target }) => {
//     const handlePress = () => {
//         if (IMPLEMENTED_SCREENS.includes(target)) {
//             // SAFE: Navigate to a screen we know exists.
//             navigation.navigate(target);
//         } else {
//             // UNSAFE: Show alert for screens you haven't created yet.
//             Alert.alert(
//                 "Coming Soon", 
//                 `${name} feature is under development. Thank you for your patience!`, 
//                 [{ text: "OK" }]
//             );
//         }
//     };

//     return (
//         <TouchableOpacity 
//             style={gridStyles.item} 
//             onPress={handlePress} 
//             activeOpacity={0.7}
//         >
//             <FontAwesome5 name={icon} size={30} color={BRAND_PRIMARY} />
//             <Text style={gridStyles.itemName}>{name}</Text>
//         </TouchableOpacity>
//     );
// };

// export default function DashboardScreen({ navigation }) {
//     const userName = "Priya";
//     const lastLogin = "03-Oct-2025, 04:22 PM";

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ScrollView contentContainerStyle={styles.scrollContent}>
                
//                 {/* 1. PROFESSIONAL HEADER */}
//                 <View style={styles.header}>
//                     <View>
//                         <Text style={styles.welcomeText}>Welcome, {userName}</Text>
//                         <Text style={styles.loginText}>Last Login: {lastLogin}</Text>
//                     </View>
//                     <TouchableOpacity onPress={() => Alert.alert("Notifications", "You have no new notifications.")}> 
//                         <MaterialIcons name="notifications-none" size={30} color={TEXT_COLOR} />
//                     </TouchableOpacity>
//                 </View>

//                 {/* 2. PRIMARY APPLICATION BANNER */}
//                 <View style={styles.banner}>
//                     <View style={styles.bannerTextContent}>
//                         <Text style={styles.bannerTitle}>Apply for Financial Relief</Text>
//                         <Text style={styles.bannerSubtitle}>
//                             Access benefits under the PCR & PoA Acts.
//                         </Text>
//                     </View>
//                     <TouchableOpacity 
//                         style={styles.bannerButton} 
//                         // This navigates to the SchemeSelection screen (which is safe)
//                         onPress={() => navigation.navigate("SchemeSelection")} 
//                         activeOpacity={0.8}
//                     >
//                         <Text style={styles.bannerButtonText}>Start New Application</Text>
//                         <MaterialIcons name="arrow-forward" size={18} color={FONT_COLOR} style={{ marginLeft: 5 }}/>
//                     </TouchableOpacity>
//                 </View>

//                 {/* 3. SERVICES GRID */}
//                 <Text style={styles.sectionTitle}>NyayaSetu Services</Text>
//                 <View style={gridStyles.gridContainer}>
//                     {servicesData.map((service, index) => (
//                         <ServiceItem 
//                             key={index}
//                             name={service.name}
//                             icon={service.icon}
//                             navigation={navigation} 
//                             target={service.target}
//                         />
//                     ))}
//                 </View>

//                 {/* 4. FOOTER */}
//                 <View style={styles.footer}>
//                     <Text style={styles.footerText}>Ministry of Social Justice & Empowerment, Govt. of India</Text>
//                 </View>

//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: LIGHT_GREY, 
//     },
//     scrollContent: {
//         paddingBottom: 40,
//     },
//     // --- 1. HEADER STYLES ---
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: FONT_COLOR, 
//         borderBottomWidth: 1,
//         borderBottomColor: '#E0E0E0',
//     },
//     welcomeText: {
//         fontSize: 24,
//         fontWeight: "700",
//         color: BRAND_PRIMARY, 
//     },
//     loginText: {
//         fontSize: 12,
//         color: '#666',
//         marginTop: 4,
//     },
//     // --- 2. BANNER STYLES ---
//     banner: {
//         backgroundColor: BRAND_PRIMARY, 
//         margin: 20,
//         padding: 20,
//         borderRadius: 15,
//         overflow: 'hidden',
//         shadowColor: BRAND_PRIMARY,
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 8,
//     },
//     bannerTextContent: {
//         marginBottom: 15,
//     },
//     bannerTitle: {
//         fontSize: 22,
//         fontWeight: "800",
//         color: FONT_COLOR,
//         marginBottom: 5,
//     },
//     bannerSubtitle: {
//         fontSize: 14,
//         color: FONT_COLOR,
//         opacity: 0.9,
//     },
//     bannerButton: {
//         flexDirection: 'row',
//         backgroundColor: BRAND_ACCENT, 
//         paddingVertical: 12,
//         paddingHorizontal: 20,
//         borderRadius: 10,
//         alignSelf: 'flex-start',
//         alignItems: 'center',
//     },
//     bannerButtonText: {
//         fontSize: 16,
//         fontWeight: '700',
//         color: FONT_COLOR,
//     },
//     // --- 3. SERVICES GRID STYLES ---
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: TEXT_COLOR,
//         marginLeft: 20,
//         marginBottom: 15,
//         marginTop: 5,
//     },
//     footer: {
//         padding: 20,
//         alignItems: 'center',
//     },
//     footerText: {
//         fontSize: 12,
//         color: '#888',
//         textAlign: 'center',
//     }
// });

// const gridStyles = StyleSheet.create({
//     gridContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         paddingHorizontal: 10,
//     },
//     item: {
//         width: '30%', 
//         alignItems: 'center',
//         backgroundColor: FONT_COLOR,
//         paddingVertical: 20,
//         margin: 5,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.05,
//         shadowRadius: 2,
//         elevation: 2,
//     },
//     itemName: {
//         fontSize: 12,
//         fontWeight: '600',
//         color: TEXT_COLOR,
//         marginTop: 8,
//         textAlign: 'center',
//     },
// });



import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    SafeAreaView,
    ScrollView,
    Alert // Import Alert for clean user feedback
} from "react-native";
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; 
const BRAND_ACCENT = '#20A4F3'; 
const LIGHT_GREY = '#F5F5F5';
const TEXT_COLOR = '#333333';
const FONT_COLOR = '#FFFFFF';

// Placeholder data for the services
const servicesData = [
    { name: "My Applications", icon: "file-signature", target: "ApplicationsScreen" }, 
    { name: "Track Status", icon: "search", target: "TrackingScreen" },
    { name: "Service Portal", icon: "life-ring", target: "ServicePortalScreen" },
    { name: "Disbursement Log", icon: "rupee-sign", target: "DisbursementLogScreen" },
    { name: "Legal Aid", icon: "gavel", target: "LegalAidScreen" },
    { name: "Contact Nodal Officer", icon: "headset", target: "ContactScreen" },
    { name: "Grievance Redressal", icon: "exclamation-triangle", target: "GrievanceScreen" },
    { name: "Forms & Docs", icon: "folder-open", target: "FormsScreen" },
    { name: "FAQs", icon: "question-circle", target: "FAQScreen" },
    { name: "My Profile", icon: "user-circle", target: "ProfileScreen" }, 
];

// ***************************************************************
// *** KEY CHANGE: All targets are now assumed implemented/safe ***
// ***************************************************************
const IMPLEMENTED_SCREENS = [
    "SchemeSelection", // From the banner button
    "ApplicationsScreen", 
    "TrackingScreen",
    "ServicePortalScreen",
    "DisbursementLogScreen",
    "LegalAidScreen",
    "ContactScreen",
    "GrievanceScreen",
    "FormsScreen",
    "FAQScreen",
    "ProfileScreen",
    "NotificationScreen" // For the bell icon
];

// Helper Component for Service Grid Item
const ServiceItem = ({ name, icon, navigation, target }) => {
    const handlePress = () => {
        if (IMPLEMENTED_SCREENS.includes(target)) {
            // SAFE: Navigate to a screen we know exists.
            navigation.navigate(target);
        } else {
            // This alert should ideally never trigger now, but remains as a safety net.
            Alert.alert(
                "Coming Soon (Safety Fallback)", 
                `${name} feature is under development. If this alert appears, please ensure the screen is defined in MainNavigator.js!`, 
                [{ text: "OK" }]
            );
        }
    };

    return (
        <TouchableOpacity 
            style={gridStyles.item} 
            onPress={handlePress} 
            activeOpacity={0.7}
        >
            <FontAwesome5 name={icon} size={30} color={BRAND_PRIMARY} />
            <Text style={gridStyles.itemName}>{name}</Text>
        </TouchableOpacity>
    );
};

export default function DashboardScreen({ navigation }) {
    const userName = "Priya";
    const lastLogin = "03-Oct-2025, 04:22 PM";
    
    // Handler for the Notification Bell
    const handleNotificationPress = () => {
        navigation.navigate("NotificationScreen"); 
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* 1. PROFESSIONAL HEADER */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Welcome, {userName}</Text>
                        <Text style={styles.loginText}>Last Login: {lastLogin}</Text>
                    </View>
                    <TouchableOpacity onPress={handleNotificationPress}> 
                        <MaterialIcons name="notifications-none" size={30} color={TEXT_COLOR} />
                    </TouchableOpacity>
                </View>

                {/* 2. PRIMARY APPLICATION BANNER */}
                <View style={styles.banner}>
                    <View style={styles.bannerTextContent}>
                        <Text style={styles.bannerTitle}>Apply for Financial Relief</Text>
                        <Text style={styles.bannerSubtitle}>
                            Access benefits under the PCR & PoA Acts.
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.bannerButton} 
                        // This navigates to the SchemeSelection screen (which is safe)
                        onPress={() => navigation.navigate("SchemeSelection")} 
                        activeOpacity={0.8}
                    >
                        <Text style={styles.bannerButtonText}>Start New Application</Text>
                        <MaterialIcons name="arrow-forward" size={18} color={FONT_COLOR} style={{ marginLeft: 5 }}/>
                    </TouchableOpacity>
                </View>

                {/* 3. SERVICES GRID */}
                <Text style={styles.sectionTitle}>NyayaSetu Services</Text>
                <View style={gridStyles.gridContainer}>
                    {servicesData.map((service, index) => (
                        <ServiceItem 
                            key={index}
                            name={service.name}
                            icon={service.icon}
                            navigation={navigation} 
                            target={service.target}
                        />
                    ))}
                </View>

                {/* 4. FOOTER */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Ministry of Social Justice & Empowerment, Govt. of India</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: LIGHT_GREY, 
    },
    scrollContent: {
        paddingBottom: 40,
    },
    // --- 1. HEADER STYLES ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: FONT_COLOR, 
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "700",
        color: BRAND_PRIMARY, 
    },
    loginText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    // --- 2. BANNER STYLES ---
    banner: {
        backgroundColor: BRAND_PRIMARY, 
        margin: 20,
        padding: 20,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: BRAND_PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    bannerTextContent: {
        marginBottom: 15,
    },
    bannerTitle: {
        fontSize: 22,
        fontWeight: "800",
        color: FONT_COLOR,
        marginBottom: 5,
    },
    bannerSubtitle: {
        fontSize: 14,
        color: FONT_COLOR,
        opacity: 0.9,
    },
    bannerButton: {
        flexDirection: 'row',
        backgroundColor: BRAND_ACCENT, 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: 'flex-start',
        alignItems: 'center',
    },
    bannerButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: FONT_COLOR,
    },
    // --- 3. SERVICES GRID STYLES ---
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_COLOR,
        marginLeft: 20,
        marginBottom: 15,
        marginTop: 5,
    },
    footer: {
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
    }
});

const gridStyles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    item: {
        width: '30%', 
        alignItems: 'center',
        backgroundColor: FONT_COLOR,
        paddingVertical: 20,
        margin: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    itemName: {
        fontSize: 12,
        fontWeight: '600',
        color: TEXT_COLOR,
        marginTop: 8,
        textAlign: 'center',
    },
});