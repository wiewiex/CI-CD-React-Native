/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, SafeAreaView, StatusBar } from 'react-native';

import {
  generateTestCrash,
  hasCrashedInLastSession,
  lastSessionCrashReport,
} from 'appcenter-crashes';

import Analytics from 'appcenter-analytics';

export default class App extends React.Component {
  constructor() {
    super();
    this.checkPreviousSession();
  }
  async checkPreviousSession() {
    const didCrash = await hasCrashedInLastSession();
    if (didCrash) {
      const raport = await lastSessionCrashReport();
      alert("Sorry about that crash, we're working on a solution.");
    }
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <Button
          title="Calculate Inflation"
          onPress={() => {
            Analytics.trackEvent('calculate_inflation', {
              internet: 'WiFi',
              gps: 'off',
            });
          }}
        />
      </SafeAreaView>
    );
  }
}
