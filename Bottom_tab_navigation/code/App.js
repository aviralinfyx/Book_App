import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './component/HomeScreen';
import OtherScreen from './component/OtherScreen';
import BookScreen from './component/BookScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="Other" component={OtherScreen} />
      <Stack.Screen name="Books" component={BookScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Other" component={OtherScreen} />
        <Tab.Screen name="Books" component={BookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
