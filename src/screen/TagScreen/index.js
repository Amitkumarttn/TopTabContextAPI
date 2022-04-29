import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TagScreen = ({show}) => {
  if (!show) return null;
  return (
    <View>
      <Text>TagScreen</Text>
    </View>
  )
}

export default TagScreen

const styles = StyleSheet.create({})