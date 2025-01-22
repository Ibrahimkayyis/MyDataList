import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import ListDataScreen from '../screens/ListDataScreen';
import DetailDataScreen from '../screens/DetailDataScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListData"
        screenOptions={{
          headerShown: false,
        }}>
        {/* ListDataScreen - Transisi ke kanan saat kembali */}
        <Stack.Screen
          name="ListData"
          component={ListDataScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: 'horizontal-inverted',
          }}
        />
        {/* DetailDataScreen - Standar */}
        <Stack.Screen
          name="DetailData"
          component={DetailDataScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        {/* ProfileScreen - Transisi ke kiri saat berpindah */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: 'horizontal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
