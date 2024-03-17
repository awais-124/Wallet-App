import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';
import ICONS from '../../helpers/icons';

import {screen_height, screen_width} from '../../utils/Dimensions';

const Danger = ({title, top = 0.48}) => {
  return (
    <View style={[THEME.row, styles.box, {marginTop: screen_height * top}]}>
      <Image source={ICONS.IMPORTANT} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Danger;

const styles = StyleSheet.create({
  box: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.secondary.red,
    position: 'absolute',
    width: screen_width * 0.872,
    height: screen_height * 0.072,
    marginTop: screen_height * 0.48,
    borderRadius: 8,
    elevation: 10,
    zIndex: 999,
    paddingLeft: 20,
    gap: 20,
  },
  title: {
    ...FONTS.regular.pt16,
    color: COLORS.secondary.white,
  },
});
