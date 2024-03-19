import ICONS from './icons';
import ASSETS from './imports';

const Six = Array(6).fill(0);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const KeyPad = [
  {alpha: '', num: '1'},
  {alpha: 'ABC', num: '2'},
  {alpha: 'DEF', num: '3'},
  {alpha: 'GHI', num: '4'},
  {alpha: 'JKL', num: '5'},
  {alpha: 'MNO', num: '6'},
  {alpha: 'PQRS', num: '7'},
  {alpha: 'TUV', num: '8'},
  {alpha: 'WXYZ', num: '9'},
];

const NumericButtons = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'CL',
  '0',
  'x',
];

const ModalMessage = {
  forgotPass: "We've sent you a link to reset your password. Check your email!",
  resetPass: 'Yay! Your new password has been saved.',
  signUpPin: 'Yay! Your PIN code has been created. Continue to B-Wallet!',
};

const SignUpScreenBtnLabels = [
  'Name',
  'Phone Number',
  'Email Address',
  'Password',
];

const HomeShortcut = [
  {text: 'Internet', icon: ICONS.INTERNET},
  {text: 'Gold', icon: ICONS.GOLD},
  {text: 'Electricity', icon: ICONS.ELECTRICITY},
  {text: 'Others', icon: ICONS.OTHERS},
];

const Card = [
  {
    id: 1,
    h1: 'Doorprice Handphone',
    h2: 'Get coupons now',
    src: ASSETS.DummySmall,
  },
  {
    id: 2,
    h1: 'Doorprice Handphone',
    h2: 'Get coupons now',
    src: ASSETS.DummySmall,
  },
  {
    id: 3,
    h1: 'Doorprice Handphone',
    h2: 'Get coupons now',
    src: ASSETS.DummySmall,
  },
  {
    id: 4,
    h1: 'Doorprice Handphone',
    h2: 'Get coupons now',
    src: ASSETS.DummySmall,
  },
];

const Articles = [
  {
    id: 1,
    heading: 'Lorem ipsum dolor',
    detail: 'Lorem ipsum dolor sedulur gas',
    src: ASSETS.DummyLarge,
  },
  {
    id: 2,
    heading: 'Lorem ipsum dolor',
    detail: 'Lorem ipsum dolor sedulur gas',
    src: ASSETS.DummyLarge,
  },
  {
    id: 3,
    heading: 'Lorem ipsum dolor',
    detail: 'Lorem ipsum dolor sedulur gas',
    src: ASSETS.DummyLarge,
  },
  {
    id: 4,
    heading: 'Lorem ipsum dolor',
    detail: 'Lorem ipsum dolor sedulur gas',
    src: ASSETS.DummyLarge,
  },
];

const QuickActions = [
  {
    id: 1,
    text: 'Top Up',
    src: ICONS.TOPUP,
  },
  {
    id: 2,
    text: 'Send',
    src: ICONS.SEND,
  },
  {
    id: 3,
    text: 'Request',
    src: ICONS.REQUEST,
  },
];

const CONSTANTS = {
  QuickActions,
  Articles,
  Card,
  emailRegex,
  KeyPad,
  NumericButtons,
  Six,
  SignUpScreenBtnLabels,
  ModalMessage,
  HomeShortcut,
};

export default CONSTANTS;
