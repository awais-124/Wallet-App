import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';
import ICONS from '../../helpers/icons';

import {screen_width} from '../../utils/Dimensions';

const Keys = ({
  empty = false,
  isDelete = false,
  num = '',
  alpha = '',
  onKeyPressed,
}) => {
  return (
    <TouchableOpacity onPress={() => onKeyPressed(num)} disabled={empty}>
      {!isDelete ? (
        <View style={[THEME.centered, styles.key]}>
          <Text style={[FONTS.regular.pt24, styles.num]}>{num}</Text>
          <Text style={[FONTS.bold.pt10, styles.alpha]}>{alpha}</Text>
        </View>
      ) : empty ? (
        <View style={[THEME.centered, styles.delete]}></View>
      ) : (
        <View style={[THEME.centered, styles.delete]}>
          <Image source={ICONS.DELETE} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Keys;

const styles = StyleSheet.create({
  key: {
    backgroundColor: COLORS.secondary.white,
    width: screen_width / 3.5,
    height: '100%',
    padding: 2,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  delete: {
    backgroundColor: '#CCCED3',
    width: screen_width / 3.5,
    height: '100%',
    padding: 2,
    marginBottom: 10,
  },
  alpha: {
    color: COLORS.secondary.black,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  num: {color: COLORS.secondary.black},
});
