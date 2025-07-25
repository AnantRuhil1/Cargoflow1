import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('../asset/background.jpg');

const JobsScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Job Console</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Fetching Available Jobs')}
        >
          <Text style={styles.buttonText}>🚀 Available Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Fetching Job History')}
        >
          <Text style={styles.buttonText}>📂 Job History</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </SafeAreaView>
);

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
});

export default JobsScreen;
