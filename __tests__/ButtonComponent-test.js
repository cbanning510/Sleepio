import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

import ButtonComponent from '../components/ButtonComponent';

const title = 'Title';

it('renders correctly', () => {
  const tree = renderer.create(<ButtonComponent title={title} />);
  expect(tree).toMatchSnapshot();
});

it('displays correct title text', () => {
  const {getAllByText} = render(<ButtonComponent title={title} />);
  expect(getAllByText('Title').length).toBe(1);
});
