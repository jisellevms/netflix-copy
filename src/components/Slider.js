import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={style.container}>
        <Image style={style.image} source={props.uri} />
    </View>
)

const style = {
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    image:{
        flex: 1,
        width
    }
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imagesSlider: [
                require('../images/gossip.jpeg'),
                require('../images/papel.jpg'),
                require('../images/witcher.jpeg'),
            ]
        }
    }
    render(){
        return(
            <View>
                <Swiper autoplay height={240}>
                    {
                    this.state.imagesSlider.map((item, i) => 
                    <Slider uri={item} key={i}/>)}
                </Swiper>
            </View>
        )
    }
}


