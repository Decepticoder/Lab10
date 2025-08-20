import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import ProjectCarousel from '../components/ProjectCarousel';
import { useTheme } from '../context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProjectsScreen = () => {
  const { theme } = useTheme();
  const [projects, setProjects] = useState([]);

  const defaultProjects = [
    { title: 'Minimalist To-Do App', image: require('../assets/images/project1.jpg') },
    { title: 'Book Browser (Google Books API)', image: require('../assets/images/BookApplication.png') },
    { title: 'Responsive Flight Tracker Site', image: require('../assets/images/FlightTracker.png') },
    { title: 'Movie Library App', image: require('../assets/images/image.png') }
  ];

useEffect(() => {
  const loadProjects = async () => {
    try {
      const KEY = 'projects_v1'; // bump this if structure changes
      const saved = await AsyncStorage.getItem(KEY);

      if (!saved) {
        await AsyncStorage.setItem(KEY, JSON.stringify(defaultProjects));
        setProjects(defaultProjects);
        return;
      }

      const parsed = JSON.parse(saved);

      // If defaults are longer or contain new titles, merge and persist.
      const byTitle = new Map(parsed.map(p => [p.title, p]));
      let changed = false;
      for (const d of defaultProjects) {
        if (!byTitle.has(d.title)) {
          byTitle.set(d.title, d);
          changed = true;
        }
      }

      const merged = Array.from(byTitle.values());
      if (changed) {
        await AsyncStorage.setItem(KEY, JSON.stringify(merged));
      }
      setProjects(merged);
    } catch {
      setProjects(defaultProjects);
    }
  };
  loadProjects();
}, []);


  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.container}>
        <Animated.Text entering={FadeInUp.duration(600)} style={[styles.title, { color: theme.colors.text }]}>
          🚀 Featured Projects
        </Animated.Text>
        <Animated.View entering={FadeInUp.delay(200).duration(800)}>
          <ProjectCarousel data={projects} />
        </Animated.View>
        <Animated.Text entering={FadeInUp.delay(400)} style={[styles.note, { color: theme.colors.text }]}>
          Each project reflects my learning, design thinking, and development skills.

          All the projects are available on my Github!
        </Animated.Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: "transparent" },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  note: { fontSize: 14, lineHeight: 22, marginTop: 20 },
});

export default ProjectsScreen;
