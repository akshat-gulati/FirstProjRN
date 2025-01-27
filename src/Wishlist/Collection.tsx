import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Collection = () => {
    return (
        <View style={styles.container}>

            <View style={styles.upperBox}>
                    <Image style={styles.upperBoxEachImage} source={require('../assets/images/wishlist/apple3.jpg')} />
                    <Image style={styles.upperBoxEachImage} source={require('../assets/images/wishlist/apple3.jpg')} />
                    <Image style={styles.upperBoxEachImage} source={require('../assets/images/wishlist/apple3.jpg')} />
                    <Image style={styles.upperBoxEachImage} source={require('../assets/images/wishlist/apple3.jpg')} />
            </View>

            <View style={styles.lowerBox}>
                <Text>My Wishlist</Text>
                <View style={styles.lowerBoxInfo}>
                    <Image style={styles.lowerBoxImage} source={require('../assets/images/wishlist/lock.fill.png')} />
                    <Text style={styles.lowerBoxText}>Private</Text>
                    <Text style={styles.lowerBoxText}>3 items</Text>
                </View>
            </View>
        </View>
    )
}

export default Collection

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#dadada",
        flexDirection: "column",
        

    },
    upperBox: {
        padding: 5,
        backgroundColor: "#dadada",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        alignSelf: "center",
        borderTopEndRadius: 3,
        borderTopStartRadius: 3
    },
    upperBoxEachImage: {
        width: 85,
        height: 80,
        borderRadius: 2,
    },
    lowerBox: {
        // backgroundColor: "red",
        padding: 10,
    },
    lowerBoxInfo: {
        flexDirection: "row",
        gap: 4,
        // backgroundColor: "red",
        width: 100
    },
    lowerBoxText: {
        color: "grey",
        fontSize: 10
    },
    lowerBoxImage: {
        tintColor: "grey",
        width: 8,
        height: 12
    }
})