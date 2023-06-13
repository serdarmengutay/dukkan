import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body_container: {
        padding: 15
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25
    },
    desc: {
        fontStyle: 'italic',
        color: 'black',
        marginVertical: 5 
    },
    price: {
        fontSize: 22,
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'black'
    },
})