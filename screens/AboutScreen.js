import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Platform, Linking, Pressable } from 'react-native';

const AboutScreen = () => {
  const { theme } = useTheme();

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.container}>
        <Text style={[styles.header, { color: theme.colors.text }]}>About Me 🧑‍💻</Text>
        <Text style={[styles.paragraph, { color: theme.colors.text }]}>
          Hey! I’m Sid, a passionate developer based in GTA.
        </Text>
        <Text style={[styles.paragraph, { color: theme.colors.text }]}>
          I specialize in crafting clean, efficient, and elegant applications using React Native, Expo, Firebase, and modern web tools.
          I enjoy building products that feel good to use and solve real problems.
        </Text>
        <Text style={[styles.paragraph, { color: theme.colors.text }]}>
          Outside of tech, I enjoy writing, playing music, and exploring digital art. This portfolio is a reflection of my journey, and I'm
          constantly learning something new.
        </Text>
        <Text style={[styles.quote, { color: theme.colors.text }]}>
          “Stay curious. Stay creative.”
        </Text>
      </View>
      <Pressable
  style={styles.resumeButton}
  onPress={() => Linking.openURL('https://limewire.com/d/tEcsQ#Sjrq55qr2j')}
>
  <Text style={styles.resumeButtonText}>📄 View My Resume</Text>
</Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 24 , backgroundColor: "transparent"},
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  paragraph: { fontSize: 16, lineHeight: 24, marginBottom: 12 },
  quote: { fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginTop: 30 },
  resumeButton: {
  marginTop: 24,
  backgroundColor: '#1e90ff',
  paddingVertical: 14,
  paddingHorizontal: 26,
  borderRadius: 8,
  alignSelf: 'center',
},
resumeButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},
});

export default AboutScreen;
