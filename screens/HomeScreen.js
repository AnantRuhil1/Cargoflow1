import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <Button title="View Jobs" onPress={() => navigation.navigate('Jobs')} />
    <Button title="Update Load/Unload Status" onPress={() => navigation.navigate('Status')} />
    <Button title="Scan Documents" onPress={() => navigation.navigate('Documents')} />
  </View>
);

export default HomeScreen;
