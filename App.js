import React, {useState} from 'react';

import PickerComponent from './components/PickerComponent';

import durations from './utils';

import {
  StyleSheet,
  Button,
  Text,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [inBedDuration, setInBedDuration] = useState('');
  const [asleepDuration, setAsleepDuration] = useState('');
  const [calculation, setCalculation] = useState(0);
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setAsleepDuration('');
    setInBedDuration('');
  };

  const calculateAndSend = () => {
    setLoading(true);
    console.log('loading is ', loading);
    // make mock API POST call:
    let result = Math.round(100 * (asleepDuration / inBedDuration));

    try {
      setTimeout(() => {
        setCalculation(result);
        setLoading(false);
        reset();
      }, 2000);
      // fetch call here
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleepio</Text>
      <Text style={styles.sleepScore}>
        {loading ? `Loading...` : `Sleep Score: ${calculation}`}
      </Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerTitle}>Duration in bed (hours):</Text>
        <PickerComponent
          items={durations}
          value={inBedDuration}
          setValue={setInBedDuration}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerTitle}>Duration asleep (hours):</Text>
        <PickerComponent
          items={durations}
          value={asleepDuration}
          setValue={setAsleepDuration}
        />
      </View>
      <Button
        title="Calculate"
        color="white"
        style={styles.buttonEnabled}
        onPress={calculateAndSend}
        disabled={asleepDuration <= 0}
      />
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
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    margin: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 32,
  },
  pickerTitle: {
    fontSize: 16,
    color: 'white',
  },
  sleepScore: {
    margin: 20,
    fontSize: 20,
  },
});

export default App;
