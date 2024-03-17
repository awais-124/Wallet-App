import {useState} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {screen_height, screen_width} from '../../utils/Dimensions';

import FONTS from '../../styles/typography';
import COLORS from '../../styles/colors';
import ICONS from '../../helpers/icons';
import THEME from '../../styles/theme';

const DateInput = ({
  labelColor,
  label,
  data = '',
  onChange,
  onClick,
  disabled = false,
}) => {
  return (
    <View style={[THEME.row, styles.container]}>
      <View style={[THEME.col, styles.inputBox]}>
        <Text
          style={[FONTS.regular.pt12, {color: labelColor, ...styles.label}]}>
          {label}
        </Text>
        <TextInput
          style={[FONTS.semibold.pt14, styles.input]}
          value={data}
          onChangeText={onChange}
          editable={disabled}
        />
      </View>
      <TouchableOpacity onPress={onClick} style={styles.icon}>
        <Image source={ICONS.CALENDAR} />
      </TouchableOpacity>
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  row: {justifyContent: 'space-between'},
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondary.greyTwo,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 60,
    width: screen_width * 0.872,
  },
  icon: {padding: 5},
  inputBox: {marginVertical: 2},
  label: {
    margin: 0,
    color: COLORS.secondary.black,
  },
  input: {height: '80%', maxWidth: 'auto', color: COLORS.secondary.black},
});
