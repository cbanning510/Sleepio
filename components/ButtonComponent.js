import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const ButtonComponent = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
  buttonContainer: {
    margin: 14,
    padding: 6,
    paddingHorizontal: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default ButtonComponent;
