import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import retryAdapter from './retry'
import type { AxiosAdapter } from 'axios'
import { isDevMode } from '@/utils/env'

// 基础配置
export const baseConfig = {
  baseURL: isDevMode() ? '' : import.meta.env.VITE_APP_BASE_URL,
  timeout: 3000,
  adapter: cacheAdapterEnhancer(
    retryAdapter(axios.defaults.adapter as AxiosAdapter),
    {
      enabledByDefault: false
    }
  )
}
