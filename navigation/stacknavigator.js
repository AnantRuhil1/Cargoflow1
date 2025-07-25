import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import JobsScreen from '../screens/JobsScreen';
import StatusScreen from '../screens/StatusScreen';
import DocumentsScreen from '../screens/DocumentsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Jobs" component={JobsScreen} />
    <Stack.Screen name="Status" component={StatusScreen} />
    <Stack.Screen name="Documents" component={DocumentsScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
