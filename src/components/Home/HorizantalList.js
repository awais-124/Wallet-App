import React from 'react';

import {StyleSheet, Text, View, FlatList} from 'react-native';

import COLORS from '../../styles/colors';
import FONTS from '../../styles/typography';

const HorizantalList = ({style, content, generator, title}) => {
  return (
    <View style={style}>
      <Text style={styles.textStyle}>{title}</Text>
      <FlatList
        data={content}
        horizontal
        renderItem={generator}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizantalList;

const styles = StyleSheet.create({
  textStyle: {
    ...FONTS.semibold.pt20,
    color: COLORS.secondary.black,
    paddingLeft: 20,
  },
});
