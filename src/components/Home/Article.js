import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';

import {screen_width} from '../../utils/Dimensions';

const Article = ({heading, detail, src}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image source={src} style={{width: '100%'}} />
        <Text style={[FONTS.semibold.pt16, {color: COLORS.secondary.black}]}>
          {heading}
        </Text>
        <Text style={[FONTS.regular.pt13, {color: COLORS.secondary.greyOne}]}>
          {detail}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 10,
    width: screen_width * 0.55,
    marginLeft: 10,
    gap: 5,
  },
});
