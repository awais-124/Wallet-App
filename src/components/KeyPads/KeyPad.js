import {StyleSheet, View} from 'react-native';

import Keys from './Keys';

import THEME from '../../styles/theme';

const KeyPad = ({style, data, setData}) => {
  const handleKeyPress = key => {
    console.log('KEY PRESSED : ', key);
    if (key === 'x') {
      setData(prev => (prev.length !== 0 ? prev?.slice(0, -1) : prev));
    } else {
      setData(prev => (prev.length < 4 ? prev + key : prev));
    }
    console.log('OTP : ', data);
  };

  return (
    <View style={[style, THEME.col, styles.keypad]}>
      <View style={[THEME.row, styles.row]}>
        <Keys num="1" onKeyPressed={handleKeyPress} />
        <Keys num="2" alpha="ABC" onKeyPressed={handleKeyPress} />
        <Keys num="3" alpha="DEF" onKeyPressed={handleKeyPress} />
      </View>
      <View style={[THEME.row, styles.row]}>
        <Keys num="4" alpha="GHI" onKeyPressed={handleKeyPress} />
        <Keys num="5" alpha="JKL" onKeyPressed={handleKeyPress} />
        <Keys num="6" alpha="MNO" onKeyPressed={handleKeyPress} />
      </View>
      <View style={[THEME.row, styles.row]}>
        <Keys num="7" alpha="PQRS" onKeyPressed={handleKeyPress} />
        <Keys num="8" alpha="TUV" onKeyPressed={handleKeyPress} />
        <Keys num="9" alpha="WXYZ" onKeyPressed={handleKeyPress} />
      </View>
      <View style={[THEME.row, styles.row]}>
        <Keys empty={true} isDelete={true} />
        <Keys num="0" onKeyPressed={handleKeyPress} />
        <Keys isDelete={true} onKeyPressed={handleKeyPress} />
      </View>
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  keypad: {
    gap: 8,
    paddingTop: 10,
    paddingBottom: 30,
    backgroundColor: '#CCCED3',
  },
  row: {justifyContent: 'center', gap: 8, height: '22%'},
});
