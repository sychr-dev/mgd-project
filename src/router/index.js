/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

// ルート情報にメタ情報を追加
const enhancedRoutes = setupLayouts(routes).map(route => {
  if (route.path === '/') {
    route.path = '/item' 
    route.meta = { title: '商品ページ' }
  } else if (route.path === '/thanks') {
    route.meta = { title: '購入完了ページ' }
  }
  return route
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: enhancedRoutes, // 修正: enhancedRoutes を使用
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

// beforeEach フックを追加して、ページタイトルを設定
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'デフォルトタイトル'
  next()
})

export default router