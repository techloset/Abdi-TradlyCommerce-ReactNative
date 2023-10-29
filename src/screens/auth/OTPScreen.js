import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLOR, FONT_FAMILY} from '../../styles/consts/GlobalStyles';
import ratio from '../../styles/consts/ratio';
import WhiteBtn from '../../(components)/WhiteBtn';
import BackIcon from '../../assets/images/icons/backIcon.svg';
import NumberInput from '../../(components)/NumberInput';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const OTPScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.header}>
        <BackIcon width={20} />
      </TouchableOpacity>
      <View style={styles.containerCenter}>
        <Text style={styles.headingText}>Welcome to tradly</Text>
        <Text style={styles.infoText}>
          We have sent you an SMS with a code to enter number
        </Text>
        <View style={styles.inputsContainer}>
          <NumberInput placeholder={'First Name'} />
        </View>
        <Text style={styles.bottomText}>Or login with Social network</Text>
        <WhiteBtn
          text={'Next'}
          handleFunc={() => navigation.navigate('OTPCha')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  bottomText: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.434),
    marginTop: pixelSizeVertical(60),
    marginBottom: pixelSizeVertical(16),
  },
  inputsContainer: {
    marginBottom: pixelSizeVertical(35),
    gap: pixelSizeVertical(16),
  },
  infoText: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.386),
    marginBottom: pixelSizeVertical(40),
    width: pixelSizeVertical(309),
    textAlign: 'center',
  },
  headingText: {
    color: COLOR.white,
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.montserratMedium,
    letterSpacing: fontPixel(-0.579),
    marginBottom: pixelSizeVertical(60),
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(135),
  },
  header: {
    paddingHorizontal: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(50),
  },
  container: {
    backgroundColor: COLOR.green,
    flex: 1,
  },
});
