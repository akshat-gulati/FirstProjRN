import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Home from './Home'
import Wishlist from './Wishlist/Wishlist'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Search';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlatLists from './FlatLists';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    // <SafeAreaProvider>
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
    // </SafeAreaProvider>
    <SafeAreaView>
      <FlatLists />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
export default App
// const styles = StyleSheet.create({})
