/**
 * 是否测试环境
 * @returns 
 */
export const isDev = process.env.NODE_ENV === 'development'

/**
 * 是否在开发者工具内
 */
export const isDevTool = uni.getSystemInfoSync().platform === "devtools"

