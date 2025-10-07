// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function SplashScreen({ navigation }) {
//   // Automatically navigate to Aadhaar after 2 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => navigation.replace('Aadhaar'), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🌉 NyayaSetu</Text>
//       <Text style={styles.subtitle}>Connecting Justice Seamlessly</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#007BFF', alignItems: 'center', justifyContent: 'center' },
//   title: { fontSize: 32, color: '#fff', fontWeight: 'bold' },
//   subtitle: { fontSize: 16, color: '#fff', marginTop: 8 },
// });


import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Constants for the retained colors
const BACKGROUND_COLOR = '#007BFF'; // Original Bright Blue
const FONT_COLOR = '#FFFFFF';      // Pure White

export default function SplashScreen({ navigation }) {
  // Automatically navigate to Aadhaar after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Aadhaar'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* 1. Primary Title - Moderate Size, Semi-Bold */}
      <Text style={styles.title}>NyayaSetu</Text>
      
      {/* 2. Thin, Stylish Divider */}
      <View style={styles.divider} /> 

      {/* 3. Subtitle - Clear and Elegant */}
      <Text style={styles.subtitle}>Connecting Justice Seamlessly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR, // Retained original blue
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    // Moderated size: large but not overwhelming
    fontSize: 42, 
    color: FONT_COLOR, 
    // Semi-bold for professionalism
    fontWeight: '600', 
    letterSpacing: 1, // Subtle spacing
    textAlign: 'center',
  },
  divider: {
    // A subtle, thin white line to separate the title from the subtitle
    width: 60, // Short length centers the focus
    height: 3, 
    backgroundColor: FONT_COLOR,
    opacity: 0.8,
    marginVertical: 15, // Space above and below the line
  },
  subtitle: {
    // Elegant size and light weight
    fontSize: 22, 
    color: FONT_COLOR, 
    fontWeight: '300', // Light weight for a sleek look
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});