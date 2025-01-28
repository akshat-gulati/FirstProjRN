import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Collection from './Collection'
import CreateCollectionButton from './CreateCollectionButton'

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      </ScrollView>
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
    paddingBottom: 20
  }
})