import config from '@/config'
import Request from '../lib/request'
import store from '@/store'
import * as Utils from '@/utils'

const httpClient = new Request()

httpClient.setConfig((conf) => {
	return {
    ...conf,
    baseUrl: config.requestHost.gateway
  }
})

httpClient.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	const authInfo = store.state.authInfo;
	config.header = {
		...config.header,
		accessToken: (authInfo && authInfo.token) || ''
	}
	return config
})

httpClient.interceptor.response((response) => { /* 请求之后拦截器 */
	if (Utils.isDev && !Utils.isDevTool) {
		console.warn(`【${response.config.method}】`  +'【请求接口】', response.config.url);
		console.log('【接口入参】', response.config.data)
		console.log('【接口返回】', response.data)
		console.log('-----------------------------------------');
	}

	return response && response.data
}, (response) => { // 请求错误做点什么
	return response
})

export default httpClient
