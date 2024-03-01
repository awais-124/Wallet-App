import {StyleSheet} from 'react-native';
const FONT_WEIGHT = {
  REGULAR: 'normal',
  MEDIUM: '500',
  SEMIBOLD: '600',
  BOLD: 'bold',
};

const FONT_SIZE = {
  XS: 12,
  S: 13,
  MS: 14,
  M: 16,
  ML: 18,
  L: 20,
  XL: 24,
  XXL: 32,
};

const FONTS = StyleSheet.create({
  xsRegular: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  sRegular: {
    fontSize: FONT_SIZE.S,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  msRegular: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  mRegular: {
    fontSize: FONT_SIZE.M,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  mlRegular: {
    fontSize: FONT_SIZE.ML,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  lRegular: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  xlRegular: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  xxlRegular: {
    fontSize: FONT_SIZE.XXL,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  xsMedium: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  sMedium: {
    fontSize: FONT_SIZE.S,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  msMedium: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  mMedium: {
    fontSize: FONT_SIZE.M,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  mlMedium: {
    fontSize: FONT_SIZE.ML,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  lMedium: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  xlMedium: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  xxlMedium: {
    fontSize: FONT_SIZE.XXL,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  xsSemiBold: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  sSemiBold: {
    fontSize: FONT_SIZE.S,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  msSemiBold: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  mSemiBold: {
    fontSize: FONT_SIZE.M,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  mlSemiBold: {
    fontSize: FONT_SIZE.ML,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  lSemiBold: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  xlSemiBold: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  xxlSemiBold: {
    fontSize: FONT_SIZE.XXL,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  xsBold: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  sBold: {
    fontSize: FONT_SIZE.S,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  msBold: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  mBold: {
    fontSize: FONT_SIZE.M,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  mlBold: {
    fontSize: FONT_SIZE.ML,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  lBold: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  xlBold: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  xxlBold: {
    fontSize: FONT_SIZE.XXL,
    fontWeight: FONT_WEIGHT.BOLD,
  },
});
export {FONT_WEIGHT, FONT_SIZE, FONTS};
/* 
12 points: Extra Small
13 points: Small
14 points: Medium Small
16 points: Medium (Standard Body Text)
18 points: Medium Large
20 points: Large
24 points: Extra Large
32 points: Double Extra Large or Very Large 
*/
