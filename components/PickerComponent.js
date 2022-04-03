import React from 'react';
import {StyleSheet, Button, Text, TouchableOpacity, View} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const PickerComponent = ({callback, items, value, setValue}) => {
  return (
    <View>
      <TouchableOpacity onPress={callback} style={styles.doneContainer}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
      <Picker
        style={styles.container}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => {
          setValue(itemValue);
        }}>
        {items.map((d, i) => (
          <Picker.Item
            color="white"
            key={d + i}
            label={d.toString()}
            value={d.toString()}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', textAlign: 'left', backgroundColor: 'dodgerblue'},
  doneContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  doneText: {
    fontSize: 18,
    marginRight: 10,
    position: 'relative',
    bottom: 12,
    color: 'dodgerblue',
  },
});

export default PickerComponent;
