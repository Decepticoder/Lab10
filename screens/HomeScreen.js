import React from 'react';
import { View, ScrollView, Text, Pressable, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: 'transparent' }]}>
      <View style={styles.inner}>
        <Text style={[styles.emoji, { color: theme.colors.text }]}>🎨</Text>
        <Text style={[styles.title, { color: theme.colors.text }]}>I'm Sid,</Text>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>
          A creative developer building visually-driven, intuitive mobile and web experiences.
        </Text>

        <View style={styles.buttonGroup}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Projects')}>
            <Text style={styles.buttonText}>📁 View Projects</Text>
          </Pressable>
          <Pressable style={styles.buttonOutline} onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonOutlineText}>🙋 About Me</Text>
          </Pressable>
          <Pressable style={styles.buttonOutline} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.buttonOutlineText}>📬 Contact</Text>
          </Pressable>
        </View>

        <View style={styles.socialLinks}>
          <Text style={[styles.socialText, { color: theme.colors.text }]}>Find me online:</Text>
          <Pressable onPress={() => Linking.openURL('https://github.com/decepticoder')}>
            <Text style={styles.link}>GitHub</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL('https://linkedin.com/in/sidarthverma')}>
            <Text style={styles.link}>LinkedIn</Text>
          </Pressable>
        </View>
      </View>

      <ThemeToggle />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 , backgroundColor: "transparent"},
  inner: { padding: 24 },
  emoji: { fontSize: 48, textAlign: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 8 },
  subtitle: { fontSize: 16, textAlign: 'center', lineHeight: 22, marginBottom: 24 },
  buttonGroup: { gap: 12 },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutlineText: { color: '#1e90ff', fontSize: 16, fontWeight: '600' },
  socialLinks: { marginTop: 32, alignItems: 'center' },
  socialText: { fontSize: 16, marginBottom: 6 },
  link: { fontSize: 16, color: '#1e90ff', marginBottom: 4 }
});

export default HomeScreen;
