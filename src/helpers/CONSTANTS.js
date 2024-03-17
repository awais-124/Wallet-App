const Six = Array(6).fill(0);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

const CONSTANTS = {
  emailRegex,
  NumericButtons,
  Six,
  SignUpScreenBtnLabels,
  ModalMessage,
};

export default CONSTANTS;
