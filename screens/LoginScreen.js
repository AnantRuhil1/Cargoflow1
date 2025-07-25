import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Title } from 'react-native-paper';
import { BlurView } from 'expo-blur';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const passwordRef = useRef(null);

  const inputTheme = {
    colors: {
      text: '#fff',
      placeholder: '#eee',
      primary: '#fff',
      onSurfaceVariant: '#fff',
      background: 'transparent',
    }
  };

  const validateLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (password.trim().length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../asset/background.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.center}>
          <BlurView
            intensity={90}
            tint="default"
            experimentalBlurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
            style={styles.blurCard}
          >
            <Title style={styles.title}>Welcome Back 👋</Title>

            {/* Email Input */}
            <BlurView
              intensity={70}
              tint="default"
              experimentalBlurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
              style={styles.inputBlur}
            >
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                mode="flat"
                style={styles.input}
                underlineColor="transparent"
                theme={inputTheme}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
            </BlurView>

            {/* Password Input */}
            <BlurView
              intensity={70}
              tint="default"
              experimentalBlurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
              style={styles.inputBlur}
            >
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                mode="flat"
                secureTextEntry
                style={styles.input}
                underlineColor="transparent"
                theme={inputTheme}
                ref={passwordRef}
                returnKeyType="done"
                onSubmitEditing={() => {
                  if (validateLogin()) {
                    navigation.navigate('Home');
                  }
                }}
              />
            </BlurView>

            <Button
              mode="contained"
              contentStyle={{ paddingVertical: 8 }}
              style={{ marginTop: 10 }}
              onPress={() => {
                if (validateLogin()) {
                  navigation.navigate('Home');
                }
              }}
            >
              Login
            </Button>
          </BlurView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  blurCard: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  inputBlur: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    elevation: 3,
  },
  input: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
});
