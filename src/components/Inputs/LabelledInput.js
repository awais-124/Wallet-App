import React, {useState, useRef} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import FONTS from '../../styles/typography';
import COLORS from '../../styles/colors';
import ICONS from '../../helpers/icons';
import THEME from '../../styles/theme';

import {screen_width} from '../../utils/Dimensions';

const LabelledInput = ({
  labelColor = '#000',
  label,
  data,
  onChange,
  onFocused,
}) => {
  const inputRef = useRef(null);
  const isPassword = label.includes('Password');
  const [showPassword, setShowPassword] = useState(isPassword);

  const handlePress = () => inputRef.current.focus();
  const toggleEye = () => setShowPassword(prev => !prev);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[THEME.row, styles.container]}>
        <View style={[THEME.col, styles.inputBox]}>
          <Text
            style={[FONTS.regular.pt12, {color: labelColor, ...styles.label}]}>
            {label}
          </Text>
          <TextInput
            ref={inputRef}
            secureTextEntry={showPassword}
            style={[FONTS.semibold.pt14, styles.input]}
            maxLength={isPassword ? 10 : 20}
            value={data}
            onChangeText={onChange}
            onFocus={onFocused}
          />
        </View>
        {isPassword && (
          <TouchableWithoutFeedback onPress={toggleEye}>
            <View style={styles.icon}>
              <Image source={showPassword ? ICONS.EYE_SHOW : ICONS.EYE_HIDE} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LabelledInput;

const styles = StyleSheet.create({
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
  inputBox: {marginVertical: 2, width: '80%', alignSelf: 'stretch'},
  label: {
    margin: 0,
    color: COLORS.secondary.black,
  },
  input: {height: '80%', width: '100%'},
});
