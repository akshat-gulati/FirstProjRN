import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Header99 = () => {
  const data = [
    { key: '1', text: 'All' },
    { key: '2', text: 'Gaming' },
    { key: '3', text: 'Science Fiction' },
    { key: '4', text: 'News' },
    { key: '5', text: 'Sports' },
    { key: '6', text: 'Music' },
    { key: '7', text: 'Movies' },
    { key: '8', text: 'Technology' },
    { key: '9', text: 'Travel' },
    { key: '10', text: 'Food' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image style={[styles.headerImageStyle, {
            height: 19,
            width: 30,
          }]} source={require("../../assets/images/video.png")} />
          <Text style={{ color: "black", fontWeight: 600, fontSize: 20 }}>Premium</Text>
        </View>
        <View style={styles.headerLeft}>
          <Image style={[styles.headerImageStyle, { height: 20, width: 25 }]} source={require("../../assets/images/tv.png")} />
          <Image style={[styles.headerImageStyle, { height: 20, width: 20 }]} source={require("../../assets/images/bell.png")} />
          <Image style={[styles.headerImageStyle, { height: 20, width: 20 }]} source={require("../../assets/images/magnifyingglass.png")} />
        </View>
      </View>
      <View style={styles.exploreHeader}>
        <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator = {false}
      renderItem={({ item }) => (
        <View style={styles.boxHeader}>
          <Text style={styles.normalText}>{item.text}</Text>
        </View>
      )}
    />
      </View>
    </View>

  )
}

export default Header99

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    // backgroundColor: "pink",

  },
  headerLeft: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  headerRight: {
    flexDirection: "row",
  },
  headerImageStyle: {
    tintColor: "red"
  },
  exploreHeader: {
    flexDirection: "row",
  },
  boxHeader: {
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 12,
    padding: 5
  },
  normalText: {
    fontSize: 20,
    color: "black",
    paddingHorizontal: 10
  }
})