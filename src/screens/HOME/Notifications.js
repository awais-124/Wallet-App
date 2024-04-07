import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import COLORS from '../../styles/colors';
import ICONS from '../../helpers/icons';
import FONTS from '../../styles/typography';
import THEME from '../../styles/theme';
import CONSTANTS from '../../helpers/CONSTANTS';

import TopBar from '../../components/StatusBar/TopBar';

import {screen_height, screen_width} from '../../utils/Dimensions';

const Notifications = ({navigation}) => {
  const [notifs, setNotifs] = useState([]);
  const gotoCheckout = () => navigation.navigate('Checkout');
  const init = () => setNotifs(CONSTANTS.Notifs);

  useEffect(() => {
    const timeoutId = setTimeout(init, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const ListItemSeparator = () => <View style={styles.separator} />;
  const notifGenerator = ({item, index}) => (
    <TouchableWithoutFeedback onPress={gotoCheckout}>
      <View key={index} style={styles.box}>
        <Image source={item.icon} />
        <View style={styles.texts}>
          <Text style={styles.detail}>{item.detail}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      <TopBar screenName="Home" title="Notifications" />
      {notifs.length === 0 ? (
        <View style={styles.empty}>
          <Image source={ICONS.BIGBELL} />
          <Text style={styles.message}>
            You received no notification. We will keep you updated.
          </Text>
        </View>
      ) : (
        <FlatList
          data={notifs}
          renderItem={notifGenerator}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={ListItemSeparator}
          scrollEnabled
        />
      )}
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    ...THEME.fill,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  separator: {
    width: '90%',
    height: 1,
    backgroundColor: COLORS.secondary.greyThree,
    alignSelf: 'center',
  },
  list: {
    flexGrow: 1,
    width: screen_width,
    paddingTop: 15,
  },
  empty: {
    marginTop: 40,
    width: screen_width * 0.872,
    ...THEME.justifyCentered,
    gap: 20,
    borderWidth: 1,
    borderColor: COLORS.secondary.greyTwo,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  message: {
    ...FONTS.regular.pt16,
    color: COLORS.secondary.black,
    textAlign: 'center',
  },
  box: {
    ...THEME.row,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  texts: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
    width: '83%',
  },
  detail: {
    ...FONTS.medium.pt16,
    color: COLORS.secondary.black,
    textAlign: 'left',
  },
  time: {...FONTS.regular.pt13, color: COLORS.secondary.greyOne},
});
