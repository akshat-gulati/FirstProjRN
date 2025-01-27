import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Wishlist/Wishlist';

const Home = ({navigation}) => {
    return (
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 10 }}>Home</Text>
            <Button title="Wishlist" onPress={() => navigation.navigate("Wishlist")} />
        </View>
    )
}


export default Home

const styles = StyleSheet.create({})