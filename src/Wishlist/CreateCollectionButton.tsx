import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateCollectionButton = () => {
  return (
    <View style={styles.container}>
        <Text>+ Create New Collection Button</Text>
    </View>
  )
}

export default CreateCollectionButton

const styles = StyleSheet.create({ 
    container:{
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#dadada",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    }
})