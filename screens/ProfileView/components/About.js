import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gs, colors } from '../../../styles';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.aboutTitle}>ABOUT ME</Text>
            <Text style={styles.about}>
                I'm an entrepreneur who loves traveling and practicing new languages.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 24,
    },
    aboutTitle: {
        ...gs.sectionTitle,
        letterSpacing: 2,
    },
    about: {
        color: colors.darkHl,
        fontSize: 13,
        fontWeight: "500",
        lineHeight: 18,
        marginTop: 5,
    },
});

export default About;