import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';
import ICONS from '../../helpers/icons';

import {screen_width} from '../../utils/Dimensions';
import COLORS from '../../styles/colors';

const BtnIcon = ({
  back = COLORS.secondary.red,
  color,
  onClick,
  text,
  isDisabled = false,
}) => {
  return (
    <TouchableOpacity onPress={onClick} disabled={isDisabled}>
      <View style={[THEME.centered, {backgroundColor: back, ...styles.body}]}>
        <View style={styles.set}>
          <Image source={ICONS.LOGOUT} />
          <Text style={[FONTS.semibold.pt16, {color: color, ...styles.text}]}>
            {text}
          </Text>
        </View>
        <Image source={ICONS.RIGHT} />
      </View>
    </TouchableOpacity>
  );
};

export default BtnIcon;

const styles = StyleSheet.create({
  body: {
    height: 60,
    marginHorizontal: 'auto',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: screen_width * 0.872,
    borderRadius: 10,
  },
  text: {textAlign: 'center', textTransform: 'uppercase'},
  set: {
    flexDirection: 'row',
    gap: 5,
  },
});
