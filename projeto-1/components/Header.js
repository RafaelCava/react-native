import { Text, View } from 'react-native'
import React from 'react';

const Header = () => {
  return (
    <View style={{ backgroundColor: 'rgb(84, 50, 168)', padding: 20 }}>
      <Text style={{ color: '#fff', textAlign: 'center', fontSize: 30 }}>Header</Text>
    </View>
  )
}

export default Header