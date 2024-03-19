import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

import THEME from '../../styles/theme';
import FONTS from '../../styles/typography';
import COLORS from '../../styles/colors';
import CONSTANTS from '../../helpers/CONSTANTS';

import Header from '../../components/Home/Header';
import CustomStatusBar from '../../components/StatusBar/CustomStatusBar';
import ComponentGenerator from '../../components/Home/ComponentGenerator';

import {screen_width} from '../../utils/Dimensions';
import HorizantalList from '../../components/Home/HorizantalList';

const {primary: p, secondary: s} = COLORS;

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
          title="Finacial Articles"
        />
        <View style={styles.footer}></View>
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
  footer: {},
});
