import {StyleSheet, ImageBackground, StatusBar} from 'react-native';

import ASSETS from '../../helpers/imports';
import THEME from '../../styles/theme';

const Background = ({tab = true, children}) => {
  return (
    <ImageBackground
      source={tab ? ASSETS.ScanBack : ASSETS.PlaneBlue}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    ...THEME.justifyCenteredFill,
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    paddingTop: 20,
  },
});
