import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import FONTS from '../../styles/typography';
import COLORS from '../../styles/colors';

import {screen_width} from '../../utils/Dimensions';

const Shortcut = ({onClick, src, title}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.conatiner}>
        <Image source={src} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Shortcut;

const w = (screen_width * 0.8) / 4;

const styles = StyleSheet.create({
  conatiner: {
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLORS.secondary.greyFour,
    borderWidth: 1,
    width: w,
    gap: 5,
  },
  text: {
    ...FONTS.regular.pt12,
    color: COLORS.secondary.black,
  },
});
