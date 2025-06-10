import React, { useState } from 'react';
import { View, Text, StyleSheet, Slider, Button, ScrollView } from 'react-native';
import { getColorForValue, getAverageColor } from '../utils/moodColor';

export default function App() {
  const [stress, setStress] = useState(5);
  const [happiness, setHappiness] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    // Placeholder for storing mood locally
    console.log('Mood submitted', { stress, happiness, energy, note });
  };

  const colors = [
    getColorForValue(stress),
    getColorForValue(happiness),
    getColorForValue(energy),
  ];
  const averageColor = getAverageColor([stress, happiness, energy]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>CapyCare</Text>
      <MoodSlider label="Stress" value={stress} setValue={setStress} color={colors[0]} />
      <MoodSlider label="Happiness" value={happiness} setValue={setHappiness} color={colors[1]} />
      <MoodSlider label="Energy" value={energy} setValue={setEnergy} color={colors[2]} />
      <View style={[styles.moodTile, { backgroundColor: averageColor }]} />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}

function MoodSlider({ label, value, setValue, color }) {
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.label}>{label}: {value}</Text>
      <Slider
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  sliderContainer: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  moodTile: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 20,
  },
});
