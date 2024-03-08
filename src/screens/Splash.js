import {useEffect} from 'react';

import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BottomBar from '../components/BottomBar';
import Logo from '../components/Logo';

import {screen_height, screen_width} from '../utils/Dimensions';

import ASSETS from '../helpers/imports';
import COLORS from '../styles/colors';
import FONTS from '../styles/typography';

const Splash = () => {
  const navigation = useNavigation();
  // replace replaces previous screen from stack
  const navigateToHome = () => navigation.replace('SignIn');

  useEffect(() => {
    const timeoutId = setTimeout(navigateToHome, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary.blue} />
      <Logo style={styles.logo} />
      <View style={styles.pattern}>
        <Image
          source={ASSETS.triangleSmall}
          style={[styles.images, styles.small]}
        />
        <Image
          source={ASSETS.triangleLarge}
          style={[styles.images, styles.large]}
        />
      </View>
      <Text style={styles.baseText}>Your best choice is for e-wallet</Text>
      <BottomBar inner="#fff" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.primary.blue,
  },
  logo: {
    position: 'absolute',
    left: screen_width * 0.33,
    top: screen_height * 0.32,
  },
  pattern: {
    position: 'absolute',
    bottom: 0,
    width: screen_width,
    height: screen_height * 0.325,
  },
  images: {width: '125%'},
  small: {position: 'absolute', bottom: 0},
  baseText: {
    ...FONTS.semibold.pt14,
    color: COLORS.secondary.white,
    marginBottom: screen_height * 0.05,
  },
});
