import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Linking,
  ScrollView,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ContactScreen = () => {
  const { theme } = useTheme();

  const openURL = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Unable to open this link.');
    }
  };

  const email = 'sidv139373@gmail.com';
  const resumeUrl = 'https://limewire.com/d/tEcsQ#Sjrq55qr2j';

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.emoji, { color: theme.colors.text }]}>👋</Text>
      <Text style={[styles.title, { color: theme.colors.text }]}>Let’s Talk!</Text>
      <Text style={[styles.subtitle, { color: theme.colors.text }]}>
        I'm always open to new ideas, collaborations, or freelance opportunities.
        Whether it's a quick chat or a big vision, let's make something awesome together!
      </Text>

      <View style={styles.contactBlock}>
        <Pressable style={styles.button} onPress={() =>
          openURL(`mailto:${email}?subject=Let's work together!`)}>
          <Text style={styles.buttonText}>📧 Send an Email</Text>
        </Pressable>

        <Pressable style={styles.buttonOutline} onPress={() =>
          openURL('https://www.linkedin.com/in/sidarthverma')}>
          <Text style={styles.buttonOutlineText}>🔗 Connect on LinkedIn</Text>
        </Pressable>

        <Pressable style={styles.buttonOutline} onPress={() =>
          openURL('https://github.com/decepticoder')}>
          <Text style={styles.buttonOutlineText}>💻 View GitHub</Text>
        </Pressable>

        <Pressable style={styles.buttonOutline} onPress={() =>
          openURL(resumeUrl)}>
          <Text style={styles.buttonOutlineText}>📄 View Resume</Text>
        </Pressable>
      </View>

      <Text style={[styles.quote, { color: theme.colors.text }]}>
        “Code is like poetry — when it’s clean, it’s beautiful.”
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  emoji: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 28,
  },
  contactBlock: {
    gap: 14,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#1e90ff',
    fontSize: 16,
    fontWeight: '600',
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});

export default ContactScreen;
