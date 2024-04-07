import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import ICONS from '../../helpers/icons';
import COLORS from '../../styles/colors';
import THEME from '../../styles/theme';
import FONTS from '../../styles/typography';

import KeyPad from '../../components/KeyPads/KeyPad';
import Danger from '../../components/Alerts/Danger';
import OTPInput from '../../components/Inputs/OTPInput';
import CustomStatusBar from '../../components/StatusBar/CustomStatusBar';

import {screen_height, screen_width} from '../../utils/Dimensions';

const MAX_LENGTH = 4;
const OTP = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const canGoBack = navigation.canGoBack();

  const [otp, setOtp] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(false);

  let currentIndex = null;
  const getIndex = i => (currentIndex = i);
  const toggleALert = () => setIsOtpValid(prev => !prev);
  const clearInput = () =>
    setOtp(prev => (prev.length === MAX_LENGTH ? '' : prev));

  useEffect(() => {
    let timer = 0;
    if (otp.length !== MAX_LENGTH) return;

    if (+otp > 5000) {
      timer = setTimeout(() => {
        navigation.navigate('Home');
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

  const handleKeyStroke = key => {
    console.log('KEY PRESSED : ', key);
    if (otp.includes(' ')) {
      setOtp(prev => {
        const array = prev.split('');
        array.forEach(val => (val === ' ' && key !== 'x' ? key : val));
        return array.join('');
      });
    }
    if (currentIndex === null) {
      if (key === 'x') {
        setOtp(prev => (prev.length !== 0 ? prev?.slice(0, -1) : prev));
      } else {
        setOtp(prev => (prev.length < MAX_LENGTH ? prev + key : prev));
      }
    } else {
      setOtp(prev => {
        const otpArray = prev.split('');
        otpArray[currentIndex] = key === 'x' ? ' ' : key;
        return otpArray.join('');
      });
      currentIndex = null;
    }
    console.log('OTP : ', otp);
  };

  return (
    <View style={[THEME.fill, styles.container]}>
      <CustomStatusBar />
      {isOtpValid && <Danger title="The OTP Code is Invalid." />}
      <View style={styles.back}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.icon}
          disabled={!canGoBack}>
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
      <OTPInput data={otp} maxLength={MAX_LENGTH} onCellPressed={getIndex} />
      <KeyPad
        style={styles.keypad}
        data={otp}
        setData={setOtp}
        onKeyStroke={handleKeyStroke}
      />
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
