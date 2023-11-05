import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import React from 'react';
import StoreProfileHeader from '../(components)/StoreProfileHeader';
// icons

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const StoreProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StoreProfileHeader title={'Tradly Store'} />
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

export default StoreProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: widthPixel(240),
    width: '100%',
    backgroundColor: COLOR.white,
    borderRadius: pixelSizeVertical(10),
    marginTop: pixelSizeVertical(-10),
  },
});
