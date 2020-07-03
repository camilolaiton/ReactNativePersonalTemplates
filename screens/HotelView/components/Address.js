import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Entypo } from '@expo/vector-icons';
import { gs, colors } from '../../../styles';

const Address = () => {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Address</Text>
            <Text style={styles.addressInfo}>Calle 32 ##22-08, Santa Marta, Magdalena</Text>
            <Text style={styles.addressInfo}>Universidad del Magdalena</Text>

            <MapView
                style={styles.mapContainer}
                initialRegion={{
                    latitude: 11.226137,
                    longitude: -74.187273,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >

                <Marker
                    coordinate={{ latitude: 11.226137, longitude: -74.187273 }} 
                />
            </MapView>

            <View style={{marginTop: 16}}>
                <TouchableOpacity style={styles.checkButton}>
                    <Text style={styles.checkButtonTitle}>Check it</Text>
                    <Entypo name="chevron-right" size={12} color="#fff" style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        marginTop: 10,
        minHeight: 300,
    },
    addressContainer: {
        ...gs.absoluteFull,
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    addressInfo: {
        ...gs.smallText,
        marginTop: 6,
        color: colors.darkHl,
        lineHeight: 20,
        letterSpacing: 1,
    },
    checkButton: {
        ...gs.button,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    checkButtonTitle: {
        ...gs.smallText,
        color: "white",
        fontStyle: "italic"
    }
});

export default Address;