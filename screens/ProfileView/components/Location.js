import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { gs, colors } from '../../../styles';
import { Entypo } from '@expo/vector-icons';
import MapView, { Marker, FontAwesome5 } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const Location = (props) => {

    const location = props.user.location;

    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.locationIcon}>
                    <Entypo name="location" color={colors.pink} size={32} />
                </View>

                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={styles.location}>{location.city}, {location.country}</Text>
                    <Text style={styles.distance}>1303 km away</Text>
                </View>

                <Entypo name="chevron-right" color={colors.darkHl} size={32} />
            </View>
            <View style={gs.sectionContainer}>

                <View style={{flexDirection: "row"}}>
                    <Entypo style={{ marginLeft: 5 }} name="map" color={colors.pink} size={24} />
                    <Text style={[gs.sectionTitle, { marginLeft: 10, letterSpacing: 2 }]}>Map Location</Text>
                </View>

                <MapView
                    style={styles.mapContainer}
                    initialRegion={{
                        latitude: 11.226137,
                        longitude: -74.187273,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    showsTraffic
                    mapType="hybrid"
                >

                    <Marker
                        coordinate={{ latitude: 11.226137, longitude: -74.187273 }}
                        pinColor={colors.pink} 
                    />
                </MapView>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        ...gs.sectionContainer,
    },
    locationIcon: {
        
    },
    location: {
        color: colors.text,
        fontWeight: "700",
        fontSize: 13,
        letterSpacing: 2,
    },
    distance: {
        ...gs.smallText,
        fontSize: 10,
        color: colors.darkHl,
        marginTop: 2,
        textTransform: "uppercase",
    },
    mapContainer: {
        marginTop: 15,
        minHeight: height / 3,
        minWidth: height / 5,
    },
});

export default Location;