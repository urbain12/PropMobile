import React, { useState, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ActivityIndicator,
    View
} from 'react-native';
import Login from '../Screens/Login';
//MANAGER SCREEN
import Manager from '../Screens/Managers/Manager';
import MyProperties from '../Screens/Managers/MyProperties';
import AllTransactions from '../Screens/Managers/AllTransactions';
import Chat from '../Screens/Managers/Chat';
import ManagerProfile from '../Screens/Managers/ManagerProfile';
//TENANT SCREEN
import TenantTransaction from '../Screens/Tenants/TenantTransaction';
import Tenant from '../Screens/Tenants/Tenant';
import TenantProperties from '../Screens/Tenants/TenantProperties';
import TenantChat from '../Screens/Tenants/TenantChat';
import TenantProfile from '../Screens/Tenants/TenantProfile';
import TenantChatroom from '../Screens/Tenants/TenantChatroom';
import PayRent from '../Screens/Tenants/PayRent';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = (props) => {
    // const [isLoading,setIsLoading]=useState(true);

    return (

        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name="Login" component={Login} />

            {/* MANAGER */}

            <Stack.Screen name="Manager" component={Manager} />
            <Stack.Screen name="MyProperties" component={MyProperties} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="ManagerProfile" component={ManagerProfile} />
            <Stack.Screen name="AllTransactions" component={AllTransactions} />

            {/* Tenant */}
            <Stack.Screen name="Tenant" component={Tenant} />
            <Stack.Screen name="TenantProperties" component={TenantProperties} />
            <Stack.Screen name="TenantTransaction" component={TenantTransaction} />
            <Stack.Screen name="TenantChat" component={TenantChat} />
            <Stack.Screen name="TenantProfile" component={TenantProfile} />
            <Stack.Screen name="TenantChatroom" component={TenantChatroom} />
            <Stack.Screen name="PayRent" component={PayRent} />
        </Stack.Navigator>

    );
}

export default HomeStackNavigator;
