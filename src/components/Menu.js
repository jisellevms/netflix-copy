import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import Avatar from '../images/avatar.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');


class Menu extends Component {
    render() {
        return (
            <View style={style.menu}>
                <View style={style.avatarContainer}>
                    <View style={style.avatarImage}>
                        <Image resizeMode='stretch' style={style.avatar} source={Avatar} />
                        <Text style={style.text}>Jiselle</Text>
                    </View>
                    <Icon name='loop' color='white' size={25} />
                </View>
                <ScrollView style={style.scrollContainer}>
                    <View style={style.textWithIcon}>
                        <View style={style.withIcon}>
                            <Icon
                                style={style.iconWithText}
                                name="arrow_downward"
                                color="white"
                                size={25}
                            />
                            <Text style={style.text}>
                                Meus Downloads
                            </Text>
                        </View>
                        <Icon
                            style={style.rightIcon}
                            color="white"
                            size={25}
                            name="arrow_forward_ios"
                        />
                    </View>

                    <View style={style.textWithIcon}>
                        <View style={style.withIcon}>
                            <Icon
                                style={style.iconWithText}
                                name="check"
                                color="white"
                                size={25}
                            />
                            <Text style={style.text}>
                                Minha Lista
                            </Text>
                        </View>
                        <Icon
                            style={style.rightIcon}
                            color="white"
                            size={25}
                            name="arrow_forward_ios"
                        />
                    </View>
                    <View style={[style.items, style.itemSelected]}>
                        <Text style={style.text}>
                            Home
                        </Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>
                            Séries
                        </Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>
                            Ação
                        </Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>
                            Romance
                        </Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>
                            Terror
                        </Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>
                            Ficção científica
                        </Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>
                            Suspense 
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const style = StyleSheet.create({
    menu: {
        flex: 1,
        width,
        height,
        backgroundColor: '#191919'
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 59,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderColor: '#000',
        borderBottomWidth: 3,
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollContainer: {
        width: width / 2 + 59
    }, rightIcon: {
        paddingRight: 20,
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items:{
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected:{
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems:{
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }

})
export default Menu;