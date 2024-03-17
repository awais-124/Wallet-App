import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import ICONS from '../helpers/icons';
import COLORS from '../styles/colors';
import THEME from '../styles/theme';
import FONTS from '../styles/typography';

import CustomStatusBar from '../components/StatusBar/CustomStatusBar';
import KeyPad from '../components/KeyPads/KeyPad';
import OTPInput from '../components/Inputs/OTPInput';
import Danger from '../components/Alerts/Danger';

import {screen_height, screen_width} from '../utils/Dimensions';

const OTP = ({navigation}) => {
  const goToSignInScreen = () => navigation.navigate('SignIn');
  const [otp, setOtp] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(false);

  const clearInput = () => setOtp(prev => (prev.length === 4 ? '' : prev));
  const toggleALert = () => setIsOtpValid(prev => !prev);

  useEffect(() => {
    let timer = 0;
    if (otp.length !== 4) return;
    if (+otp > 5000) {
      timer = setTimeout(() => {
        navigation.navigate('ForgotPass');
        setOtp('');
      }, 1000);
    } else {
      toggleALert();
      timer = setTimeout(() => {
        clearInput();
        toggleALert();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [otp]);

  return (
    <View style={[THEME.fill, styles.container]}>
      <CustomStatusBar />
      {isOtpValid && <Danger title="The OTP Code is Invalid." />}
      <View style={styles.back}>
        <TouchableOpacity onPress={goToSignInScreen} style={styles.icon}>
          <Image source={ICONS.ARROW_LEFT} />
        </TouchableOpacity>
      </View>
      <Image source={ICONS.LOCK} style={styles.lock} />
      <View style={[THEME.centered, styles.textBox]}>
        <Text style={[FONTS.medium.pt20, styles.message]}>
          Enter the OTP Code
        </Text>
        <Text style={[FONTS.regular.pt14, styles.message]}>
          We've sent you an OTP code to
        </Text>
        <Text style={[FONTS.bold.pt16, styles.message]}>08768262427</Text>
      </View>
      <OTPInput data={otp} maxLength={4} />
      <KeyPad style={styles.keypad} dataa={otp} setData={setOtp} />
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary.blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0,
  },
  message: {color: COLORS.secondary.white},
  textBox: {gap: 4},
  back: {width: screen_width, paddingLeft: 10},
  icon: {width: screen_width * 0.064, padding: 1.5},
  keypad: {height: screen_height * 0.4, width: screen_width},
});
