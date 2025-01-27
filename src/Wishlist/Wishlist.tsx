import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Collection from './Collection'
import CreateCollectionButton from './CreateCollectionButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Collection />
      <CreateCollectionButton />
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  }
})