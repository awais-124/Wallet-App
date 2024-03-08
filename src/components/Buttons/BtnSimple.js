import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {screen_height, screen_width} from '../../utils/Dimensions';

import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';

const BtnSimple = ({back, color, onClick, text}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[THEME.centered, {backgroundColor: back, ...styles.body}]}>
        <Text style={(FONTS.regular.pt14, [{color: color, ...styles.text}])}>
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
    height: screen_height * 0.069,
    borderRadius: 15,
    marginHorizontal: 'auto',
  },
  text: {textAlign: 'center', textTransform: 'uppercase'},
});
