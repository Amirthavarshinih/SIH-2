import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  // Automatically navigate to Aadhaar after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Aadhaar'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌉 NyayaSetu</Text>
      <Text style={styles.subtitle}>Connecting Justice Seamlessly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#007BFF', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#fff', marginTop: 8 },
});
