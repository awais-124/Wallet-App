import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

import ICONS from '../../helpers/icons';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';

import {screen_width} from '../../utils/Dimensions';

const Header = ({goTo}) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => goTo('Home')}>
        <Image source={ICONS.ARROW_LEFT} style={styles.left} />
      </TouchableOpacity>
      <Text style={styles.title}>Payment</Text>
      <TouchableWithoutFeedback>
        <Image source={ICONS.IMPORTANT} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: screen_width,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.secondary.white,
    ...FONTS.medium.pt16,
  },
});
