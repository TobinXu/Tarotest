import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.scss'

export default class Index extends Component {

  state = {
    msg: 'Hello,Word!!!!!!! b  !!!'
  }
  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }
  
  onReady() {
    console.log("onReady!")
  }
  render () {
    return (
      <View className='index'>
        {this.state.msg}
      </View>
    )
  }
}
