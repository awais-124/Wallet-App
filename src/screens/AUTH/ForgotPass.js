import {useState} from 'react';

import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import CONSTANTS from '../../helpers/CONSTANTS';
import ASSETS from '../../helpers/imports';
import ICONS from '../../helpers/icons';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';

import Modal from '../../components/Alerts/Modal';
import Overlay from '../../components/Alerts/Overlay';
import BtnSimple from '../../components/Buttons/BtnSimple';
import SimpleInput from '../../components/Inputs/SimpleInput';
import ScreenWrapper from '../../components/Wrappers/ScreenWrapper';
import CustomStatusBar from '../../components/StatusBar/CustomStatusBar';

import {screen_height, screen_width} from '../../utils/Dimensions';

const ForgotPass = ({navigation}) => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isModalShown, setIsModalShown] = useState(false);

  const goBack = () => navigation.goBack();
  const isValidEmail = email => CONSTANTS.emailRegex?.test(email);
  const hideModal = () => setIsModalShown(false);

  const goToResetPassScreen = () => {
    navigation.navigate('ResetPass');
    hideModal();
  };

  const emailCheckHandler = input => {
    setEmail(input);
    setEmailIsValid(isValidEmail(input));
  };

  const showModal = () => {
    setIsModalShown(true);
    Keyboard.dismiss();
    setEmail('');
    setEmailIsValid(false);
  };

  const {primary: p, secondary: s} = COLORS;
  const backgroundColor = emailIsValid ? p.orange : s.greyFour;
  const color = emailIsValid ? s.white : s.greyTwo;

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView style={[THEME.centeredFill, styles.container]}>
        <CustomStatusBar />
        {isModalShown && <Overlay onClick={hideModal} />}
        {isModalShown && (
          <Modal
            style={styles.modal}
            onPress={goToResetPassScreen}
            message={CONSTANTS.ModalMessage.forgotPass}
          />
        )}
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image source={ASSETS.TopBar} style={styles.topBar} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.body}>
          <Image source={ICONS.MESSAGE_BOX} style={styles.icon} />
          <View style={styles.textBox}>
            <Text style={[FONTS.medium.pt20, styles.black]}>
              Enter Your Email Address
            </Text>
            <Text style={[FONTS.regular.pt14, styles.black]}>
              We'll send you a link to reset your password.
            </Text>
          </View>
          <SimpleInput
            placeHolder="Enter Your Email Address"
            data={email}
            phColor={COLORS.secondary.greyTwo}
            onChange={emailCheckHandler}
          />
        </View>
        <View style={styles.footer}>
          <BtnSimple
            text="Reset"
            back={backgroundColor}
            color={color}
            isDisabled={!emailIsValid}
            onClick={showModal}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary.white,
    paddingBottom: 22,
  },
  header: {
    backgroundColor: COLORS.primary.blue,
    width: screen_width,
    marginTop: 0,
    position: 'absolute',
    top: 0,
  },
  icon: {width: screen_width * 0.15, aspectRatio: 1},
  body: {
    flex: 0.6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  topBar: {width: '100%'},
  textBox: {gap: 8},
  black: {color: COLORS.secondary.black, textAlign: 'center'},
  footer: {
    position: 'absolute',
    bottom: 10,
  },
  modal: {position: 'absolute', top: screen_height * 0.32},
});
