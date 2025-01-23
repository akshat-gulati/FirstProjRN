import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Search = () => {

    const [text, setText] = useState("")
    const [submittedText, setSubmittedText] = useState("")

    const handleSubmit = () =>{
        setSubmittedText(text)
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wssup bhau</Text>
            <TextInput style={styles.textInput} placeholder='Yha likho bro...' value={text} onChangeText={(text) => setText(text)} />
            <Button title='Submit' onPress={handleSubmit}></Button>
            {submittedText ? (<Text>Result: {submittedText}</Text>): null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "500"
    },
    textInput: {
        width: "100%",
        padding: 5,
        borderWidth: 1,
        borderRadius: 5
    }
})