import {useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import THEME from '../../styles/theme';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';
import ASSETS from '../../helpers/imports';
import CONSTANTS from '../../helpers/CONSTANTS';

import StatusBarBlue from '../../components/StatusBar/CustomStatusBar';
import LabelledInput from '../../components/Inputs/LabelledInput';
import BtnSimple from '../../components/Buttons/BtnSimple';
import DateInput from '../../components/Inputs/DateInput';
import Logo from '../../components/Logo';

import {screen_width} from '../../utils/Dimensions';

const SignUp = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const goToSignIn = () => navigation.navigate('SignIn');
  const goToSignUpPin = () => navigation.navigate('SignUpPin');

  const handleDatePicker = () => setOpen(true);
  const onCancelDate = () => setOpen(false);
  const onConfirmDate = date => {
    setDate(date);
    setOpen(false);
  };

  const {primary: p, secondary: s} = COLORS;
  const ShowInputs = (val, i) => <LabelledInput label={val} key={i} />;

  return (
    <ImageBackground
      source={ASSETS.SignUpBack}
      style={[THEME.fill, styles.container]}>
      <StatusBarBlue />
      <View style={styles.header}>
        <Logo style={{zIndex: 999}} />
      </View>
      <ScrollView style={styles.form}>
        <View style={[THEME.justifyCentered, styles.formBody]}>
          <Text style={[FONTS.bold.pt24, styles.formH1]}>Sign Up</Text>
          {CONSTANTS.SignUpScreenBtnLabels.map(ShowInputs)}
          <DateInput
            label="Birthday"
            onClick={handleDatePicker}
            data={date.toDateString()}
            disabled={false}
          />
          <DatePicker
            androidVariant="nativeAndroid"
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={onConfirmDate}
            onCancel={onCancelDate}
            textColor={s.black}
          />
          <BtnSimple
            text="Sign Up"
            back={p.orange}
            color={s.white}
            onClick={goToSignUpPin}
          />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity onPress={goToSignIn}>
              <Text style={[FONTS.semibold.pt16, {color: p.orange}]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {justifyContent: 'space-evenly', alignItems: 'center'},
  header: {
    flex: 0.4,
    paddingTop: 3,
    width: screen_width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  form: {
    flex: 0.6,
    width: screen_width,
    paddingHorizontal: 20,
    backgroundColor: COLORS.secondary.white,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  formBody: {gap: 15, paddingVertical: 50},
  formH1: {color: COLORS.secondary.black, alignSelf: 'flex-start'},
  footer: {flexDirection: 'row', justifyContent: 'space-between', gap: 5},
});
