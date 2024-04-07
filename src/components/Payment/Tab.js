import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';

const Tab = ({text, icon, selected, handleTab}) => {
  const changeTab = () => handleTab(prev => !prev);
  return (
    <TouchableOpacity
      style={[styles.box, selected ? styles.orangeBorder : styles.greyBorder]}
      activeOpacity={0.8}
      onPress={changeTab}>
      <Image source={icon} />
      <Text style={[styles.text, selected ? styles.orange : styles.grey]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: COLORS.secondary.black,
    borderRadius: 10,
    width: '50%',
  },
  text: {
    ...FONTS.regular.pt14,
  },
  orange: {color: COLORS.primary.orange},
  grey: {color: COLORS.secondary.greyOne},
  greyBorder: {borderColor: COLORS.secondary.greyOne},
  orangeBorder: {borderColor: COLORS.primary.orange},
});
