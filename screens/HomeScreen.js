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

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeArea}>
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.brand}>FLOW</Text>
        <Text style={styles.tagline}>Drive | Deliver | Dominate</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Jobs')}
        >
          <Text style={styles.buttonText}>🚚 View Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Status')}
        >
          <Text style={styles.buttonText}>📦 Update Load/Unload</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Documents')}
        >
          <Text style={styles.buttonText}>📄 Scan Documents</Text>
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
  brand: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF8C00',
    letterSpacing: 5,
    marginBottom: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 25,
  },
  tagline: {
    fontSize: 16,
    color: '#FFA726',
    marginBottom: 40,
    fontStyle: 'italic',
    fontWeight: '500',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
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

export default HomeScreen;

