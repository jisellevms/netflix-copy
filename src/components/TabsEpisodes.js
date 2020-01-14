import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Episodes from './Episodes';
import Trailers from './Trailers';

export default function TabsEpisodes() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ])


    const renderScene = SceneMap({
        first: Episodes,
        second: Trailers,
    });

    return (
        <TabView
            style={style.container}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

})
