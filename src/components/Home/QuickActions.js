import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import THEME from '../../styles/theme';
import FONTS from '../../styles/typography';

const QuickActions = ({src, title, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image source={src} />
        <Text style={FONTS.medium.pt14}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  container: {
    ...THEME.centered,
    ...THEME.col,
    gap: 5,
    padding: 5,
    width: '30%',
    aspectRatio: 1,
  },
});
