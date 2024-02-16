import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import TransactionScreen from '../screens/TransactionScreen';
import AccountScreen from '../screens/AccountScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={ProductScreen} />
      <Drawer.Screen name="Transaction" component={TransactionScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
