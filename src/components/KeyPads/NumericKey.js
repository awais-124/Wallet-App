import React from 'react';

import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ICONS from '../../helpers/icons';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import {screen_width} from '../../utils/Dimensions';

const NumericKey = ({num, onClick}) => {
  return (
    <TouchableOpacity onPress={() => onClick(num)}>
      <View style={styles.box}>
        {num !== 'x' ? (
          <Text style={styles.num}>{num}</Text>
        ) : (
          <Image source={ICONS.DELETE_WHITE} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default NumericKey;

const btnWidth = ((screen_width * 0.7) - 40 ) / 3;

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: btnWidth,
    width: btnWidth,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.secondary.white,
  },
  num: {
    color: COLORS.secondary.white,
    ...FONTS.semibold.pt24,
  },
});
