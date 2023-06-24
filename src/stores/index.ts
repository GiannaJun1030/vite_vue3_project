import { createPinia } from 'pinia'
import type { App } from 'vue'

// pinia实例
export const piniaInstance = createPinia()

export default function (app: App) {
  app.use(piniaInstance)
}
