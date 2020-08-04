import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import ContactIcon from 'react-native-vector-icons/AntDesign';
import WeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Users from '../screens/Users';
import Contacts from '../screens/Contacts';
import WeatherForecast from '../screens/WeatherForecast';
import ContactDetail from '../screens/ContactDetail';

const UsersNavigator = createStackNavigator(
  {
    User: Users,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#ccc',
    },
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <UserIcon name="users" size={23} color={drawerConfig.tintColor} />
      ),
    },
  },
);
const ContactsNavigator = createStackNavigator(
  {
    Contact: Contacts,
    ContactDetails: ContactDetail,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#ccc',
    },
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <ContactIcon name="contacts" size={24} color={drawerConfig.tintColor} />
      ),
    },
  },
);

const WeatherNavigator = createStackNavigator(
  {
    Weather: WeatherForecast,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#ccc',
    },
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <WeatherIcon
          name="weather-cloudy"
          size={24}
          color={drawerConfig.tintColor}
        />
      ),
    },
  },
);

const MainNavigator = createDrawerNavigator({
  Users: UsersNavigator,
  Contacts: ContactsNavigator,
  Weathers: {
    screen: WeatherNavigator,
    navigationOptions: {
      drawerLabel: 'Weather Forecast',
    },
  },
});

export default createAppContainer(MainNavigator);
