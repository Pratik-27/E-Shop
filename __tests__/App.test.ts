import 'react-native';
import React from 'react';
import App from '../App';
import { it } from '@jest/globals';

import renderer, { ReactTestRenderer } from 'react-test-renderer';

it('renders correctly', () => {
  let component: ReactTestRenderer;

  renderer.act(() => {
    component = renderer.create(<App />);
  });

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
