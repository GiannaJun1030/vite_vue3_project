// 开发环境别名常量
export const DEV_MODE = 'development'

// 线上环境别名常量
export const PROD_MODE = 'production'

// 返回当前环境
export function getEnv(): string {
  return import.meta.env.MODE
}

// 是否是开发环境
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

// 是否是线上环境
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
