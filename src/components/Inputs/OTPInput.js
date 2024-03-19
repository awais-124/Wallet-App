import {useEffect, useRef, useState} from 'react';

import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import COLORS from '../../styles/colors';
import THEME from '../../styles/theme';
import FONTS from '../../styles/typography';

import {screen_height, screen_width} from '../../utils/Dimensions';

const FOCUS = [1, 0, 0, 0];
const OTPInput = ({data, style, maxLength, onCellPressed}) => {
  const cellRef = useRef(null);
  const [isFocused, setIsFocused] = useState(FOCUS);
  const boxArray = Array(maxLength).fill(0);

  const handleCellPress = index => {
    if (index < data.length + 1) {
      onCellPressed(index);
      setIsFocused(prevIsFocused => prevIsFocused.map((_, i) => i === index));
    }
  };

  useEffect(() => {
    const nextIndex = data.length;
    setIsFocused(prevIsFocused => prevIsFocused.map((_, i) => i === nextIndex));
  }, [data]);

  const OTPCell = (_, index) => {
    const digit = !data[index] ? '' : data[index];

    return (
      <TouchableOpacity
        activeOpacity={0.2}
        style={[styles.cell, isFocused[index] && styles.focus]}
        key={index}
        disabled={!!isFocused[index]}
        onPress={() => handleCellPress(index)}
        ref={cellRef}>
        <TextInput value={digit} style={styles.otp} editable={false} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[style, styles.box]}>
      <View style={[THEME.row, styles.cells]}>{boxArray.map(OTPCell)}</View>
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  box: {
    margin: 5,
    width: screen_width,
    height: screen_height * 0.09,
  },
  cells: {
    width: screen_width * 0.778,
    marginHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  cell: {
    width: `22%`,
    height: '100%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLORS.secondary.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otp: {
    ...FONTS.semibold.pt24,
    color: COLORS.secondary.white,
    textAlign: 'center',
  },
  focus: {
    borderColor: COLORS.secondary.black,
  },
});
