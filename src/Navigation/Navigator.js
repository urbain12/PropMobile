import React, { useState, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ActivityIndicator,
    View
} from 'react-native';
import Login from '../Screens/Login';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = (props) => {
    // const [isLoading,setIsLoading]=useState(true);

    return (

        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>

    );
}

export default HomeStackNavigator;
