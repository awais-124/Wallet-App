import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  ImageBackground,
} from 'react-native';

import ASSETS from '../../helpers/imports';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';

import {screen_height, screen_width} from '../../utils/Dimensions';

const TopBar = ({screenName, title}) => {
  const navigation = useNavigation();
  const goToHome = () => navigation.navigate(screenName);

  return (
    <View>
      <View style={styles.header}>
        <ImageBackground source={ASSETS.TopBar} style={styles.topBar}>
          <TouchableWithoutFeedback onPress={goToHome}>
            <View style={styles.press} />
          </TouchableWithoutFeedback>
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    width: screen_width,
    height: screen_height * 0.09,
    ...THEME.centered,
    ...THEME.row,
  },
  title: {
    ...FONTS.medium.pt16,
    color: COLORS.secondary.white,
  },
  header: {
    backgroundColor: COLORS.primary.blue,
    width: screen_width,
    marginTop: 0,
  },
  press: {
    width: screen_width * 0.15,
    height: screen_height * 0.09,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
