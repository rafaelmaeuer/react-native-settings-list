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
      console.log('Settings layout type iOS');
      return SettingsListIphone;
    case 'android':
      console.log('Settings layout type Android');
      return SettingsListAndroid;
    default:
      console.log('Settings layout type Simple');
      return SettingsListSimple;
  }
};

export default SettingsView();
