/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createGtm } from '@gtm-support/vue-gtm' // GTMプラグインインポート

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

/**
 * VueGTMを用いたPageViewトラッキング送信
 */
app.use(
    createGtm({
      id: "GTM-W8JV8945",    // GTM_IDをいれる
      defer: false,         // ページの読み込みを高速化（トラッキング精度低下の可能性あり）
      debug: false,         // コンソールログのデバッグを表示するかどうか 
      loadScript: true,     // GTMスクリプトを読み込むかどうか
      vueRouter: router,    // vueRouterと自動的に同期するインスタンスを設定
      ignoredViews: ['notFound'], // 指定したルーター名はトラッキングしない（例：404ページなど）
      trackOnNextTick: true // Vue.nextTick で trackView を呼び出すかどうか
    })
  )

registerPlugins(app)

app.mount('#app')
