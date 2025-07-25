import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('../asset/background.jpg');

const StatusScreen = () => {
  const [notes, setNotes] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.heading}>Load Tracker</Text>

          <TouchableOpacity style={styles.button} onPress={() => alert('Load Started')}>
            <Text style={styles.buttonText}>🟠 Start Load</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => alert('Load Completed')}>
            <Text style={styles.buttonText}>🔶 Complete Load</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Driver notes..."
            placeholderTextColor="#FFA726"
            style={styles.input}
            value={notes}
            onChangeText={setNotes}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(28,28,30,0.45)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    color: '#FF8C00',
    fontWeight: 'bold',
    marginBottom: 30,
    letterSpacing: 2,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 20,
  },
  button: {
    backgroundColor: 'rgba(255,140,0,0.1)',
    borderColor: '#FF8C00',
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#FF8C00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.3,
  },
  input: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#2B2B2D',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#FFA726',
    borderWidth: 1,
    borderColor: '#FF8C00',
  },
});

export default StatusScreen;
