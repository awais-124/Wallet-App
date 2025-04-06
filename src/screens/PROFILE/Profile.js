import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BtnIcon from '../../components/Buttons/BtnIcon';
import ScreenWrapper from '../../components/Wrappers/ScreenWrapper';
import CustomStatusBar from '../../components/StatusBar/CustomStatusBar';
import COLORS from '../../styles/colors';
import ASSETS from '../../helpers/imports';

const Profile = () => {
  return (
    <ScreenWrapper>
      <CustomStatusBar />
      <View style={styles.container}>
        <Image source={ASSETS.HomeBack} style={styles.headImage} />
        <BtnIcon
          text="Logout"
          back={COLORS.secondary.red}
          color={COLORS.secondary.white}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headImage: {
    width: '100%',
  },
});
