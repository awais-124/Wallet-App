import {StyleSheet, Image, View} from 'react-native';

import React from 'react';

import Keys from './Keys';
import THEME from '../../styles/theme';
import ICONS from '../../helpers/icons';
import {screen_width} from '../../utils/Dimensions';

const KeyPad = ({style}) => {
  return (
    <View style={[style, THEME.col, styles.keypad]}>
      <View style={[THEME.row, styles.row]}>
        <Keys num="1" />
        <Keys num="2" alpha="ABC" />
        <Keys num="3" alpha="DEF" />
      </View>
      <View style={[THEME.row, styles.row]}>
        <Keys num="4" alpha="GHI" />
        <Keys num="5" alpha="JKL" />
        <Keys num="6" alpha="MNO" />
      </View>
      <View style={[THEME.row, styles.row]}>
        <Keys num="7" alpha="PQRS" />
        <Keys num="8" alpha="TUV" />
        <Keys num="9" alpha="WXYZ" />
      </View>
      <View style={[THEME.row, styles.row]}>
        <Keys />
        <Keys num="0" />
        <Keys isDelete={true} />
      </View>
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  keypad: {
    gap: 8,
    paddingTop: 10,
    paddingBottom: 30,
    backgroundColor: '#CCCED3',
  },
  row: {justifyContent: 'center', gap: 8, height: '22%'},
  delete: {},
});
