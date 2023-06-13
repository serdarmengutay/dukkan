import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64b5f6'
    },
    logo: {
        width: Dimensions.get('window').width * 0.9, 
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        tintColor: 'white'
    },
    logo_container: {},
    body_container: {},
})