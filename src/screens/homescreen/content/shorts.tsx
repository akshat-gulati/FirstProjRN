import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const shorts = () => {
    const images = [
        require("../../../assets/images/shorts/images.jpeg"),
        require("../../../assets/images/shorts/images.jpeg"),
        require("../../../assets/images/shorts/images.jpeg"),
        require("../../../assets/images/shorts/images.jpeg")
    ];
    return (
        <View>
            <View style={styles.topView}>
                <View style={styles.titleView}>
                    <View style={styles.left}>
                        <Image style={styles.icon} source={require("../../../assets/images/video.doorbell.fill.png")} />
                        <Text style={{ fontWeight: 500, fontSize: 20 }}>shorts</Text>
                    </View>
                </View>
                <View>
                    <Image style={{ tintColor: "red", height: 4, width: 20, transform: [{ rotate: '90deg' }], }} source={require("../../../assets/images/ellipsis.png")} />
                </View>
            </View>




            <View style={styles.mainShortView}>
                {images.map((image, index) => (
                    <View style={styles.row} key={index}>
                        <ImageBackground source={image} style={styles.shortView}>
                            <Text style={styles.shortsText}>This is 1</Text>
                        </ImageBackground>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default shorts

const styles = StyleSheet.create({
    topView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center"
    },
    titleView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10

    },
    icon: {
        tintColor: "red",
        height: 30,
        width: 17
    },
    mainShortView: {
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    row: {
        marginBottom: 10,
    },
    shortView: {
        width: 185,
        height: 250,
        justifyContent: "flex-end",
        borderRadius: 12,
        overflow: 'hidden',

    },
    shortsText: {
        color: "white",
        margin: 10
    }
})