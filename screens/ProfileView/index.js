import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { colors, gs } from '../../styles';
import Header from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Location from './components/Location';
import Photos from './components/Photos';

class Profile extends Component {

    constructor (props) {
        super(props);
        this.state = {
            user: {},
            isLoading: true,
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo");
            let users = await res.json();

            this.setState({user: users.results[0]}, () => {
                this.setState({isLoading: false});
            });
            // console.log(this.state.user);
        } catch (err) {
            console.log(err);
        }
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={[gs.center, styles.container]}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Header user={this.state.user} />
                <Stats />
                <About />
                <Location user={this.state.user}/>
                <Photos />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBg,
    }
});

export default Profile;