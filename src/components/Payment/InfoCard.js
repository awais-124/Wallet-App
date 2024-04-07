import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native';

import THEME from '../../styles/theme';
import COLORS from '../../styles/colors';
import ICONS from '../../helpers/icons';
import {screen_width} from '../../utils/Dimensions';
import FONTS from '../../styles/typography';

const InfoCard = ({text = '', title = '', icon = ICONS.MENU, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[THEME.justifyCentered, styles.box]}>
        <View style={styles.left}>
          <Image source={icon} />
          <Text style={[FONTS.regular.pt16, styles.text]}>{text}</Text>
        </View>
        <Text style={[FONTS.semibold.pt16, styles.text]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  box: {
    borderColor: COLORS.secondary.greyThree,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.secondary.white,
    flexDirection: 'row',
    width: screen_width * 0.87,
    height: 50,
    paddingHorizontal: 20,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  text: {
    color: COLORS.secondary.black,
  },
});
