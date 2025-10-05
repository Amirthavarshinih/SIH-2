// 📄 navigation/MainNavigator.js
// This file defines the navigation flow between all 14 app screens.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ✅ Import all screens
import SplashScreen from '../screens/SplashScreen';
import AadhaarScreen from '../screens/AadhaarScreen';
import OTPScreen from '../screens/OTPScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SchemeSelection from '../screens/SchemeSelection';
import Step1Beneficiary from '../screens/Step1Beneficiary';
import Step2CaseDetails from '../screens/Step2CaseDetails';
import Step3Documents from '../screens/Step3Documents';
import SubmissionScreen from '../screens/SubmissionScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CompletedTimeline from '../screens/CompletedTimeline';
import TransitionPage from '../screens/TransitionPage';
import PushResolution from '../screens/PushResolution';
import FinalTracking from '../screens/FinalTracking';

// Create stack navigation instance
const Stack = createNativeStackNavigator();

// Main navigation container
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Define navigation order */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Aadhaar" component={AadhaarScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="SchemeSelection" component={SchemeSelection} />
        <Stack.Screen name="Step1Beneficiary" component={Step1Beneficiary} />
        <Stack.Screen name="Step2CaseDetails" component={Step2CaseDetails} />
        <Stack.Screen name="Step3Documents" component={Step3Documents} />
        <Stack.Screen name="SubmissionScreen" component={SubmissionScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="CompletedTimeline" component={CompletedTimeline} />
        <Stack.Screen name="TransitionPage" component={TransitionPage} />
        <Stack.Screen name="PushResolution" component={PushResolution} />
        <Stack.Screen name="FinalTracking" component={FinalTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
