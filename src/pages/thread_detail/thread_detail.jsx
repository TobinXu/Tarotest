import Taro from '@tarojs/taro'
import React from 'react'
import { View, RichText, Image } from '@tarojs/components'
import { Thread } from '../../components/thread'
import { Loading } from '../../components/loading'
import api from '../../utils/api'
import { timeagoInst, GlobalState } from '../../utils'

import './index.css'

