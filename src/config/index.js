import fatConfig from './fat'
import prodConfig from './prod'

const config = process.env.NODE_ENV === 'development' ? fatConfig : prodConfig

export default {
  appId: 'xxxx',

  ...config
}
