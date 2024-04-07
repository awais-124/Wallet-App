import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {screen_width} from '../../utils/Dimensions';

import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';

const BtnGhost = ({textColor, borderColor, onClick, text, style}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={[
          THEME.centered,
          style,
          {borderColor: borderColor, ...styles.body},
        ]}>
        <Text style={[FONTS.semibold.pt16, {color: textColor, ...styles.text}]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BtnGhost;

const styles = StyleSheet.create({
  body: {
    height: 60,
    borderRadius: 15,
    marginHorizontal: 'auto',
    borderWidth: 2,
  },
  text: {textAlign: 'center', textTransform: 'uppercase'},
});
