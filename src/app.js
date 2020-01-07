import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import List from './components/List';
import Slide from './components/Slider';
import Header from './components/Header';
import SidMenu from 'react-native-side-menu';
import Menu from './components/Menu';


class App extends Component {

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
            <View style={style.container}>
                <SidMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <Header toggle={this.toggle.bind(this)} />
                    <ScrollView>
                        <Slide />
                        <List />
                    </ScrollView>
                </SidMenu>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default App;