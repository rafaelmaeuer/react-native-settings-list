/* eslint-disable react-native/no-inline-styles */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import SettingsList from 'react-native-settings-list';

// iPhone example
class SettingsListIphone extends Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false, loggedIn: false};
  }

  render() {
    return (
      <View style={styles.background}>
        <View
          style={{
            borderBottomWidth: 1,
            backgroundColor: '#f7f7f8',
            borderColor: '#c8c7cc',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Settings
          </Text>
        </View>
        <View style={styles.background}>
          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Header headerStyle={{marginTop: 15}} />
            {this.state.toggleAuthView ? (
              <SettingsList.Item
                icon={
                  <Image
                    style={styles.image}
                    source={require('../images/user.png')}
                  />
                }
                title="Logged In As..."
                hasNavArrow={false}
              />
            ) : (
              <SettingsList.Item
                icon={
                  <Image
                    style={styles.image}
                    source={require('../images/user.png')}
                  />
                }
                isAuth={true}
                authPropsUser={{placeholder: 'E-mail'}}
                authPropsPW={{placeholder: 'Password'}}
                onPress={() => this.toggleAuthView()}
              />
            )}
            <SettingsList.Header headerStyle={{marginTop: 15}} />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/airplane.png')}
                />
              }
              hasSwitch={true}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title="Airplane Mode"
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/wifi.png')}
                />
              }
              title="Wi-Fi"
              titleInfo="Bill Wi The Science Fi"
              titleInfoStyle={styles.titleInfo}
              onPress={() => Alert.alert('Route to Wifi Page')}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/blutooth.png')}
                />
              }
              title="Blutooth"
              titleInfo="Off"
              titleInfoStyle={styles.titleInfo}
              onPress={() => Alert.alert('Route to Blutooth Page')}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/cellular.png')}
                />
              }
              title="Cellular"
              onPress={() => Alert.alert('Route To Cellular Page')}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/hotspot.png')}
                />
              }
              title="Personal Hotspot"
              titleInfo="Off"
              titleInfoStyle={styles.titleInfo}
              onPress={() => Alert.alert('Route To Hotspot Page')}
            />
            <SettingsList.Header headerStyle={{marginTop: 15}} />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/notifications.png')}
                />
              }
              title="Notifications"
              onPress={() => Alert.alert('Route To Notifications Page')}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/control.png')}
                />
              }
              title="Control Center"
              onPress={() => Alert.alert('Route To Control Center Page')}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/dnd.png')}
                />
              }
              title="Do Not Disturb"
              onPress={() => Alert.alert('Route To Do Not Disturb Page')}
            />
            <SettingsList.Header headerStyle={{marginTop: 15}} />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/general.png')}
                />
              }
              title="General"
              onPress={() => Alert.alert('Route To General Page')}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.image}
                  source={require('../images/display.png')}
                />
              }
              title="Display & Brightness"
              onPress={() => Alert.alert('Route To Display Page')}
            />
          </SettingsList>
        </View>
      </View>
    );
  }

  toggleAuthView() {
    this.setState({toggleAuthView: !this.state.toggleAuthView});
  }

  onValueChange(value) {
    this.setState({switchValue: value});
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#EFEFF4',
    flex: 1,
  },
  image: {
    marginLeft: 15,
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  titleInfo: {
    fontSize: 16,
    color: '#8e8e93',
  },
});

export default SettingsListIphone;
