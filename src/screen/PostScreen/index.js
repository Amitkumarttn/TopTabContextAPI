import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostScreen = ({show}) => {
  if (!show) return null;
  return (
    <View>
      <Text>PostScreen</Text>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({})