import { StyleSheet } from 'react-native'
import React from 'react'
import Home from './Home'
import Profile from './Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Search';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    // <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    // </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})
export default App
// const styles = StyleSheet.create({})
