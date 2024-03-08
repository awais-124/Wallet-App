import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles/colors';
import {screen_height, screen_width} from '../utils/Dimensions';

const BottomBar = ({outer, inner = '#000', style}) => {
  return (
    <View style={{...outer, ...styles.back}}>
      <View style={{...style, backgroundColor: inner, ...styles.bar}}></View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  back: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: screen_height * 0.03,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
  },

  bar: {
    width: screen_width * 0.357,
    height: '30%',
    borderRadius: 10,
    elevation: 5,
  },
});
