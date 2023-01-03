/**
 *
 * @format
 * @flow strict-local
 */

import {Platform} from 'react-native';

import SettingsListAndroid from './settings/android';
import SettingsListIphone from './settings/iphone';
import SettingsListSimple from './settings/simple';

const SettingsView = () => {
  switch (Platform.OS) {
    case 'ios':
      return SettingsListIphone;
    case 'android':
      return SettingsListAndroid;
    default:
      return SettingsListSimple;
  }
};

export default SettingsView();
