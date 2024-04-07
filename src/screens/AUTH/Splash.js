import {useEffect} from 'react';

import {StyleSheet, Text, ImageBackground} from 'react-native';

import CustomStatusBar from '../../components/StatusBar/CustomStatusBar';
import Logo from '../../components/Logo';

import ASSETS from '../../helpers/imports';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';

import {screen_height} from '../../utils/Dimensions';

const Splash = ({navigation}) => {
  const navigateToHome = () => navigation.replace('SignIn');

  useEffect(() => {
    const timeoutId = setTimeout(navigateToHome, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ImageBackground source={ASSETS.SplashBack} style={[THEME.centeredFill]}>
      <CustomStatusBar />
      <Logo style={THEME.centeredFill} />
      <Text style={[FONTS.semibold.pt14, styles.baseText]}>
        Your best choice for e-wallet
      </Text>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  baseText: {
    textAlignVertical: 'bottom',
    color: COLORS.secondary.white,
    marginBottom: screen_height * 0.05,
  },
});
