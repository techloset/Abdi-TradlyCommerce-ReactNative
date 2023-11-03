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
import StoreHeader from '../(components)/StoreHeader';
import StoreBtn from '../(components)/StoreBtn';
import SeeAllBtnWhite from '../(components)/SeeAllBtnWhite';
import SeeAllBtn from '../(components)/SeeAllBtn';
import SmallBtn from '../(components)/SmallBtn';
import EmptyStore from '../(components)/EmptyStore';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const MyStoreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StoreHeader title={'My Store'} />
      <View style={styles.container}>
        <View style={COMMON.alphaLogo}>
          <Text style={TEXT.alphaLogoText}>T</Text>
        </View>
        <Text style={styles.heading}>Tradly Store</Text>
        <View style={styles.smallBtns}>
          <SmallBtn
            btnColor={COLOR.white}
            color={COLOR.green}
            text={'Edit Store'}
          />
          <SmallBtn
            btnColor={COLOR.green}
            color={COLOR.white}
            text={'View Store'}
          />
        </View>
        <TouchableOpacity style={styles.removeContainer}>
          <Text style={styles.faded}>Remove Store</Text>
        </TouchableOpacity>
      </View>
      <EmptyStore />
    </SafeAreaView>
  );
};

export default MyStoreScreen;

const styles = StyleSheet.create({
  faded: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    opacity: 0.5,
  },
  removeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(12),
    paddingTop: pixelSizeVertical(9),
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    borderTopWidth: widthPixel(1),
    alignSelf: 'stretch',
    marginTop: pixelSizeVertical(27),
  },
  smallBtns: {
    flexDirection: 'row',
    gap: pixelSizeVertical(17),
  },
  heading: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(24),
    color: COLOR.neutral,
    marginTop: pixelSizeVertical(16),
    marginBottom: pixelSizeVertical(20),
  },
  text: {
    marginTop: pixelSizeVertical(28.11),
    marginBottom: pixelSizeVertical(37),
  },
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(50),
    width: '100%',
    height: widthPixel(229),
    backgroundColor: COLOR.white,
  },
});
