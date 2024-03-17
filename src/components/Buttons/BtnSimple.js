import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {screen_width} from '../../utils/Dimensions';

import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';

const BtnSimple = ({back, color, onClick, text, isDisabled = false}) => {
  return (
    <TouchableOpacity onPress={onClick} disabled={isDisabled}>
      <View style={[THEME.centered, {backgroundColor: back, ...styles.body}]}>
        <Text style={[FONTS.semibold.pt16, {color: color, ...styles.text}]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BtnSimple;

const styles = StyleSheet.create({
  body: {
    width: screen_width * 0.872,
    height: 60,
    borderRadius: 15,
    marginHorizontal: 'auto',
  },
  text: {textAlign: 'center', textTransform: 'uppercase'},
});
