import React, { useState, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ActivityIndicator,
    View
} from 'react-native';
import Login from '../Screens/Login';
import Manager from '../Screens/Manager';
import MyProperties from '../Screens/MyProperties';
import AllTransactions from '../Screens/AllTransactions';
import TenantTransaction from '../Screens/TenantTransaction';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = (props) => {
    // const [isLoading,setIsLoading]=useState(true);

    return (

        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Manager" component={Manager} />
            <Stack.Screen name="MyProperties" component={MyProperties} />
            <Stack.Screen name="AllTransactions" component={AllTransactions} />
            <Stack.Screen name="TenantTransaction" component={TenantTransaction} />
        </Stack.Navigator>

    );
}

export default HomeStackNavigator;
