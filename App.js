import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/screens/Splash';
import SignInScreen from './src/screens/SignIn';
import OTPScreen from './src/screens/OTP';
import ForgotPass from './src/screens/ForgotPass';
import ResetPass from './src/screens/ResetPass';
import SignUp from './src/screens/SignUp';
import SignUpPin from './src/screens/SignUpPin';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
