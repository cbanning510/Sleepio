import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import App from '../App';

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});

it('displays expected UI text', () => {
  const {getAllByText} = render(<App />);
  expect(getAllByText('Sleepio').length).toBe(1);
  expect(getAllByText('Select').length).toBe(2);
  expect(getAllByText('Calculate').length).toBe(1);
  expect(getAllByText('Duration in bed (hours):').length).toBe(1);
  expect(getAllByText('Duration asleep (hours):').length).toBe(1);
});
