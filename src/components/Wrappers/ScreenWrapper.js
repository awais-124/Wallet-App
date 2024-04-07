import React from 'react';

import {Keyboard, TouchableOpacity} from 'react-native';

import THEME from '../../styles/theme';

const ScreenWrapper = props => {
  return (
    <TouchableOpacity
      style={THEME.fill}
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}>
      {props.children}
    </TouchableOpacity>
  );
};

export default ScreenWrapper;
