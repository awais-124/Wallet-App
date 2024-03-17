import {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Logo from '../components/Logo';
import BtnSimple from '../components/Buttons/BtnSimple';
import LabelledInput from '../components/Inputs/LabelledInput';
import CustomStatusBar from '../components/StatusBar/CustomStatusBar';

import ASSETS from '../helpers/imports';
import COLORS from '../styles/colors';
import FONTS from '../styles/typography';
import THEME from '../styles/theme';

import {screen_height, screen_width} from '../utils/Dimensions';

const {primary: p, secondary: s} = COLORS;

const Home = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = navigation;
  const navigateForward = name => {
    setPassword('');
    setEmail('');
    navigate(name);
  };

  const handlePass = pass => setPassword(pass);
  const handleEmail = email => setEmail(email);

  return (
    <ImageBackground source={ASSETS.SignInBack} style={[THEME.fill]}>
      <KeyboardAvoidingView style={[THEME.centeredFill, styles.container]}>
        <CustomStatusBar />
        <Logo style={styles.logo} />
        <View style={[THEME.col, THEME.justifyCentered, styles.form]}>
          <Text style={[FONTS.bold.pt24, styles.formHeading]}>Sign In</Text>
          <LabelledInput
            label="Email/Phone Number"
            labelColor={s.greyThree}
            data={email}
            onChange={handleEmail}
          />
          <LabelledInput
            label="Password"
            labelColor={s.greyThree}
            data={password}
            onChange={handlePass}
          />
          <BtnSimple
            text="Sign In"
            back={p.orange}
            color={s.white}
            onClick={() => navigateForward('OTP')}
          />
          <TouchableOpacity onPress={() => navigateForward('ForgotPass')}>
            <Text style={[FONTS.semibold.pt14, {color: p.orange}]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View style={[THEME.row, {gap: 3}]}>
            <Text style={[styles.footerText, FONTS.regular.pt14]}>
              Don't have an account yet?
            </Text>
            <TouchableOpacity onPress={() => navigateForward('SignUp')}>
              <Text style={[{color: p.orange}, FONTS.semibold.pt14]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  h1: {
    marginVertical: 40,
    fontSize: 30,
    color: s.white,
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
    backgroundColor: s.white,
    width: screen_width,
    height: screen_height * 0.6,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 40,
    paddingTop: 20,
  },
  formHeading: {
    alignSelf: 'flex-start',
    marginTop: 15,
    marginLeft: 25,
    color: s.black,
  },
});
