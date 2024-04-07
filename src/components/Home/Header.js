import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';

import ICONS from '../../helpers/icons';
import ASSETS from '../../helpers/imports';
import THEME from '../../styles/theme';
import FONTS from '../../styles/typography';
import COLORS from '../../styles/colors';

const {primary: p, secondary: s} = COLORS;

const Header = () => {
  const navigation = useNavigation();
  const [showBalance, setShowBalance] = useState(false);

  const toggleEye = () => setShowBalance(prev => !prev);
  const goToNotifications = () => navigation.navigate('Notifications');

  return (
    <ImageBackground
      style={[THEME.centered, styles.header]}
      source={ASSETS.HomeBack}>
      <View style={[THEME.row, THEME.justifyCentered, styles.head]}>
        <View style={[styles.content]}>
          <Text style={[FONTS.medium.pt16, {color: s.white}]}>
            Saldo Balance
          </Text>
          <View style={styles.balance}>
            <Text style={[FONTS.bold.pt24, {color: s.white}]}>
              {!showBalance ? '$5000.00' : '••••••••••••'}
            </Text>
            <TouchableWithoutFeedback onPress={toggleEye}>
              <Image source={showBalance ? ICONS.EYE_SHOW : ICONS.EYE_HIDE} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={goToNotifications}>
          <Image source={ICONS.BELL} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {padding: 20, paddingBottom: 80, marginBottom: 30},
  head: {width: '100%'},
  balance: {
    ...THEME.row,
    ...THEME.justifyCentered,
    gap: 10,
  },
  content: {gap: 10},
});
