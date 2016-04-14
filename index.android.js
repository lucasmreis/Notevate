'use strict'

// import { Crashlytics } from 'react-native-fabric'

import DeviceInfo from 'react-native-device-info'

// Crashlytics.setUserName(DeviceInfo.getDeviceName())
// Crashlytics.setUserIdentifier(DeviceInfo.getUniqueID())
// Crashlytics.setBool('development', global.__DEV__)
// Crashlytics.setString('device_manufacturer', DeviceInfo.getManufacturer())
// Crashlytics.setString('device_model', DeviceInfo.getModel())

import React, { AppRegistry } from 'react-native'

import ViewFunction from './js/view'

AppRegistry.registerComponent('Notevate', () => () => <ViewFunction />)
