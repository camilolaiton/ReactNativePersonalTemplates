import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors } from '../../styles';
import Header from './components/Header';
import Bookmark from './components/Bookmark';
import About from './components/About';
import Stats from './components/Stats';
import Amenities from './components/Amenities';
import Address from './components/Address';

class Hotel extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header />

                <View>
                    <Bookmark />
                    <About />
                    <Stats />
                    <Amenities />
                    <Address />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
    }
});

export default Hotel;