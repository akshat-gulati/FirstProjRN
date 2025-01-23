import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header99 from './screens/homescreen/header'
import Shorts from "./screens/homescreen/content/shorts"
import Video from './screens/homescreen/content/video'

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <Header99 />
      <ScrollView style={styles.container}>

        <View>
          <Shorts />
          <Video />
        </View>
      </ScrollView>
    </SafeAreaView>


  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    // margin: 10
  }
})