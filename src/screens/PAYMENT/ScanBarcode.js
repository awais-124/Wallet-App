import React, {useState} from 'react';

import {StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

import ICONS from '../../helpers/icons';

import Header from '../../components/Payment/Header';
import Footer from '../../components/Payment/Footer';
import BarCode from '../../components/Payment/BarCode';
import Background from '../../components/Payment/Background';

import {screen_height, screen_width} from '../../utils/Dimensions';

const ScanBarcode = ({navigation}) => {
  const [tab, setTab] = useState(true);

  const Icon = () => (
    <TouchableWithoutFeedback>
      <Image source={ICONS.TRANSPARENT} style={styles.icon} />
    </TouchableWithoutFeedback>
  );

  return (
    <Background tab={tab}>
      <Header goTo={navigation.navigate} />
      {!tab && <BarCode />}
      {tab && <Icon />}
      <Footer scan={tab} setScan={setTab} />
    </Background>
  );
};

export default ScanBarcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  black: {},
  blue: {
    marginTop: screen_height * 0.2,
    height: screen_height * 0.31,
    width: screen_width,
  },
  icon: {
    position: 'absolute',
    right: 25,
    bottom: screen_height * 0.38,
  },
});
