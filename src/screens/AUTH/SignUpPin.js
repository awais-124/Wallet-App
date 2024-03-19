import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import CustomStatusBar from '../../components/StatusBar/CustomStatusBar';
import NumericKey from '../../components/KeyPads/NumericKey';
import Overlay from '../../components/Alerts/Overlay';
import Danger from '../../components/Alerts/Danger';
import Modal from '../../components/Alerts/Modal';

import COLORS from '../../styles/colors';
import THEME from '../../styles/theme';
import FONTS from '../../styles/typography';
import CONSTANTS from '../../helpers/CONSTANTS';

import {screen_width, screen_height} from '../../utils/Dimensions';

const SignUpPin = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [isPinValid, setIsPinValid] = useState(1);
  const [isModalShown, setIsModalShown] = useState(false);
  const show = !isPinValid && pin.length >= 6;

  const hideModal = () => {
    setIsModalShown(false);
    navigation.navigate('Splash');
  };

  useEffect(() => {
    let timer = 0;
    if (pin.length < 6) {
      return;
    }
    if (pin < 555555) {
      setIsPinValid(false);
      timer = setTimeout(() => {
        setIsPinValid(true);
        setPin('');
      }, 2000);
    } else {
      setIsPinValid(true);
      setIsModalShown(true);
      setPin('');
    }
    return () => clearTimeout(timer);
  }, [pin]);

  const handlePin = key => {
    if (key === 'x') {
      setPin(prev => (prev.length !== 0 ? prev.slice(0, -1) : prev));
    } else if (key === 'CL') {
      setPin('');
    } else {
      setPin(prev =>
        prev.length >= 6 && !isModalShown ? prev : (prev += key),
      );
      console.log(pin);
    }
  };

  const {white: w, darkBlue: db} = COLORS.secondary;
  const bg = index => (index < pin.length ? w : db);
  const generateCircles = (_, index) => (
    <View style={[{backgroundColor: bg(index)}, styles.circle]} key={index} />
  );

  const generateKeyPad = (val, index) => (
    <NumericKey num={val} key={index} onClick={handlePin} />
  );

  return (
    <View style={[THEME.fill, styles.container]}>
      <CustomStatusBar />
      {isModalShown && <Overlay onClick={hideModal} />}
      {isModalShown && (
        <Modal
          style={styles.modal}
          onPress={hideModal}
          title="Continue"
          color={COLORS.secondary.white}
          message={CONSTANTS.ModalMessage.signUpPin}
        />
      )}
      <View style={[THEME.centered, styles.headings]}>
        <Text style={[FONTS.medium.pt20, styles.h]}>Set Up Your PIN</Text>
        <Text style={[FONTS.regular.pt14, styles.h]}>
          Security code is used to verify your every transaction to be more
          secure
        </Text>
      </View>
      <View style={styles.box}>{CONSTANTS.Six.map(generateCircles)}</View>
      <View style={styles.keypad}>
        {CONSTANTS.NumericButtons.map(generateKeyPad)}
      </View>
      {show && <Danger title="The pin you entered is wrong" top={0.88} />}
    </View>
  );
};

export default SignUpPin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary.blue,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  headings: {
    flex: 0.3,
    gap: 15,
    paddingHorizontal: 20,
  },
  h: {
    color: COLORS.secondary.white,
    textAlign: 'center',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  box: {
    flex: 0.075,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 25,
  },
  keypad: {
    flex: 0.625,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: screen_width * 0.75,
    gap: 20,
  },
  modal: {position: 'absolute', top: screen_height * 0.32},
});
