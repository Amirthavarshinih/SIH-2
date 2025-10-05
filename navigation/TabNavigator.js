// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// import DashboardScreen from "../screens/DashboardScreen";
// import ApplicationsScreen from "../screens/ApplicationsScreen";
// import HelpScreen from "../screens/HelpScreen";
// import ProfileScreen from "../screens/ProfileScreen";

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: "#fff",
//           height: 70,
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           position: "absolute",
//           elevation: 10,
//         },
//         tabBarIcon: ({ color, size, focused }) => {
//           let iconName;

//           if (route.name === "Home") iconName = focused ? "home" : "home-outline";
//           else if (route.name === "Applications") iconName = focused ? "document-text" : "document-text-outline";
//           else if (route.name === "Help") iconName = focused ? "help-circle" : "help-circle-outline";
//           else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";

//           return <Ionicons name={iconName} size={24} color={color} />;
//         },
//         tabBarActiveTintColor: "#007AFF",
//         tabBarInactiveTintColor: "#8e8e93",
//       })}
//     >
//       <Tab.Screen name="Home" component={DashboardScreen} />
//       <Tab.Screen name="Applications" component={ApplicationsScreen} />
//       <Tab.Screen name="Help" component={HelpScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }
