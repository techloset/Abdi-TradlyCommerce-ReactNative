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
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import HomeHeader from '../(components)/HomeHeader';
import Menu from '../library/Menu';
import SeeAllBtn from '../(components)/SeeAllBtn';
import ProductCard from '../(components)/ProductCard';
import SeeAllBtnWhite from '../(components)/SeeAllBtnWhite';
import StoreCard from '../(components)/StoreCard';
import Popular from '../library/Popular';
import New from '../library/New';
import SCREENS from '../library/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scroll}>
        <ScrollView horizontal contentContainerStyle={styles.veggiesContainer}>
          <ImageBackground
            style={styles.veggies}
            source={require('../assets/images/dashVeggies.png')}>
            <Text style={styles.veggiesText}>
              Ready to deliver to your home
            </Text>
            <TouchableOpacity style={styles.veggiesBtn}>
              <Text style={styles.veggiesBtnText}>START SHOPPING</Text>
            </TouchableOpacity>
          </ImageBackground>
          <Image
            style={styles.quarter}
            source={require('../assets/images/dashQuarter.png')}
          />
        </ScrollView>
        <View style={styles.menuConatiner}>
          <View style={styles.menu}>
            {Menu.slice(0, 4).map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(SCREENS.PRODUCTS, {
                      item: item,
                    })
                  }
                  key={index}>
                  <ImageBackground style={styles.menuImg} source={item.img}>
                    <Text style={styles.menuText}>{item.title}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.menu}>
            {Menu.slice(4, 8).map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(SCREENS.PRODUCTS, {
                      item: item,
                    })
                  }
                  key={index}>
                  <ImageBackground style={styles.menuImg} source={item.img}>
                    <Text style={styles.menuText}>{item.title}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.newProduct}>
          <View style={[COMMON.row_Just]}>
            <Text style={TEXT.heading_2}>New Product</Text>
            <SeeAllBtn text={'See All'} />
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.productCardsContainer}>
            <ProductCard data={New} />
          </ScrollView>
        </View>
        <View style={styles.newProduct}>
          <View style={[COMMON.row_Just]}>
            <Text style={TEXT.heading_2}>Popular Product</Text>
            <SeeAllBtn text={'See All'} />
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.productCardsContainer}>
            <ProductCard data={Popular} />
          </ScrollView>
        </View>
        <ImageBackground
          source={require('../assets/images/storeCardsBg.png')}
          style={styles.storeContainer}>
          <View style={[COMMON.row_Just]}>
            <Text style={TEXT.heading_2_white}>Store to follow</Text>
            <SeeAllBtnWhite />
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.storeCardsContainer}>
            <StoreCard />
          </ScrollView>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  storeCardsContainer: {
    paddingHorizontal: pixelSizeVertical(20),
    gap: pixelSizeVertical(10),
  },
  storeContainer: {
    paddingTop: pixelSizeVertical(22),
    marginTop: pixelSizeVertical(30),
    height: widthPixel(370),
  },
  productCardsContainer: {
    paddingHorizontal: pixelSizeVertical(20),
    gap: pixelSizeVertical(10),
  },
  newProduct: {
    marginTop: pixelSizeVertical(28),
  },
  menuText: {
    color: COLOR.white,
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(11),
  },
  menuImg: {
    width: pixelSizeVertical(97),
    height: pixelSizeVertical(97),
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuConatiner: {
    gap: pixelSizeVertical(2),
  },
  quarter: {
    width: pixelSizeVertical(44),
    height: '100%',
  },
  veggiesBtnText: {
    fontSize: fontPixel(12),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.montserratBold,
    letterSpacing: fontPixel(0.727),
    lineHeight: fontPixel(21),
    textTransform: 'uppercase',
    width: widthPixel(201),
  },
  veggiesBtn: {
    width: widthPixel(147),
    height: widthPixel(28),
    borderWidth: widthPixel(1),
    borderColor: COLOR.white,
    borderRadius: widthPixel(14),
    justifyContent: 'center',
    paddingStart: pixelSizeVertical(14),
  },
  veggiesText: {
    fontSize: fontPixel(14),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.montserratSemiBold,
    letterSpacing: fontPixel(1.221),
    lineHeight: fontPixel(16),
    textTransform: 'uppercase',
    width: widthPixel(201),
    marginBottom: pixelSizeVertical(17),
  },
  veggies: {
    width: widthPixel(302),
    height: widthPixel(165),
    justifyContent: 'flex-end',
    paddingHorizontal: pixelSizeVertical(17),
    justifyContent: 'center',
  },
  veggiesContainer: {
    paddingStart: pixelSizeVertical(17),
    paddingVertical: pixelSizeVertical(13),
    columnGap: pixelSizeVertical(16),
  },
  scroll: {
    paddingBottom: pixelSizeVertical(100),
  },
});
