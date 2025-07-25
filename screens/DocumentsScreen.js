import React from 'react';
import { View, Button } from 'react-native';

const DocumentsScreen = () => (
  <View style={{ flex: 1, padding: 20 }}>
    <Button title="Scan Document (Camera)" onPress={() => alert('Opening Camera')} />
    <Button title="Upload from Gallery" onPress={() => alert('Opening Gallery')} />
  </View>
);

export default DocumentsScreen;
