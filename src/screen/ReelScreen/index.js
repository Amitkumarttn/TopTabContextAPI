import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReelScreen = ({show}) => {
  if (!show) return null;
  return (
    <View>
      <Text>ReelScreen</Text>
    </View>
  )
}

export default ReelScreen

const styles = StyleSheet.create({})