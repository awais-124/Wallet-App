import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import BottomBar from '../components/BottomBar';
import Logo from '../components/Logo';
import BtnSimple from '../components/Buttons/BtnSimple';
import LabelledInput from '../components/Inputs/LabelledInput';

import COLORS from '../styles/colors';
import ASSETS from '../helpers/imports';
import FONTS from '../styles/typography';
import THEME from '../styles/theme';

import {screen_height, screen_width} from '../utils/Dimensions';

const Home = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={[THEME.centeredFill, styles.container]}>
      <StatusBar backgroundColor={COLORS.primary.blue} />
      <View style={styles.imageWrapper}>
        <Image
          source={ASSETS.triangleLarge}
          style={[styles.image, styles.large]}
        />
        <Image
          source={ASSETS.triangleSmall}
          style={[styles.image, styles.small]}
        />
      </View>
      <Logo style={styles.logo} />
      <View style={[THEME.col, styles.form]}>
        <Text style={[FONTS.bold.pt24, styles.formHeading]}>Sign In</Text>
        <LabelledInput
          label="Email/Phone Number"
          labelColor={COLORS.secondary.greyThree}
        />
        <LabelledInput
          label="Password"
          isPassword={true}
          labelColor={COLORS.secondary.greyThree}
        />
        <BtnSimple
          text="Sign In"
          back={COLORS.primary.orange}
          color={COLORS.secondary.white}
          onClick={() => navigation.navigate('OTP')}
        />
        <TouchableOpacity>
          <Text style={[FONTS.semibold.pt14, {color: COLORS.primary.orange}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={[THEME.row, styles.footerText, {gap: 3}]}>
          <Text style={[styles.footerText, FONTS.regular.pt14]}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity>
            <Text style={[{color: COLORS.primary.orange}, FONTS.semibold.pt14]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomBar inner={COLORS.secondary.black} />
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary.blue,
  },
  imageWrapper: {
    position: 'absolute',
    top: screen_height * 0.03,
    height: screen_height * 0.32,
    width: screen_width,
  },
  image: {width: '120%'},
  large: {marginTop: 50},
  small: {position: 'absolute', top: 120},
  h1: {
    marginVertical: 40,
    fontSize: 30,
    color: COLORS.secondary.white,
    fontWeight: 'bold',
  },
  logo: {
    position: 'absolute',
    top: screen_height * 0.038,
    left: screen_width * 0.32,
  },
  form: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary.white,
    width: screen_width,
    height: screen_height * 0.6,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 40,
  },
  formHeading: {
    alignSelf: 'flex-start',
    marginTop: 15,
    marginLeft: 25,
    color: COLORS.secondary.black,
  },
});
