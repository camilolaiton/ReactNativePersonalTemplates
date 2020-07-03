import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gs, colors } from '../../../styles';

const Stats = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>264</Text>
                <Text style={styles.stat}>Publications</Text>
            </View>

            <View style={[styles.statContainer, styles.divider]}>
                <Text style={styles.statNumber}>13k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>

            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>302</Text>
                <Text style={styles.stat}>Following</Text>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        ...gs.rowBetween,
        marginHorizontal: 12,
        borderRadius: 16,
        marginTop: -30,
        paddingHorizontal: 8,
    },
    statContainer: {
        ...gs.center,
        flex: 1,
    },
    statNumber: {
        fontSize: 15,
        fontWeight: "700",
        color: colors.text,
    },
    stat: {
        fontSize: 10,
        fontWeight: "600",
        color: colors.lightHl,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginTop: 2,
    },
    divider: {
        borderRightColor: "#444",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: colors.darkHl,
    }
});

export default Stats;