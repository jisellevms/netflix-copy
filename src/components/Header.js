import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../images/netflix.png';

export default function Header({ navigation, toggle }) {
    return (
        <View style={style.container}>
            <TouchableWithoutFeedback onPress={() => toggle()}>
                <Icon name='dehaze' color='white' size={25} />
            </TouchableWithoutFeedback>
            <Image resizeMethod='auto' source={Logo} style={style.logo} />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
                <Icon name='search' color='white' size={25} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15
    },
    logo: {
        width: 120,
        height: 32
    }
})

