import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import Keys from './Keys';

import THEME from '../../styles/theme';
import ICONS from '../../helpers/icons';
import CONSTANTS from '../../helpers/CONSTANTS';

import {screen_width} from '../../utils/Dimensions';

const KeyPad = ({style, onKeyStroke}) => {
  const generateKeypad = (item, index) => (
    <Keys
      num={item.num}
      alpha={item.alpha}
      key={index}
      onKeyPressed={onKeyStroke}
    />
  );

  const DeleteKey = () => {
    return (
      <TouchableWithoutFeedback onPress={() => onKeyStroke('x')}>
        <View style={[THEME.row, styles.delete]}>
          <Image source={ICONS.DELETE} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={[style, THEME.col, styles.keypad]}>
      {CONSTANTS.KeyPad.map(generateKeypad)}
      <View style={[THEME.row, styles.lastRow]}>
        <View style={styles.cell}></View>
        <Keys num="0" onKeyPressed={onKeyStroke} />
        <DeleteKey />
      </View>
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  keypad: {
    padding: 10,
    flexWrap: 'wrap',
    ...THEME.justifyCentered,
    ...THEME.row,
    backgroundColor: '#CCCED3',
    gap: 8,
  },
  lastRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  delete: {
    ...THEME.centered,
    backgroundColor: '#CCCED3',
    width: screen_width * 0.3,
    height: '100%',
    padding: 10,
  },
  cell: {
    width: screen_width * 0.3,
  },
});
