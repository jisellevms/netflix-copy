import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import Avatar from '../images/avatar.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');


class Menu extends Component {
    render() {
        return (
            <View>
                <View style={style.avatarContainer}>
                    <View style={style.avatarImage}>
                        <Image style={style.avatar} source={Avatar}/>
                        <Text style={style.text}>Jiselle</Text>
                    </View>
                    <Icon name='loop' color='white' size={25}/>
                </View>
                </View>
                )
            }
        }
     
        
const style = StyleSheet.create({
    avatar:{

    },
    text:{

    }
})
export default Menu;