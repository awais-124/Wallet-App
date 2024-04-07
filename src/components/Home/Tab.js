import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import THEME from '../../styles/theme';

const Tab = ({title, icon}) => (
  <TouchableWithoutFeedback>
    <View style={styles.box}>
      {icon && <Image source={icon} />}
      <Text styles={styles.title}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default Tab;

const styles = StyleSheet.create({
  box: {
    ...THEME.centered,
    ...THEME.col,
    gap: 5,
    padding: 5,
    aspectRatio: 1,
  },
});
