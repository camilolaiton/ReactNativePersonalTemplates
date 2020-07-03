import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { gs } from '../../../styles';

const Header = () => {
    return (
        <View>
            <Image
                source={require('../../../assets/hotel2.jpg')}
                style={styles.hotelImage}
            />

            <View style={styles.topButtons}>
                <AntDesign name="close" size={24} color="#fff" />

                <View style={gs.rowCenter}>
                    <AntDesign name="save" size={24} style={styles.topButtonRight}/>
                    <AntDesign name="sharealt" size={24} style={styles.topButtonRight}/>
                    <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    hotelImage: {
        width: "100%",
        height: 270,
    },
    topButtons: {
        ...gs.rowBetween,
        position: 'absolute',
        top: 24,
        left: 12,
        right: 12,
    },
    topButtonRight: {
        marginLeft: 12,
        color: "#fff"
    }
});

export default Header;