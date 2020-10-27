import React, {useState, useEffect} from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs'
import { fetch } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';

import { StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';

//Try the following 
//Import it needs to be a jpeg image. 
// https://oceana.org/sites/default/files/tiger_shark_0.jpg

// https://images.unsplash.com/photo-1564686454315-7367efa72f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1567007738338-6500a87d3cf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1592234332238-34be0c715635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
// https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/270px-Hotdog_-_Evan_Swigart.jpg

export default function App() {
  const [displayText, setDisplayText] = useState(null)
  const [url, setUrl] = useState('https://images.unsplash.com/photo-1564686454315-7367efa72f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')


  async function getPrediction(url){
    setDisplayText("Checking Status of Tensor Flow")
    await tf.ready()
    setDisplayText("Loading Mobilenet model")
    const model = await mobilenet.load()
    setDisplayText("Received url " + url)
   // https://js.tensorflow.org/api_react_native/latest/ Explains fix
    setDisplayText("Completed Fetching Image")
    const response = await fetch(url, {}, { isBinary: true });
    setDisplayText("Converting Image to Array")
    const imageData = await response.arrayBuffer();
    setDisplayText("Generating Image Tensor")
    const imageTensor = imageToTensor(imageData)
    const prediction = await model.classify(imageTensor);
    setDisplayText(JSON.stringify(prediction))
  }

  function imageToTensor(rawImageData) {
    const TO_UINT8ARRAY = true
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3)
    let offset = 0 // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset]   //Red pixel
      buffer[i + 1] = data[offset + 1]  //Green pixel
      buffer[i + 2] = data[offset + 2]  // Blue pixel
                                        //Alpha value ignored. 
      offset += 4
    }

    return tf.tensor3d(buffer, [height, width, 3])
  }

  return (
    <View style={styles.container}>
      <Text>Only works with Jpeg images</Text> 
      <TextInput
      style={{ height: 40, width:"90%", borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setUrl(text)}
      value={url}
      />
      <Image style={styles.imageStyle} source={{uri:url}}></Image>
      <Button title="Classify Image" onPress={()=>getPrediction(url)}></Button>
      <Text>{displayText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle:{
    width: 200, 
    height: 200
  }
});
