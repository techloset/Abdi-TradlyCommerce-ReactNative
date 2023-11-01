import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import WishlistHeader from '../(components)/WishlistHeader';
import Browse from '../library/Browse';
import GreenBtn from '../(components)/GreenBtn';
// icons
import ChevDownIcon from '../assets/images/icons/chevDown.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CheckoutScreen = ({navigation}) => {
  const Data = Browse.slice(0, 4);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <WishlistHeader title={'Checkout'} />
      <View style={styles.container_1}>
        <Text style={TEXT.cardText}>+ Add New Address</Text>
      </View>
      <View style={styles.container_2}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.itemimage}
            source={require('../assets/images/coke_2.png')}
          />
          <View style={styles.itemText}>
            <Text style={TEXT.cardText}>Coca Cola</Text>
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
            <View style={styles.qtyContainer}>
              <Text style={styles.qtyText}>Qty : 1</Text>
              <ChevDownIcon width={9} />
            </View>
          </View>
        </View>
        <View style={styles.removeContainer}>
          <Text style={TEXT.faded}>Remove</Text>
        </View>
      </View>
      <View style={styles.container_3}>
        <Text style={TEXT.title}>Price Details</Text>
        <View style={styles.options}>
          <View style={styles.optionLeft}>
            <Text style={styles.container_3_Text}>Price ( 1 item)</Text>
            <Text style={styles.container_3_Text}>Delivery Fee</Text>
          </View>
          <View style={styles.optionRight}>
            <Text style={styles.container_3_Text}>Price ( 1 item)</Text>
            <Text style={styles.container_3_Text}>Delivery Fee</Text>
          </View>
        </View>
        <View style={styles.container_3_Bottom}>
          <Text style={TEXT.title}>Total Amount</Text>
          <Text style={TEXT.title}>$ 25</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <GreenBtn
          text={'Coninue to Payment'}
          handleFunc={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container_3_Bottom: {
    flexDirection: 'row',
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    borderTopWidth: widthPixel(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_3_Text: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(20),
    letterSpacing: fontPixel(-0.165),
  },
  optionRight: {
    width: '50%',
    gap: pixelSizeVertical(24),
  },
  optionLeft: {
    width: '50%',
    gap: pixelSizeVertical(24),
  },
  options: {
    flexDirection: 'row',
    marginBottom: pixelSizeVertical(24),
  },
  container_3: {
    height: widthPixel(183),
    width: '100%',
    backgroundColor: COLOR.white,
    paddingHorizontal: pixelSizeVertical(16),
  },
  removeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(12),
    paddingTop: pixelSizeVertical(9),
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    borderTopWidth: widthPixel(1),
  },
  qtyText: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(12),
    color: COLOR.neutral,
  },
  qtyContainer: {
    flexDirection: 'row',
    gap: pixelSizeVertical(5),
    alignItems: 'center',
  },
  priceText: {
    fontSize: pixelSizeVertical(18),
    color: COLOR.green,
    fontFamily: FONT_FAMILY.montserratBold,
  },
  discountText: {
    fontSize: pixelSizeVertical(14),
    color: COLOR.neutral,
    fontFamily: FONT_FAMILY.montserratMedium,
    opacity: 0.7,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: pixelSizeVertical(14),
    alignItems: 'center',
  },
  itemText: {
    gap: pixelSizeVertical(14),
  },
  itemimage: {
    width: widthPixel(102),
    height: widthPixel(102),
  },
  itemContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    paddingTop: pixelSizeVertical(29),
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(15),
  },
  container_2: {
    height: widthPixel(183),
    width: '100%',
    backgroundColor: COLOR.white,
    marginBottom: pixelSizeVertical(62),
  },
  container_1: {
    height: widthPixel(52),
    width: '100%',
    backgroundColor: COLOR.white,
    marginBottom: pixelSizeVertical(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    height: widthPixel(80),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    position: 'absolute',
    bottom: pixelSizeVertical(0),
    elevation: 30,
    opacity: 0.4,
  },
});
