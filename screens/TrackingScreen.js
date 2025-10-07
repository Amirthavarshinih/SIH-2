// import React from "react";
// import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// export default function TrackingScreen() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Track Status</Text>
//         <Text style={styles.text}>Search bar and status lookup functionality will be built here.</Text>
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
    TextInput,
    TouchableOpacity,
    Keyboard, // Import Keyboard for dismissal
    TouchableWithoutFeedback // Import to dismiss keyboard on tap outside
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; 
const LIGHT_GREY = '#F5F5F5';
const TEXT_COLOR = '#333333';
const MUTED_COLOR = '#888';
const FONT_COLOR = '#FFFFFF';

export default function TrackingScreen({ navigation }) {
    const [applicationId, setApplicationId] = useState('');

    const handleTrack = () => {
        Keyboard.dismiss(); // Dismiss keyboard on button press
        
        // --- PROTOTYPE LOGIC ---
        // In a real app, this would make an API call.
        
        if (applicationId.toUpperCase() === 'NY-POA/TN/2025/10/0123') {
            // Success case: Navigate to the FinalTracking screen (or a result screen)
            navigation.navigate("FinalTracking"); 
        } else if (applicationId.length > 0) {
            // ID format is recognized but not found
            Alert.alert("Application Not Found", "The entered Application ID could not be found. Please check the ID and try again.");
        } else {
            // Empty search
            Alert.alert("Input Required", "Please enter a valid Application ID to track its status.");
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.safeArea}>
                
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                         <MaterialIcons name="arrow-back" size={24} color={BRAND_PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Track Application</Text>
                </View>

                <View style={styles.container}>
                    
                    <MaterialIcons name="search" size={60} color={BRAND_PRIMARY} style={{ marginBottom: 20 }} />

                    <Text style={styles.title}>Enter Tracking ID</Text>
                    <Text style={styles.subtitle}>
                        Please enter the Application ID (e.g., NY-POA/TN/2025/...) to view its current status and timeline.
                    </Text>

                    {/* Search Input Field */}
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="fingerprint" size={24} color={MUTED_COLOR} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="NY-POA/TN/2025/10/0123"
                            placeholderTextColor={MUTED_COLOR}
                            onChangeText={setApplicationId}
                            value={applicationId}
                            keyboardType="default"
                            autoCapitalize="characters"
                            returnKeyType="search"
                            onSubmitEditing={handleTrack}
                        />
                    </View>

                    {/* Track Button */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleTrack}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>Track Status</Text>
                        <MaterialIcons name="arrow-forward" size={20} color={FONT_COLOR} style={{ marginLeft: 10 }}/>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: LIGHT_GREY 
    },
    // --- Header (Replaces boilerplate) ---
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
    // --- Main Content ---
    container: { 
        flex: 1, 
        padding: 20, 
        alignItems: "center", 
        paddingTop: 50,
        backgroundColor: LIGHT_GREY
    },
    title: { 
        fontSize: 24, 
        fontWeight: "bold", 
        marginBottom: 10, 
        color: BRAND_PRIMARY 
    },
    subtitle: {
        fontSize: 14, 
        color: MUTED_COLOR, 
        textAlign: 'center', 
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    // --- Input Field ---
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        width: '100%',
        maxWidth: 350,
        height: 55,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: TEXT_COLOR,
        height: '100%',
    },
    // --- Button ---
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BRAND_PRIMARY,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '100%',
        maxWidth: 350,
        shadowColor: BRAND_PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: FONT_COLOR,
        fontSize: 18,
        fontWeight: '700',
    },
});