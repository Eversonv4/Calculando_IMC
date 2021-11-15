import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default () => {
  return(
    <View style={styles.bloco}>
      <Image
        style={styles.image}
        source={require('../assets/image/imc.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});