import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg-img.jpg')}
        resizeMode="center"
        style={styles.image}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC803',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
    borderWidth: 2,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal:10,
    borderRadius: 10,
  },
});
