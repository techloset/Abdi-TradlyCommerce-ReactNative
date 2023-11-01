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
import WishlistHeader from '../(components)/WishlistHeader';
import Browse from '../library/Browse';
import ProductCard from '../(components)/ProductCard';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const WishlistScreen = () => {
  const Data = Browse.slice(0, 4);
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <WishlistHeader title={'Wishlist'} />
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <ProductCard data={Data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: pixelSizeVertical(22),
    justifyContent: 'center',
    gap: pixelSizeVertical(10),
    paddingTop: pixelSizeVertical(30),
    paddingBottom: pixelSizeVertical(230),
  },
});
