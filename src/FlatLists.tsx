import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const FlatLists = () => {
    const people = [
        { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "123-456-7890", image: require("./assets/human.jpg") },
        { id: 2, name: "Bob Smith", email: "bob.smith@example.com", phone: "234-567-8901", image: require("./assets/human.jpg") },
        { id: 3, name: "Carol White", email: "carol.white@example.com", phone: "345-678-9012", image: require("./assets/human.jpg") },
        { id: 4, name: "David Brown", email: "david.brown@example.com", phone: "456-789-0123", image: require("./assets/human.jpg") },
        { id: 5, name: "Eve Davis", email: "eve.davis@example.com", phone: "567-890-1234", image: require("./assets/human.jpg") },
        { id: 6, name: "Frank Wilson", email: "frank.wilson@example.com", phone: "678-901-2345", image: require("./assets/human.jpg") },
        { id: 7, name: "Grace Lee", email: "grace.lee@example.com", phone: "789-012-3456", image: require("./assets/human.jpg") },
        { id: 8, name: "Hank Martin", email: "hank.martin@example.com", phone: "890-123-4567", image: require("./assets/human.jpg") },
        { id: 9, name: "Ivy Clark", email: "ivy.clark@example.com", phone: "901-234-5678", image: require("./assets/human.jpg") },
        { id: 10, name: "Jack Lewis", email: "jack.lewis@example.com", phone: "012-345-6789", image: require("./assets/human.jpg") },
        { id: 11, name: "Karen Walker", email: "karen.walker@example.com", phone: "123-456-7891", image: require("./assets/human.jpg") },
        { id: 12, name: "Larry Hall", email: "larry.hall@example.com", phone: "234-567-8902", image: require("./assets/human.jpg") },
        { id: 13, name: "Mona Allen", email: "mona.allen@example.com", phone: "345-678-9013", image: require("./assets/human.jpg") },
        { id: 14, name: "Nina Young", email: "nina.young@example.com", phone: "456-789-0124", image: require("./assets/human.jpg") },
        { id: 15, name: "Oscar King", email: "oscar.king@example.com", phone: "567-890-1235", image: require("./assets/human.jpg") },
        { id: 16, name: "Paul Scott", email: "paul.scott@example.com", phone: "678-901-2346", image: require("./assets/human.jpg") },
        { id: 17, name: "Quinn Green", email: "quinn.green@example.com", phone: "789-012-3457", image: require("./assets/human.jpg") },
        { id: 18, name: "Rachel Adams", email: "rachel.adams@example.com", phone: "890-123-4568", image: require("./assets/human.jpg") },
        { id: 19, name: "Sam Baker", email: "sam.baker@example.com", phone: "901-234-5679", image: require("./assets/human.jpg") },
        { id: 20, name: "Tina Nelson", email: "tina.nelson@example.com", phone: "012-345-6790", image: require("./assets/human.jpg") },
        { id: 21, name: "Uma Carter", email: "uma.carter@example.com", phone: "123-456-7892", image: require("./assets/human.jpg") },
        { id: 22, name: "Victor Perez", email: "victor.perez@example.com", phone: "234-567-8903", image: require("./assets/human.jpg") },
        { id: 23, name: "Wendy Roberts", email: "wendy.roberts@example.com", phone: "345-678-9014", image: require("./assets/human.jpg") },
        { id: 24, name: "Xander Hughes", email: "xander.hughes@example.com", phone: "456-789-0125", image: require("./assets/human.jpg") },
        { id: 25, name: "Yara Murphy", email: "yara.murphy@example.com", phone: "567-890-1236", image: require("./assets/human.jpg") }
      ];
    return (
        <View style={styles.container}>
            <FlatList data={people} renderItem={({item}) => (
                <View style={styles.card}>
                    <Image style={{width: 40, height: 40}} source={item.image} />
                    <Text>{item.name}</Text>
                </View>

            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            // numColumns={3}
            // columnWrapperStyle={{justifyContent: "space-around"}}
            horizontal={false}
            />
        </View>
    )
}

export default FlatLists

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dadada",
        height: "100%",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    card:{
        width: 100,
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"

    }
})