import React from 'react';
import {StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const PickerComponent = ({callback, items, value, setValue}) => {
  return (
    <Picker
      style={styles.container}
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => {
        setValue(itemValue);
        callback();
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
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', textAlign: 'left', backgroundColor: 'dodgerblue'},
});

export default PickerComponent;
