import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoScreen = ({show}) => {
  if (!show) return null;
  return (
    <View>
      <Text>VideoScreen</Text>
    </View>
  )
}

export default VideoScreen

const styles = StyleSheet.create({})