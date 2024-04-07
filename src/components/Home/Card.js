import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

import ASSETS from '../../helpers/imports';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import {screen_width} from '../../utils/Dimensions';

const Card = ({h1, h2, src}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={[FONTS.semibold.pt16, {color: COLORS.secondary.white}]}>
          {h1}
        </Text>
        <Text style={[FONTS.regular.pt12, {color: COLORS.secondary.white}]}>
          {h2}
        </Text>
      </View>
      <Image source={src} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingVertical: 5,
    borderRadius: 10,
    width: screen_width * 0.75,
    marginHorizontal: 10,
  },
  textBox: {gap: 5},
});
