import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { gs, colors } from '../../../styles';

const { width, height } = Dimensions.get('window');

const Header = (props) => {
    
    const user = props.user;
    const name = `${user.name.first} ${user.name.last}`;

    return (
        <LinearGradient colors={[colors.orange, colors.pink]} start={[0, 0]} end={[1,1]}>
            <View style={styles.container}>
                <View style={gs.rowBetween}>
                    <Ionicons name="md-arrow-back" color={colors.text} size={32} />
                    <Entypo name="dots-three-vertical" color={colors.text} size={24} />
                </View>

                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.check}>
                            <Ionicons name="md-checkmark" color={colors.pink} size={20} />
                        </View>

                        <Image 
                            source={{uri: user.picture.large}} 
                            style={styles.profileImage}
                        />
                    </View>
                </View>

                <View style={[gs.center, styles.nameContainer]}>
                    <Text style={gs.title}>{name}</Text>
                    <Text style={[gs.subTitle, { marginTop: 5 }]}>Traveler/Blogger</Text>

                    <TouchableOpacity style={styles.follow}>
                        <Entypo name="plus" color="rgba(255, 255, 255, 0.6)" size={20} />
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 22,
        paddingVertical: height*0.05,
        // backgroundColor: "#0000",
        // borderRadius: width,
        // elevation: 60,
    },
    imageContainer: {
        ...gs.center,
        marginTop: 16,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 32,
    },
    check: {
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius: 100,
        width: 32,
        height: 32,
        elevation: 18,
        position: 'absolute',
        zIndex: 1,
        right: -10,
        bottom: 5,
        elevation: 30,
    },
    nameContainer: {
        marginVertical: 12,
    },
    follow: {
        ...gs.button,
        ...gs.rowCenter,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 16,
        borderColor: "rgba(255, 255, 255, 0.6)",
        borderWidth: 2,
        elevation: 18,
    },
    followText: {
        fontSize: 16,
        color: colors.text,
        fontWeight: "600",
        marginLeft: 4,
    }
});

export default Header;