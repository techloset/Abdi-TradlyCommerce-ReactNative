import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
// icon
import TLogo from '../assets/images/icons/tLogo.svg';
import SeeAllBtn from './SeeAllBtn';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const StoreCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require('../assets/images/store.png')}>
        <View style={styles.bottomContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>T</Text>
          </View>
          <View style={styles.title}>
            <Text style={TEXT.cardText}>Tradly Store</Text>
          </View>
          <View style={styles.btn}>
            <SeeAllBtn text={'Follow'} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(7),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(20),
  },
  logoText: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(40),
    color: COLOR.white,
    textTransform: 'uppercase',
  },
  logo: {
    width: widthPixel(60),
    height: widthPixel(60),
    backgroundColor: COLOR.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(64),
    borderWidth: widthPixel(1.5),
    borderColor: COLOR.white,
    alignSelf: 'center',
    marginTop: pixelSizeVertical(-30),
  },
  bottomContainer: {
    height: '100%',
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(85),

    // width: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  container: {
    width: widthPixel(159.652),
    height: widthPixel(200),
    backgroundColor: COLOR.white,
    borderRadius: widthPixel(10),
    borderColor: COLOR.border_clr,
    borderWidth: widthPixel(1),
    overflow: 'hidden',
  },
});
