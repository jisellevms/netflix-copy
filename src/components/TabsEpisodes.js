import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import Episodes from './Episodes';
import Trailers from './Trailers';

class TabsEpisodes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0, route: [
                { key: '1', title: 'Episodes' },
                { key: '2', title: 'Trailers & More' }
            ]
        }
    }

    _handleChangeTab(index) {
        this.setState({ index })
    }

    _renderHeader(props) {
        return <TabBar {...props} />
    }

    _renderScene({ route }) {
        switch (route.key) {
            case '1':
                return <Episodes />
            case '2':
                return <Trailers />
            default:
                return null
        }
    }
    
    render() {
        return (
            <TabView
                style={style.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        )
    }
}