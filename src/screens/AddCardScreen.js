import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import WishlistHeader from '../(components)/WishlistHeader';
import GreenBtn from '../(components)/GreenBtn';
import React, {useState} from 'react';
import AddressInput from '../(components)/AddressInput';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const AddCardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <WishlistHeader title={'Add Card'} />
      <View style={styles.container_1}>
        <Image
          style={styles.cardImg}
          source={require('../assets/images/mastercard.png')}
        />
      </View>
      <View style={styles.container_2}>
        <View>
          <Text style={styles.inputLabel}>Name</Text>
          <AddressInput placeholder={'Tradly Team'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Phone</Text>
          <AddressInput placeholder={'+621234567890'} />
        </View>
        <View style={styles.inputsRow}>
          <View>
            <Text style={styles.inputLabel}>Street address</Text>
            <TextInput
              style={[
                styles.input,
                {
                  width: widthPixel(197),
                },
              ]}
              placeholderTextColor={'#333A42'}
              placeholder={'12/08'}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>City</Text>
            <TextInput
              style={[
                styles.input,
                {
                  width: widthPixel(83),
                },
              ]}
              placeholderTextColor={'#333A42'}
              placeholder={'***'}
            />
          </View>
        </View>
      </View>
      {/* bottom */}
      <View style={COMMON.bottom_Bar}>
        <GreenBtn
          text={'Add Credit Card'}
          handleFunc={() => navigation.navigate('Checkout')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratMedium,
    lineHeight: fontPixel(24),
    alignSelf: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(14),
    opacity: 0.5,
  },
  container_2: {
    paddingHorizontal: pixelSizeVertical(23.5),
    marginTop: pixelSizeVertical(20),
    gap: pixelSizeVertical(25),
  },
  cardImg: {
    width: widthPixel(309),
    height: widthPixel(183.031),
  },
  container_1: {
    height: widthPixel(220),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(7),
    backgroundColor: COLOR.bg,
  },
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
});
