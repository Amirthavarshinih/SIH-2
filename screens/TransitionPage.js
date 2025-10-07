// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function TransitionPage({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Transitioning to Online Resolution</Text>
//       <Button title="Proceed ➜" onPress={() => navigation.navigate('PushResolution')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 22, marginBottom: 20 },
// });


// import React, { useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function TransitionPage({ navigation }) {
//   useEffect(() => {
//     setTimeout(() => navigation.navigate("PushResolution"), 2000); // 2-second transition
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Later that day...</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" },
//   text: { fontSize: 24, fontWeight: "bold" },
// });


import React, { useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  ActivityIndicator, // Import the activity indicator
  SafeAreaView
} from "react-native";

const BRAND_PRIMARY = '#007BFF'; 
const FONT_COLOR = '#FFFFFF';

export default function TransitionPage({ navigation }) {
    
    // Auto-navigate after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to the Notification/Resolution screen
            navigation.navigate("PushResolution"); 
        }, 2000); 

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigation]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ActivityIndicator size="large" color={FONT_COLOR} style={styles.indicator} />
                <Text style={styles.text}>Later that day...</Text>
                <Text style={styles.subtext}>A new notification arrives.</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: BRAND_PRIMARY, // Use the primary brand color for impact
    },
    container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
    },
    indicator: {
        marginBottom: 20,
        transform: [{ scale: 1.5 }], // Make the indicator slightly larger
    },
    text: { 
        fontSize: 30, 
        fontWeight: "bold",
        color: FONT_COLOR,
        marginBottom: 8,
    },
    subtext: {
        fontSize: 16,
        color: FONT_COLOR,
        opacity: 0.8,
    }
});