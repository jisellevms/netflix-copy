import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableWithoutFeedback } from 'react-native';


const first = [
    {
        key: 1,
        name: 'Cinquenta tons de liberdade',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQh_uvGUHjCPe4v3b91sEuRUAXG17MRE96EJO3TjlHyQwkkpu-VA&s',
        details: {
            numOfEpisodes: 12,
            year: 2016,
            season: 1,
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQh_uvGUHjCPe4v3b91sEuRUAXG17MRE96EJO3TjlHyQwkkpu-VA&s',
            description: 'Gray enloqueceu, Gray enloqueceu, Gray enloqueceu, Gray enloqueceu, Gray enloqueceu, Gray enloqueceu, Gray enloqueceu',
            cast: 'Christian Grey, Anastasian',
            creator: 'David Guggenheim',
            episodes: [
                {
                    "id": 84155,
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQh_uvGUHjCPe4v3b91sEuRUAXG17MRE96EJO3TjlHyQwkkpu-VA&s" 
                }
            ]
        }
    },
    {
        key: 2,
        name: 'Para sempre',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW61VOiLTQoWXKMIcDnP1zusu0eluKI8uJlVvjfAy5JgwcEmvihg&s'
    },
    {
        key: 3,
        name: 'Um amor para recordar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDiZ_oSlF20_xGOxxsPWEMOEY8EZQULjdWYDe-2u-bIyXa3P3&s'
    },
    {
        key: 4,
        name: 'P.S. Eu te amo',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQTKNnmUOmA1484J6as76c9gjUZvo9MHUncAwKoLSrUaGum_U&s'
    },
    {
        key: 5,
        name: 'A última música',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51fpmx%2BhyaL._SX344_BO1,204,203,200_.jpg'
    },
    {
        key: 6,
        name: 'Romance',
        image: 'http://br.web.img3.acsta.net/c_215_290/medias/nmedia/18/87/85/78/19962260.jpg'
    },
]

const second = [
    {
        key: 1,
        name: 'Rambo',
        image: 'http://br.web.img3.acsta.net/c_215_290/pictures/19/08/12/22/46/1191330.jpg'
    },
    {
        key: 2,
        name: 'A saga do dragão',
        image: 'https://capas-c.ewmix.com/2670.jpg'
    },
    {
        key: 3,
        name: 'A outra face',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu1Oe914thGyzt6GK_Ght5EJobO11P6Uhw-uWiZNM_WXm61ed9w&s'
    },
    {
        key: 4,
        name: 'O livro de Eli',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGB2D5nxE5IHnp_F-lh1jUnuOrb4j4_mVD2RuTIZPUMcCJU5S&s'
    },
    {
        key: 5,
        name: 'O acordo',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCrEgj0YuedXVdfIgDPDNLXgmTrKrBH-V9wK5C-q6eJ6AK84N&s'
    },
    {
        key: 6,
        name: 'O procurado',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfIdQclGem8ryfXpEZgvfq3rDFX3_cS2iC6_DkXKA_jKHp8-9&s'
    },
]



class List extends Component{

    newPushContent(item) {
        this.props.navigation.navigate('Details', { item })
    }

    _renderItem(item) {
        return (
            <TouchableWithoutFeedback onPress={() => this.newPushContent(item)}>
                <Image style={{
                    width: 120,
                    height: 180,
                }}
                    source={{ uri: item.image }}
                />
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View>
                    <Text style={style.text}>
                        Minha Lista
                     </Text>
                    <FlatList
                        ItemSeparatorComponent={() => <View style={{
                            width: 5
                        }} />}
                        horizontal={true}
                        renderItem={({ item }) => this._renderItem(item)}
                        data={first} />
                </View>

                <View>
                    <Text style={style.text}>
                        Recomendados para você
                    </Text>
                    <FlatList
                        ItemSeparatorComponent={() => <View style={{
                            width: 5
                        }} />}
                        horizontal={true}
                        renderItem={({ item }) => this._renderItem(item)}
                        data={second} />
                </View>

            </View>
        )
    }
}

const style = StyleSheet.create({
    text: {
        color: 'white'
    }
})


export default List;