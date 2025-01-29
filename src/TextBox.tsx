import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TextBox = () => {

  const [text, setText] = useState('')
  const [submitText, setSubmitText] = useState('')
  const submitHandle = () => {
    setSubmitText(text)
    setText('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your Name</Text>
      <TextInput style={styles.input} placeholder='Enter the Text' value={text} onChangeText={setText} />
      <Button title='Submit' onPress={submitHandle} />
      <Text style={styles.text}>You entered: {submitText}</Text>
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: "100%",
    height: 40,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  }
})