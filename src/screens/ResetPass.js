import {useState, useRef} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
} from 'react-native';

import Modal from '../components/Alerts/Modal';
import Overlay from '../components/Alerts/Overlay';
import BtnSimple from '../components/Buttons/BtnSimple';
import LabelledInput from '../components/Inputs/LabelledInput';
import CustomStatusBar from '../components/StatusBar/CustomStatusBar';

import CONSTANTS from '../helpers/CONSTANTS';
import ICONS from '../helpers/icons';
import FONTS from '../styles/typography';
import COLORS from '../styles/colors';
import THEME from '../styles/theme';

import {screen_height} from '../utils/Dimensions';

const ResetPass = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [isModalShown, setIsModalShown] = useState(false);
  const [password, setPassword] = useState('');

  const isPasswordEmpty = password.length === 0;

  const scrollToEnd = () => {
    if (scrollViewRef.current)
      scrollViewRef.current.scrollToEnd({animated: true});
    else console.log('CALLLED');
  };
  const passHandler = value => setPassword(value);
  const showModal = () => {
    setIsModalShown(true);
    Keyboard.dismiss();
  };
  const hideModal = () => {
    setIsModalShown(false);
    setPassword('');
    navigation.navigate('SignUp');
  };

  const {primary: p, secondary: s} = COLORS;
  const backgroundColor = !isPasswordEmpty ? p.orange : s.greyFour;
  const color = !isPasswordEmpty ? s.white : s.greyTwo;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      ref={scrollViewRef}
      keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView
        style={[THEME.justifyCenteredFill, styles.container]}>
        <CustomStatusBar light={false} b={false} />
        {isModalShown && <Overlay onClick={hideModal} />}
        {isModalShown && (
          <Modal
            style={styles.modal}
            onPress={hideModal}
            message={CONSTANTS.ModalMessage.resetPass}
          />
        )}
        <View style={styles.body}>
          <Image source={ICONS.MESSAGE_BOX} />
          <View style={styles.textBox}>
            <Text style={[FONTS.medium.pt20, styles.black]}>
              Reset Password
            </Text>
            <Text style={[FONTS.regular.pt14, styles.black]}>
              Create Your New Password
            </Text>
          </View>
          <View style={styles.inputs}>
            <LabelledInput
              label="New Password"
              isPassword={true}
              data={password}
              labelColor={s.black}
              onChange={passHandler}
              onFocused={scrollToEnd}
            />
            <LabelledInput
              label="Confirm New Password"
              isPassword={true}
              data={password}
              labelColor={s.black}
              onChange={passHandler}
              onFocused={scrollToEnd}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <BtnSimple
            text="Save Password"
            back={backgroundColor}
            color={color}
            onClick={showModal}
            isDisabled={isPasswordEmpty}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ResetPass;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary.white,
  },
  container: {
    backgroundColor: COLORS.secondary.white,
    paddingBottom: 10,
    paddingTop: screen_height * 0.1,
  },
  body: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
  },
  textBox: {gap: 8},
  inputs: {gap: 10},
  black: {color: COLORS.secondary.black, textAlign: 'center'},
  footer: {justifyContent: 'flex-end', marginTop: 5},
  modal: {position: 'absolute', top: screen_height * 0.32},
});