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
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import DetailsScreenHeader from '../(components)/DetailsScreenHeader';
// icons
import IndicatorsIcon from '../assets/images/icons/indicators.svg';
import SeeAllBtn from '../(components)/SeeAllBtn';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const ProductDetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  console.log('first', item);
  return (
    <SafeAreaView>
      <StatusBar translucent={false} backgroundColor={COLOR.green} />
      <ImageBackground style={styles.backgroundImg} source={item.img}>
        <DetailsScreenHeader />
        <View style={styles.indicator}>
          <IndicatorsIcon />
        </View>
      </ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$25</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.discountText,
                {textDecorationLine: 'line-through'},
              ]}>
              $50{' '}
            </Text>
            <Text style={styles.discountText}>50% off</Text>
          </View>
        </View>
      </View>
      <View style={styles.followContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>T</Text>
          </View>
          <Text style={styles.storeText}>Tradly Store</Text>
        </View>
        <SeeAllBtn text={'Follow'} />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  logoText: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(20),
    color: COLOR.white,
    textTransform: 'uppercase',
  },
  logo: {
    width: widthPixel(32),
    height: widthPixel(32),
    backgroundColor: COLOR.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(32),
    borderWidth: widthPixel(1.5),
    borderColor: COLOR.white,
    alignSelf: 'center',
  },
  storeText: {
    fontSize: pixelSizeVertical(14),
    color: COLOR.neutral,
    fontFamily: FONT_FAMILY.montserratMedium,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(8),
  },
  followContainer: {
    height: widthPixel(72),
    backgroundColor: COLOR.white,
    paddingHorizontal: pixelSizeVertical(12),
    flexDirection: 'row',
    marginVertical: pixelSizeVertical(6),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: pixelSizeVertical(18),
    color: COLOR.green,
    fontFamily: FONT_FAMILY.montserratBold,
  },
  discountText: {
    fontSize: pixelSizeVertical(14),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.montserratMedium,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: pixelSizeVertical(14),
    alignItems: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(18),
    color: COLOR.neutral,
    marginBottom: pixelSizeVertical(10),
  },
  titleContainer: {
    height: widthPixel(95),
    backgroundColor: COLOR.white,
    padding: pixelSizeVertical(16),
  },
  indicator: {
    alignItems: 'center',
  },
  backgroundImg: {
    height: widthPixel(226),
    justifyContent: 'space-between',
    paddingBottom: pixelSizeVertical(15),
  },
});
