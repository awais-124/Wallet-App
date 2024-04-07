import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import ICONS from '../../helpers/icons';
import FONTS from '../../styles/typography';

import Tab from './Tab';

import {screen_width} from '../../utils/Dimensions';
import COLORS from '../../styles/colors';

const Footer = ({scan, setScan}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.h1}>Choose Payment Method</Text>
      <View style={styles.tabs}>
        <Tab
          icon={scan ? ICONS.SCANCODEORANGE : ICONS.SCANCODEGREY}
          text="Scan Barcode"
          selected={scan}
          handleTab={setScan}
        />
        <Tab
          icon={scan ? ICONS.MYCODEGREY : ICONS.MYCODEORANGE}
          text="My Barcode"
          selected={!scan}
          handleTab={setScan}
        />
      </View>
      <Text style={styles.text}>
        Scan the barcode that have been provided by the seller with your phone
        camera
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 20,
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.secondary.white,
    width: screen_width,
  },
  tabs: {
    flexDirection: 'row',
    width: screen_width * 0.8,
    gap: 10,
  },
  h1: {
    ...FONTS.semibold.pt18,
    color: COLORS.secondary.black,
    textAlign: 'left',
  },
  text: {
    marginTop: 10,
    ...FONTS.regular.pt13,
    color: COLORS.secondary.greyOne,
    lineHeight: 16,
  },
});
