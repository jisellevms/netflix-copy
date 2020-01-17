import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Episodes from './Episodes';
import Trailers from './Trailers';
import Tabs from 'react-native-tabs';

export default class TabsEpisodes extends Component {

    state = {
        page: <Episodes />
    };

    render() {
        return (
            <>
                <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
                    selectedStyle={{ color: 'red' }} onSelect={el => this.setState({ page: el.props })}>
                        [
                            <Episodes name="first" />
                            <Trailers name="second" />
                        ]
                    
                </Tabs>
                <View>
                    {this.state.page}
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },

})
