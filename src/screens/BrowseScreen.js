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
import BrowseHeader from '../(components)/BrowseHeader';
import ProductCard from '../(components)/ProductCard';
import Browse from '../library/Browse';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const BrowseScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <BrowseHeader />
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <ProductCard data={Browse} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrowseScreen;

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
