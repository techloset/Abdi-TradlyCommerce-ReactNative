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
import {COLOR, TEXT} from '../styles/consts/GlobalStyles';
// icon
import SearchIcon from '../assets/images/icons/browse.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon width={24} fill={COLOR.green} />
      <Text style={TEXT.faded}>Search Products</Text>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    width: widthPixel(335),
    height: widthPixel(46),
    backgroundColor: COLOR.white,
    alignSelf: 'center',
    borderRadius: widthPixel(23),
    marginTop: pixelSizeVertical(23),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(18),
    gap: pixelSizeVertical(22),
    marginBottom: pixelSizeVertical(16),
  },
});
