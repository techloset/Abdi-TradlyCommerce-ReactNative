import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import StoreScreen from '../screens/StoreScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
// icons
import HomeScreenIcon from '../assets/images/icons/home.svg';
import BrowseScreenIcon from '../assets/images/icons/browse.svg';
import StoreScreenIcon from '../assets/images/icons/store.svg';
import OrderHistoryScreenIcon from '../assets/images/icons/order.svg';
import ProfileScreenIcon from '../assets/images/icons/profile.svg';
import {COLOR} from '../styles/consts/GlobalStyles';
import ratio from '../styles/consts/ratio';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.white,
          height: ratio.widthPixel(53),
        },
        tabBarActiveTintColor: COLOR.green,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? COLOR.green : COLOR.neutral_03;

            return <HomeScreenIcon fill={iconColor} />;
          },
        })}
      />

      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={() => ({
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? COLOR.green : COLOR.neutral_03;

            return <BrowseScreenIcon fill={iconColor} />;
          },
        })}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={() => ({
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? COLOR.green : COLOR.neutral_03;

            return <StoreScreenIcon fill={iconColor} />;
          },
        })}
      />
      <Tab.Screen
        name="Order"
        component={OrderHistoryScreen}
        options={() => ({
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? COLOR.green : COLOR.neutral_03;

            return <OrderHistoryScreenIcon fill={iconColor} />;
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? COLOR.green : COLOR.neutral_03;

            return <ProfileScreenIcon fill={iconColor} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
