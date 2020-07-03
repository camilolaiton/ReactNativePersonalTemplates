import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = "#91A1BD";
const songs = [
  {
    song: "Mi Biografia",
    artist: "Diomedes Diaz ft. Juan Zuleta",
  },
  {
    song: "Bohemian Rhapsody",
    artist: "Queen",
  }
]

const n_song = 0;

const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow} >
        <View style={styles.bottomShadow} >
          <View 
            style={[
              styles.inner, 
              {width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2},
              style
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    )
}

const musicPlayer = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ alignSelf: "stretch" }}>
                <View style={{ marginHorizontal: 32, marginTop: 32 }}>
                <View style={styles.topContainer}>
                    <NeuMorph size={50}>
                    <AntDesign name="arrowleft" size={20} color={gray} />
                    </NeuMorph>

                    <View>
                    <Text style={styles.playing}>PLAYING NOW</Text>
                    </View>

                    <NeuMorph size={50}>
                    <Entypo name="menu" size={24} color={gray} />
                    </NeuMorph>

                </View>

                <View style={styles.songArtContainer}>
                    <NeuMorph size={300}>
                    <Image source={require('../../assets/diomedes.jpg')} style={styles.songArt}/>
                    </NeuMorph>
                </View>

                <View style={styles.songContainer}>
                    <Text style={styles.title}>{songs[n_song].song}</Text>
                    <Text style={styles.artist}>{songs[n_song].artist}</Text>
                </View>

                <View stlye={styles.trackContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.time}>1:19</Text>
                    <Text style={styles.time}>4:09</Text>
                    </View>
                    
                    <Slider
                    minimumValue={0} 
                    maximumValue={1} 
                    minimumTrackTintColor="#8AAAFF" 
                    thumbTintColor="white" 
                    maximumTrackTintColor="#7B93FF"
                    />

                </View>

                <View style={styles.controlsContainer}>
                    <NeuMorph size={80}>
                    <Ionicons name="ios-rewind" size={24} color={gray} />
                    </NeuMorph>

                    <NeuMorph size={80} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF"}}>
                    <Ionicons name="ios-pause" size={24} color="#FFFFFF" />
                    </NeuMorph>

                    <NeuMorph size={80}>
                    <Ionicons name="ios-fastforward" size={24} color={gray} />
                    </NeuMorph>
                </View>
                </View>
            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DEE9FD',
      alignItems: "center",
    },
    topContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    inner: {
      // backgroundColor: "#DEE9F7",
      backgroundColor: "#F0F6FF",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#E2ECFD",
      borderWidth: 1,
    },
    topShadow: {
      shadowOffset: {
        width: -6,
        height: -6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#FBFFFF",
      elevation: 20,
      backgroundColor: "#0000"
    },
    bottomShadow: {
      shadowOffset: {
        width: 6, 
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#B7C4DD",
      elevation: 20,
      backgroundColor: "#0000"
    },
    playing: {
      color: gray,
      fontWeight: "800",
    },
    songArtContainer: {
      marginVertical: 32,
      alignItems: "center",
    }, 
    songArt: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderColor: "#F0F6FF",
      borderWidth: 10,
    },
    songContainer: {
      alignItems: "center",
    },
    title: {
      fontSize: 25,
      color: "#6C7A93",
      fontWeight: "600",
    },
    artist: {
      fontSize: 14,
      marginTop: 6,
      color: gray,
      fontWeight: "500",
    },
    trackContainer: {
      marginTop: 5,
      marginBottom: 5
    },
    time: {
      fontSize: 10,
      color: gray,
      fontWeight: "700"
    },
    controlsContainer: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
    }
});

export default musicPlayer;