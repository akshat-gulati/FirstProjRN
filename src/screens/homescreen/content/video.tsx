import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Video = () => {
    return (
        <View style={styles.totalViewComponent}>
            <ImageBackground style={styles.videoComponent} source={require("../../../assets/images/videos/fruits.jpg")}>
                <Text style={styles.videoDuration}>10:10</Text>
            </ImageBackground>
            <View style={styles.titleComponents} >
                <View>
                    <Image style={styles.channelImage} source={require("../../../assets/images/videos/fruits.jpg")} />
                </View>
                <View style={styles.belowText}>
                    <Text style={styles.videoTitle}>Ye fruit khaaloooo mitrooooo Ye fruit khaaloooo mitrooooo Ye fruit khaaloooo mitrooooo</Text>
                    <View style={styles.videoInfo}>
                        <Text style={styles.videoInfoText}>Channel Name</Text>
                        <Text style={[styles.videoInfoText, { marginHorizontal: 10 }]}>Views in lakhs</Text>
                        <Text style={styles.videoInfoText}>Just Now</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Video

const styles = StyleSheet.create({
    totalViewComponent: {
        justifyContent: "center"
    },
    videoComponent: {
        height: 225,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    videoDuration: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: "white",
        borderRadius: 5,
        padding: 2,
        margin: 5
    },
    belowText: {
        marginHorizontal: 10

    },
    channelImage: {
        height: 50,
        width: 50,
        borderRadius: 50,

    },
    titleComponents: {
        margin: 10,
        flexDirection: "row"
    },
    videoTitle: {
        fontSize: 15
    },
    videoInfo: {
        flexDirection: "row"

    },
    videoInfoText: {
        fontSize: 10,
        color: "grey"
    }

})