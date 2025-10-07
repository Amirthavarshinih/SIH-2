// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function SchemeSelection({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Select Scheme</Text>
//       <Button title="Next ➜" onPress={() => navigation.navigate('Step1Beneficiary')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function SchemeSelection({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Scheme</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Atrocity Relief (SC/ST PoA)" onPress={() => navigation.navigate("Step1Beneficiary")} />
//         <Button title="Inter-Caste Marriage Incentive" onPress={() => alert("Not implemented")} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
//   buttonContainer: { gap: 20 },
// });


import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

// --- Design Constants ---
const BRAND_PRIMARY = '#007BFF'; 
const TEXT_COLOR = '#333333';
const LIGHT_GREY = '#F5F5F5';
const FONT_COLOR = '#FFFFFF';
const ACCENT_COLOR = '#43BCCD'; 

// --- Helper Component: Scheme Card ---
const SchemeCard = ({ title, subtitle, description, icon, onPress, isDisabled }) => (
    <TouchableOpacity
        style={[
            cardStyles.card, 
            isDisabled && cardStyles.disabledCard
        ]}
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.7}
    >
        <View style={cardStyles.iconWrapper}>
            <FontAwesome5 name={icon} size={30} color={isDisabled ? DISABLED_COLOR : BRAND_PRIMARY} />
        </View>
        
        <View style={cardStyles.textContainer}>
            <Text style={[cardStyles.title, isDisabled && cardStyles.disabledText]}>{title}</Text>
            <Text style={[cardStyles.subtitle, isDisabled && cardStyles.disabledText]}>{subtitle}</Text>
            <Text style={cardStyles.description}>{description}</Text>
        </View>
        
        <MaterialIcons 
            name={isDisabled ? "lock" : "arrow-forward"} 
            size={24} 
            color={isDisabled ? DISABLED_COLOR : BRAND_PRIMARY} 
        />
    </TouchableOpacity>
);

const DISABLED_COLOR = '#A0A0A0';

export default function SchemeSelection({ navigation }) {
    
    // Handler for the implemented scheme
    const handleAtrocityRelief = () => {
        navigation.navigate("Step1Beneficiary");
    };

    // Handler for the unimplemented scheme
    const handleUnimplemented = () => {
        alert("This scheme application portal is coming soon.");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.title}>Start New Application</Text>
                <Text style={styles.subtitle}>Please select the scheme you wish to apply for.</Text>
            </View>

            <View style={styles.container}>
                
                {/* 1. Atrocity Relief Scheme Card (Active) */}
                <SchemeCard
                    title="Atrocity Relief Fund"
                    subtitle="SC/ST Prevention of Atrocities (PoA) Act"
                    description="Financial and legal support for victims of caste-based atrocities."
                    icon="hand-holding-usd"
                    onPress={handleAtrocityRelief}
                    isDisabled={false}
                />

                {/* 2. Inter-Caste Marriage Incentive (Inactive) */}
                <SchemeCard
                    title="Inter-Caste Marriage Incentive"
                    subtitle="Dr. Ambedkar Scheme for Social Integration"
                    description="Incentive for registered marriages to promote social harmony."
                    icon="heart"
                    onPress={handleUnimplemented}
                    isDisabled={true}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: LIGHT_GREY 
    },
    header: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
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
    container: { 
        flex: 1, 
        padding: 20,
    },
});

const cardStyles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: FONT_COLOR,
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: BRAND_PRIMARY,
    },
    disabledCard: {
        opacity: 0.7,
        borderLeftColor: DISABLED_COLOR,
    },
    iconWrapper: {
        width: 45,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
        marginRight: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: BRAND_PRIMARY,
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: TEXT_COLOR,
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        color: DISABLED_COLOR,
    },
    disabledText: {
        color: DISABLED_COLOR,
    }
});