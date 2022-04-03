import React, {useState, useRef} from 'react';

import RBSheet from 'react-native-raw-bottom-sheet';
import PickerComponent from './components/PickerComponent';
import ButtonComponent from './components/ButtonComponent';

import durations from './utils/utils';

import {StyleSheet, Button, Text, View, Platform} from 'react-native';

const App = () => {
  const [inBedDuration, setInBedDuration] = useState('');
  const [asleepDuration, setAsleepDuration] = useState('');
  const [calculation, setCalculation] = useState(0);
  const [loading, setLoading] = useState(false);
  const refInBedPicker = useRef();
  const refSleepPicker = useRef();

  const reset = () => {
    setAsleepDuration('');
    setInBedDuration('');
  };

  const calculateAndSend = () => {
    setLoading(true);
    let result = Math.round(100 * (asleepDuration / inBedDuration));
    // make mock API POST call:
    try {
      setTimeout(() => {
        // set result of mock API call:
        setCalculation(result);
        setLoading(false);
        reset();
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  const showSleepScore = () => {
    return (
      <Text style={styles.sleepScore}>
        {loading ? `Loading...` : `Sleep Score: ${calculation}`}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleepio</Text>
      {showSleepScore()}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerTitle}>Duration in bed (hours):</Text>
        <ButtonComponent
          title="Select"
          onPress={() => refInBedPicker.current.open()}
        />
        <RBSheet
          ref={refInBedPicker}
          closeOnDragDown={true}
          closeDuration={500}
          closeOnPressMask={false}
          customStyles={{
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <PickerComponent
            items={durations}
            value={inBedDuration}
            setValue={setInBedDuration}
            callback={() => refInBedPicker.current.close()}
          />
        </RBSheet>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerTitle}>Duration asleep (hours):</Text>
        <ButtonComponent
          title="Select"
          onPress={() => refSleepPicker.current.open()}
        />
        <RBSheet
          ref={refSleepPicker}
          closeOnDragDown={true}
          closeDuration={500}
          closeOnPressMask={false}
          customStyles={{
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <PickerComponent
            items={durations}
            value={asleepDuration}
            setValue={setAsleepDuration}
            callback={() => refSleepPicker.current.close()}
          />
        </RBSheet>
      </View>
      <View style={styles.calculateBtnContainer}>
        <Button
          color={Platform.OS === 'ios' ? 'white' : 'dodgerblue'}
          title="Calculate"
          style={styles.buttonCalculate}
          onPress={calculateAndSend}
          disabled={asleepDuration <= 0 || inBedDuration <= 0}
        />
      </View>
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
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    margin: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 36,
    marginBottom: 40,
    color: 'white',
  },
  pickerTitle: {
    fontSize: 18,
    color: 'white',
  },
  sleepScore: {
    margin: 20,
    fontSize: 20,
    color: 'white',
  },
  calculateBtnContainer: {
    marginTop: 20,
  },
});

export default App;
