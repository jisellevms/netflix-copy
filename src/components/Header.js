import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../images/netflix.png';

const Header = props => (
    <View style={style.container}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Icon name='dehaze' color='white' size={25} />
        </TouchableWithoutFeedback>
        <Image resizeMethod='auto' source={Logo} style={style.logo}/>
        <Icon name='search' color='white' size={25} />
    </View>
)


const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        marginHorizontal: 15
    },
    logo:{
        width: 120,
        height: 32
    }
})

export default Header;