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

const LabelledInput = ({labelColor, label, isPassword = false}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  const toggleEye = () => setShowPassword(prev => !prev);

  return (
    <View style={[THEME.row, styles.container]}>
      <View style={[THEME.col, styles.inputBox]}>
        <Text
          style={[FONTS.regular.pt12, {color: labelColor, ...styles.label}]}>
          {label}
        </Text>
        <TextInput
          secureTextEntry={showPassword}
          style={[FONTS.semibold.pt14, styles.input]}
        />
      </View>
      {isPassword && (
        <TouchableOpacity onPress={toggleEye} style={styles.icon}>
          <Image source={showPassword ? ICONS.EYE_SHOW : ICONS.EYE_HIDE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LabelledInput;

const styles = StyleSheet.create({
  row: {justifyContent: 'space-between'},
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondary.greyTwo,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    height: screen_height * 0.09,
    width: screen_width * 0.872,
  },
  icon: {padding: 5},
  inputBox: {marginVertical: 2},
  label: {
    margin: 0,
    color: COLORS.secondary.black,
  },
  input: {height: '80%'},
});
