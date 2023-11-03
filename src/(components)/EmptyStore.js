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
// icons
import StoreMainIcon from '../assets/images/icons/storeMain.svg';
import StoreHeader from './StoreHeader';
import StoreBtn from './StoreBtn';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const EmptyStore = ({navigation}) => {
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <View style={styles.container}>
        <Text style={[TEXT.title, styles.text]}>You Dont Have a Product</Text>
        <StoreBtn
          text={'Add Product'}
          color={COLOR.green}
          handleFunc={() => navigation.navigate('CreateStore')}
        />
      </View>
    </SafeAreaView>
  );
};

export default EmptyStore;

const styles = StyleSheet.create({
  text: {
    marginBottom: pixelSizeVertical(37),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(59),
  },
});
