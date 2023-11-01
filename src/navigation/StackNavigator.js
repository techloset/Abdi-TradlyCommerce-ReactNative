import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import OTPScreenChallenge from '../screens/auth/OTPScreenChallenge';
import BottomNavigator from './BottomNavigator';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="OTPCha" component={OTPScreenChallenge} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
