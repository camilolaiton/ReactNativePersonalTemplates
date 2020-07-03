import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors, gs } from '../../../styles';

const { width, height } = Dimensions.get('window');

const ImageFooter = ({title, likes}) => {

    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{title}</Text>
            <TouchableOpacity
                style={styles.footerButton}
            >
                <Text style={styles.footerText}>♥</Text>
                <Text style={[styles.footerText, {marginLeft: 7}]}>
                    {likes}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        ...gs.center,
        ...gs.rowCenter,
        width,
        height: 70,
        backgroundColor: 'rgba(234, 51, 114, 0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    footerButton: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    footerText: {
        fontSize: 16,
        color: colors.text,
        textAlign: 'center',
        fontWeight: "600",
    },
});

export default ImageFooter;