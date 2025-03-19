import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Plppage from  '@/src/screens/Plpscreen/Plppage'

const Searchscreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Search</Text>
      <Plppage />
    </View>
  )
}

export default Searchscreen

