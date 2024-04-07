import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

import ICONS from '../../helpers/icons';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';
import COLORS from '../../styles/colors';
import ASSETS from '../../helpers/imports';
import CONSTANTS from '../../helpers/CONSTANTS';

import Header from '../../components/Payment/Header';
import BtnGhost from '../../components/Buttons/BtnGhost';
import InfoCard from '../../components/Payment/InfoCard';
import BtnSimple from '../../components/Buttons/BtnSimple';

import {screen_height, screen_width} from '../../utils/Dimensions';
const {primary: p, secondary: s} = COLORS;

const Checkout = ({navigation}) => {
  const gotoScanCode = () => navigation.navigate('ScanBarcode');

  const generateCards = (item, i) => (
    <InfoCard icon={item.icon} text={item.text} title={item.title} key={i} />
  );

  return (
    <ImageBackground source={ASSETS.CheckoutBack} style={[styles.container]}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header goTo={screen => navigation.navigate(screen)} />
      <View style={styles.form}>
        <Image source={ICONS.PRODUCT} style={styles.logo} />
        <View style={styles.headings}>
          <Text style={styles.title}>Total Amount</Text>
          <Text style={styles.amount}>{'$56,000.00'}</Text>
          <Text style={styles.product}>Coca Cola Bottle 600ml</Text>
        </View>
        <View style={styles.cards}>
          {CONSTANTS.CheckoutCards.map(generateCards)}
        </View>
        <View style={styles.footer}>
          <BtnGhost
            textColor={p.orange}
            borderColor={p.orange}
            text="Back"
            style={styles.btnGhost}
            onClick={gotoScanCode}
          />
          <BtnSimple
            back={p.orange}
            color={s.white}
            text="Pay"
            style={styles.btnOrange}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    ...THEME.justifyCenteredFill,
  },
  btnOrange: {width: screen_width * 0.41},
  btnGhost: {width: screen_width * 0.41},
  form: {
    backgroundColor: COLORS.secondary.white,
    ...THEME.centered,
    gap: 15,
    width: screen_width,
    flex: 0.85,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headings: {
    ...THEME.centered,
    gap: 5,
  },
  logo: {
    height: screen_height * 0.15,
    aspectRatio: 1,
  },
  cards: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  footer: {
    ...THEME.row,
    ...THEME.centered,
    gap: 10,
  },
  title: {...FONTS.regular.pt16, color: COLORS.secondary.greyOne},
  amount: {...FONTS.semibold.pt32, color: COLORS.secondary.black},
  product: {...FONTS.semibold.pt14, color: COLORS.primary.blue},
});
