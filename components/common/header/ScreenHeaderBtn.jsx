import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image } from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlepress}) => {
  return (
<TouchableOpacity style={styles.btnContainer} onPress={handlepress}>
  <Image 
  source={iconUrl}
  resizeMethod='resize'
  style={styles.btnImg(dimension)}
  />
</TouchableOpacity>

  );
}

export default ScreenHeaderBtn