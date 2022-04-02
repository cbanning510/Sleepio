import React from 'react';
import {StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const PickerComponent = ({items, value, setValue}) => {
  return (
    <Picker
      style={styles.container}
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
      {items.map((d, i) => (
        <Picker.Item key={d + i} label={d.toString()} value={d.toString()} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', textAlign: 'left'},
});

export default PickerComponent;
