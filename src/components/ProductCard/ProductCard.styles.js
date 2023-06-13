import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        minHeight: 100,
        backgroundColor: 'white',
        resizeMode: 'contain',
    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    price: {
        color: 'black',
        textAlign: 'right',
        fontWeight: '400',
        fontSize: 16,
        fontStyle: 'italic'
    },
    
})