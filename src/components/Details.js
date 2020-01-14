import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabsEpisodes from './TabsEpisodes';

const { width, height } = Dimensions.get('window');

export default class Details extends Component {
    render() {
        const { name } = this.props.navigation.state.params.item;
        const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = this.props.navigation.state.params.item.details;
        return (
            <ScrollView style={style.container}>
                <ImageBackground
                    style={style.thumbnail}
                    source={{ uri: thumbnail }}
                >
                    <View style={style.buttonPlay}>
                        <TouchableWithoutFeedback onPress={null}>
                            <View>
                                <Icon
                                    style={style.iconPlay}
                                    name="play-circle"
                                    size={90}
                                    color="white"
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ImageBackground>
                <View style={style.descriptionContainer}>
                    <View style={style.subTitle}>
                        <Text style={[style.text, style.subTitleText]}>{year}</Text>
                        <Text style={[style.text, style.subTitleText]}>{numOfEpisodes}</Text>
                        <Text style={[style.text, style.subTitleText]}>{season} Temporada</Text>
                    </View>
                    <View style={style.description}>
                        <Text style={[style.text]}>{description}</Text>
                    </View>
                    <Text style={[style.text]}>Elenco: {cast}</Text>
                    <Text style={[style.text]}>Autor: {cast}</Text>
                </View>
                <View style={style.shareListIcons}>
                    <View style={style.myListIcon}>
                        <Icon
                            style={style.listIcon}
                            name="check"
                            color="grey"
                            size={25}
                        />
                        <Text style={[style.text, style.light]}>Minha lista</Text>
                    </View>

                    <View style={style.myShareIcon}>
                        <Icon
                            style={style.shareIcon}
                            name="share-alt"
                            color="grey"
                            size={25}
                        />
                        <Text style={[style.text, style.light]}>Compartilhar</Text>
                    </View>
                </View>
                <TabsEpisodes />
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent'
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subTitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons:{
        flexDirection: 'row',
        marginVertical: 30,

    },
    listIcon:{
        height: 25
    },
    shareIcon:{
        height: 25
    },
    myListIcon:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    description:{
        marginVertical: 10,
    },
    light:{
        fontWeight: '200'
    }
})
