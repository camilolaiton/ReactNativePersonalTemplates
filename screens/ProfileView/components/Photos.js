import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { gs, colors } from '../../../styles';
import ImageView from 'react-native-image-view';
import ImageFooter from './ImageFooter';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const images = [
    {
        source: {
            uri: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=487&q=80", 
        },
        title: 'Work and Travel',
        likes: '3 346',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80", 
        },
        title: 'Traveling in Europe',
        likes: '4 997',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
        },
        title: 'New experiences',
        likes: '8 321',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", 
        },
        title: 'Turkey',
        likes: '9 237',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80", 
        },
        title: 'Venecia, Italy',
        likes: '4 257',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
        },
        title: 'Where am I going?',
        likes: '6 721',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80", 
        },
        title: 'I think we are brothers!',
        likes: '1 337',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", 
        },
        title: 'Greek!',
        likes: '9 237',
    },
    {
        source: {
            uri: "https://images.unsplash.com/photo-1454430690613-c5fbdb397f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=388&q=80", 
        },
        title: `L'arc du triomphe!`,
        likes: '7 329',
    },
];

const Photos = () => {

    const [isImageViewVisible, setIsImageViewVisible] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Entypo name="images" color={colors.pink} size={24} />
                <Text style={[gs.sectionTitle, {marginLeft: 10}]}>My Photos</Text>
            </View>

            <View style={styles.photosContainer}>
                {images.map((image, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setImageIndex(index);
                                setIsImageViewVisible(true);
                            }}
                        >
                            <Image 
                                source={image.source}
                                style={[styles.photo, {
                                    marginRight: (index+1) % 3 === 0 ? 0 : 2,  
                                }]}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>

            <ImageView
                images={images}
                imageIndex={imageIndex}
                isVisible={isImageViewVisible}
                renderFooter={(currentImage) => <ImageFooter title={currentImage.title} likes={currentImage.likes}/>}
                onClose={() => {
                    setIsImageViewVisible(false);
                }}
                animationType="fade"
                onImageChange={index => {
                    setImageIndex(index);
                }}
                isPinchZoomEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
    },
    photosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
    },
    photo: {
        width: width / 4,
        height: width / 4,
        margin: 2,
        borderRadius: 3,
    },
});

export default Photos;