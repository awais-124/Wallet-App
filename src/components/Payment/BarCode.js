import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ASSETS from '../../helpers/imports';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import {screen_height, screen_width} from '../../utils/Dimensions';

const BarCode = () => {
  return (
    <View style={styles.box}>
      <Text style={[styles.black, styles.h1]}>My BarCode</Text>
      <Image source={ASSETS.BarCode} style={styles.barcode} />
      <View style={styles.row}>
        <Text style={[styles.black, styles.text]}>Your Balance</Text>
        <Text style={[styles.black, styles.amount]}>{'$ 5000.00'}</Text>
      </View>
    </View>
  );
};

export default BarCode;

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.secondary.white,
    padding: 20,
    borderRadius: 20,
    gap: 10,
  },
  barcode: {height: screen_height * 0.3, aspectRatio: 1},
  black: {
    color: COLORS.secondary.black,
  },
  h1: {
    ...FONTS.semibold.pt18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {...FONTS.regular.pt16},
  amount: {...FONTS.semibold.pt16},
});
