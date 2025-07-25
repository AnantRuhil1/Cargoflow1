// SplashScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login'); // ✅ navigate to Login screen
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.letterContainer}>
        {'CARGOFLOW'.split('').map((char, index) => (
          <Animatable.Text
            key={index}
            animation="fadeInUp"
            delay={index * 250}
            duration={900}
            style={styles.letter}
          >
            {char}
          </Animatable.Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // solid black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterContainer: {
    flexDirection: 'row',
  },
  letter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginHorizontal: 5,
    textShadowColor: '#FF4500',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    letterSpacing: 3,
  },
});

export default SplashScreen;
