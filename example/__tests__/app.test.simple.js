/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// mock react-native Platform for @react-native-firebase
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: '',
  select: () => null,
}));

it('renders correctly', () => {
  renderer.create(<App />);
});
