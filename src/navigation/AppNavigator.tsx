import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { RootState } from "../redux/store";
import { navigationRef } from "./NavigationService";
import Colors from "../utils/Colors/Colors";
import Fonts from "../utils/Fonts/Fonts";
import { SH, SF } from "../utils/Responsiveness/Dimensions";

/* ----------- Screens ----------- */
import LoadingScreen from "../screens/StackScreens/Loading/LoadingScreen";
import Login from "../screens/StackScreens/AuthScreens/Login/Login";
import Signup from "../screens/StackScreens/AuthScreens/Signup/Signup";

import HomeScreen from "../screens/Tabs/HomeScreen/HomeScreen";
import Subscriptions from "../screens/Tabs/Subscriptions/Subscriptions";
import HistoryScreen from "../screens/Tabs/HistoryScreen/HistoryScreen";
import ProfileScreen from "../screens/Tabs/ProfileScreen/ProfileScreen";
import SplashScreen from "../screens/StackScreens/SplashScreen/SplashScreen";
import ForgotPassword from "../screens/StackScreens/AuthScreens/ForgotPassword/ForgotPassword";

/* ----------- Types ----------- */
export type RootStackParamList = {
    Loading: undefined;
    SplashScreen: undefined;
    Login: undefined;
    Signup: undefined;
    MainTabs: undefined;
    ForgotPassword:undefined;
};

export type RootTabParamList = {
    Home: undefined;
    Subscriptions: undefined;
    History: undefined;
    Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const RootStack = createNativeStackNavigator();

/* ----------- Tabs ----------- */
const MainTabs = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: "#3c3c3c",
                tabBarStyle: {
                    height: SH(55) + insets.bottom,
                    backgroundColor: "#fff",
                },
                tabBarLabelStyle: {
                    fontSize: SF(10),
                    fontFamily: Fonts.Inter_Medium,
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName = "circle";

                    if (route.name === "Home")
                        iconName = focused ? "home" : "home-outline";
                    if (route.name === "Subscriptions")
                        iconName = focused ? "playlist-check" : "playlist-check";
                    if (route.name === "History")
                        iconName = "history";
                    if (route.name === "Profile")
                        iconName = focused ? "account" : "account-outline";

                    return <Icon name={iconName} size={22} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
                name="Subscriptions"
                component={Subscriptions}
            />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const AppStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
       
    </Stack.Navigator>
);
const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
);

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>

        {/* Auth Flow */}
        <RootStack.Screen name="Auth" component={AuthStack} />

        {/* App Flow */}
        <RootStack.Screen name="App" component={AppStack} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;


// const RootNavigator = () => {
//     const { token, loading } = useSelector((state: RootState) => state.auth);

//     return (
//         <NavigationContainer ref={navigationRef}>
//             {loading ? (
//                 <LoadingScreen />
//             ) : token ? (
//                 <AppStack />
//             ) : (
//                 <AuthStack />
//             )}
//         </NavigationContainer>
//     );
// };

// export default RootNavigator;
