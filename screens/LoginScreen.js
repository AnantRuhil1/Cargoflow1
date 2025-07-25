import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { BlurView } from 'expo-blur';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const inputTheme = {
    colors: {
      text: '#fff',             // input text
      placeholder: '#eee',      // placeholder text
      primary: '#fff',          // label (focused)
      onSurfaceVariant: '#fff', // label (unfocused, Paper v5+)
      background: 'transparent',
    }
  };

  return (
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

          {/* Email Input with frosted blur */}
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
            />
          </BlurView>

          {/* Password Input with frosted blur */}
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
            />
          </BlurView>

          <Button mode="contained" onPress={() => navigation.navigate('Home')}>
            Login
          </Button>
        </BlurView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
