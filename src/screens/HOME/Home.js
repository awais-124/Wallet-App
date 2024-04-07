import {useRef} from 'react';

import {
  Image,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import THEME from '../../styles/theme';
import COLORS from '../../styles/colors';
import CONSTANTS from '../../helpers/CONSTANTS';
import ICONS from '../../helpers/icons';

import Header from '../../components/Home/Header';
import HorizantalList from '../../components/Home/HorizantalList';
import CustomStatusBar from '../../components/StatusBar/CustomStatusBar';
import ComponentGenerator from '../../components/Home/ComponentGenerator';

import {screen_width} from '../../utils/Dimensions';
const {primary: p, secondary: s} = COLORS;

const Home = ({navigation}) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < -50) {
          navigation.navigate('SignIn');
        }
      },
    }),
  ).current;

  const gotoScanCode = () => navigation.navigate('ScanBarcode');

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      {...panResponder.panHandlers}>
      <CustomStatusBar />
      <View style={[THEME.fill, styles.container]}>
        <Header />
        <View style={styles.actions}>
          {CONSTANTS.QuickActions.map(ComponentGenerator.generateActions)}
        </View>
        <View style={styles.buttons}>
          {CONSTANTS.HomeShortcut.map(ComponentGenerator.generateShortcuts)}
        </View>
        <HorizantalList
          content={CONSTANTS.Card}
          generator={ComponentGenerator.renderCard}
          style={styles.cards}
          title="Promo For You"
        />
        <HorizantalList
          content={CONSTANTS.Articles}
          generator={ComponentGenerator.renderArticle}
          style={styles.articles}
          title="Financial Articles"
        />
        <View style={styles.footer}>
          {CONSTANTS.BottomNav.map(ComponentGenerator.renderTab)}
        </View>
        <TouchableWithoutFeedback onPress={gotoScanCode}>
          <View style={styles.pay}>
            <Image source={ICONS.PAY} />
            <Text style={styles.payText}>Pay</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    ...THEME.fill,
    backgroundColor: s.white,
    gap: 30,
  },
  actions: {
    ...THEME.row,
    ...THEME.justifyCentered,
    backgroundColor: COLORS.secondary.white,
    padding: 10,
    elevation: 5,
    zIndex: 999,
    marginRight: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 100,
    left: screen_width * 0.05,
  },
  buttons: {
    ...THEME.row,
    ...THEME.justifyCentered,
    backgroundColor: COLORS.secondary.white,
    padding: 20,
  },
  cards: {gap: 20},
  articles: {gap: 20},
  footer: {
    ...THEME.row,
    ...THEME.justifyCentered,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  pay: {
    backgroundColor: COLORS.primary.blue,
    ...THEME.centered,
    width: screen_width * 0.24,
    aspectRatio: 1,
    padding: 20,
    borderRadius: 50,
    elevation: 20,
    zIndex: 999,
    position: 'absolute',
    left: screen_width * 0.38,
    bottom: 50,
  },
  payText: {color: COLORS.secondary.white},
});
