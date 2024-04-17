import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/screens/AUTH/Splash';
import SignInScreen from './src/screens/AUTH/SignIn';
import OTPScreen from './src/screens/AUTH/OTP';
import ForgotPass from './src/screens/AUTH/ForgotPass';
import ResetPass from './src/screens/AUTH/ResetPass';
import SignUp from './src/screens/AUTH/SignUp';
import SignUpPin from './src/screens/AUTH/SignUpPin';
import Home from './src/screens/HOME/Home';
import Notifications from './src/screens/HOME/Notifications';
import ScanBarcode from './src/screens/PAYMENT/ScanBarcode';
import MyBarcode from './src/screens/PAYMENT/MyBarcode';
import Checkout from './src/screens/PAYMENT/Checkout';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="ResetPass" component={ResetPass} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpPin" component={SignUpPin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ScanBarcode" component={ScanBarcode} />
        <Stack.Screen name="MyBarcode" component={MyBarcode} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
