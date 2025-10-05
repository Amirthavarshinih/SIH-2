// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function Step3Documents({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Step 3: Upload Documents</Text>
//       <Button title="Next ➜" onPress={() => navigation.navigate('SubmissionScreen')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8E1' },
//   text: { fontSize: 22, marginBottom: 20 },
// });



import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Step3Documents({ navigation }) {
  const [firUploaded, setFirUploaded] = useState(false);
  const [communityUploaded, setCommunityUploaded] = useState(false);

  const uploadFIR = () => {
    setTimeout(() => setFirUploaded(true), 2000); // mock upload + verification
  };

  const uploadCommunity = () => {
    setTimeout(() => setCommunityUploaded(true), 2000); // mock upload + verification
  };

  const reviewAndSubmit = () => {
    if (firUploaded && communityUploaded) {
      navigation.navigate("SubmissionScreen");
    } else {
      alert("Please upload both documents.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 3 of 3: Document Upload</Text>

      <Button
        title={firUploaded ? "FIR Verified ✅" : "Upload FIR Copy"}
        onPress={uploadFIR}
      />
      <Button
        title={communityUploaded ? "Certificate Verified ✅" : "Upload Community Certificate"}
        onPress={uploadCommunity}
      />

      <Button title="Review & Submit Application" onPress={reviewAndSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", gap: 15 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
