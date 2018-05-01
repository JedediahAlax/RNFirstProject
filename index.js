// import library to help creae a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => (
  <Text>Some text</Text>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
