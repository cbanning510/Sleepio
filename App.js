import React, {useState} from 'react';

import PickerComponent from './components/PickerComponent';

import durations from './utils';

import {StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [inBedDuration, setInBedDuration] = useState('');
  const [asleepDuration, setAsleepDuration] = useState('');
  const [calculation, setCalculation] = useState(0);

  const reset = () => {
    setAsleepDuration('');
    setInBedDuration('');
  };

  const calculateAndSend = () => {
    // make mock API POST call:
    if (inBedDuration > 0 && asleepDuration > 0) {
      let result = Math.round(100 * (asleepDuration / inBedDuration));
      try {
        // fetch call here
      } catch (e) {
        console.log(e);
      }
      setCalculation(result);
      reset();
    } else {
      Alert.alert('please select a value > 0');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleepio</Text>
      <Text style={styles.sleepScore}>{`Sleep Score: ${calculation}`}</Text>
      <Text>Duration in bed (hours):</Text>
      <PickerComponent
        items={durations}
        value={inBedDuration}
        setValue={setInBedDuration}
      />
      <Text>Duration asleep (hours):</Text>
      <PickerComponent
        items={durations}
        value={asleepDuration}
        setValue={setAsleepDuration}
      />
      <TouchableOpacity onPress={calculateAndSend} style={styles.button}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
  },
  sleepScore: {
    margin: 20,
    fontSize: 20,
  },
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
