import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


const TextBox = () => {

const [text, setText] =  useState("")
const [Submittedtext, setSubmittedText] = useState("")
const handleSubmit = () => {
    setSubmittedText(text)
    setText('')
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TextBox</Text>

      <TextInput style={styles.input} placeholder='Enter a text here...' value={text}
      onChangeText={(text)=> setText(text)}
      />
      <Button title='Submit' onPress={handleSubmit} />
      {Submittedtext ? <Text>Submitted Text: {Submittedtext}</Text> : null}
        
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
        gap:10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    input:{
        width: '100%',
        padding: 5,
        borderWidth:1,
        borderRadius: 5,
    }
})