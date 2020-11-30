import React from 'react'
import { TouchableOpacity } from 'react-native'

import Fi from 'react-native-vector-icons/Feather';

export const TalkButton = () => {
  return (
    <TouchableOpacity>
      <Fi name="message-square" size={20} color="#fff"/>
    </TouchableOpacity>
  )
}
