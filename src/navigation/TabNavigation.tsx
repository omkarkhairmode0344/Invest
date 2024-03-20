import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import TransactionScreen from '../screens/TransactionScreen';
import AccountScreen from '../screens/AccountScreen';
import {Image, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: false, tabBarIcon: () => null}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assests/home..png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#31A062' : '#748c94',
                }}></Image>
              <Text
                style={{color: focused ? '#31A062' : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assests/product.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#31A062' : '#748c94',
                }}></Image>
              <Text
                style={{color: focused ? '#31A062' : '#748c94', fontSize: 12}}>
                Product
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assests/transaction.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#31A062' : '#748c94',
                }}></Image>
              <Text
                style={{color: focused ? '#31A062' : '#748c94', fontSize: 12}}>
                Transaction
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assests/account.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#31A062' : '#748c94',
                }}></Image>
              <Text
                style={{color: focused ? '#31A062' : '#748c94', fontSize: 12}}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
