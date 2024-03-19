import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';

import {screen_width} from '../../utils/Dimensions';

const Keys = ({num = '', alpha = '', onKeyPressed}) => {
  return (
    <TouchableOpacity onPress={() => onKeyPressed(num)} activeOpacity={0.6}>
      <View style={[THEME.centered, styles.key]}>
        <Text style={[FONTS.regular.pt24, styles.num]}>{num}</Text>
        <Text style={[FONTS.bold.pt10, styles.alpha]}>{alpha}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Keys;

const styles = StyleSheet.create({
  key: {
    backgroundColor: COLORS.secondary.white,
    width: screen_width * 0.3,
    padding: 3,
    borderRadius: 5,
    elevation: 2,
    alignSelf: 'center',
  },
  alpha: {
    color: COLORS.secondary.black,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  num: {color: COLORS.secondary.black},
});
