import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import List from './components/List';
import Slide from './components/Slider';
import Header from './components/Header';
import SidMenu from 'react-native-side-menu';
import Menu from './components/Menu';


export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen) {
        this.setState({ isOpen })
    }

    render() {
        return (
            <>
                <SidMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <View style={style.container}>
                    <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
                    <ScrollView>
                        <Slide />
                        <List navigation={this.props.navigation}/>
                    </ScrollView>
                    </View>
                </SidMenu>
            </>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black'
    }
})
