import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PickerComponent from '../components/PickerComponent';

const callback = () => console.log('hello Picker');
const items = [0, 0.5, 1, 1.5, 2];
const value = 1;
const setValue = () => {};

it('renders correctly', () => {
  const tree = renderer.create(
    <PickerComponent
      items={items}
      value={value}
      callback={callback}
      setValue={setValue}
    />,
  );
  expect(tree).toMatchSnapshot();
});
