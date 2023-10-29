import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  Animated,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR} from '../styles/consts/GlobalStyles';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: COLOR.green, flex: 1}}>
      <Text>HOME</Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
