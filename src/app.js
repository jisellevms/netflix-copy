import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import List from './components/List';
import Slide from './components/Slider';

class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <Slide />
                <List />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    }
})

export default App;