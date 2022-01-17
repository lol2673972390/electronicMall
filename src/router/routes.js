// 大型组件
import Home from '@/views/Home/'
import ListHome from '@/views/listHome/'
import Mine from '@/views/Mine/'
import Cart from '@/views/Cart/'
import Itemize from '@/views/Itemize/'
import Details from '@/views/Details/'

// 公用组件
// 底部导航
import tabbar from '@/components/tabbar.vue'
// 搜索栏
import searchJump from '@/components/searchJump.vue'
// 滚动导航
import tabScroll from '@/components/tabScroll.vue'
// 商品导航
import goodsAction from '@/components/goodsAction.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      searchJump,
      tabScroll,
      default: Home,
      tabbar,
    },
    meta: {
      title: '首页',
      icon: 'home-o',
      tabbars: true,
    },
  },
  {
    path: '/itemize/:id',
    name: 'Itemize',
    components: {
      default: Itemize,
      tabbar,
    },
    meta: {
      title: '分类',
      icon: 'apps-o',
      tabbars: true,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    components: {
      default: Cart,
      tabbar,
    },
    meta: {
      title: '购物车',
      icon: 'cart-o',
      tabbars: true,
    },
  },
  {
    path: '/mine',
    name: 'Mine',
    components: {
      default: Mine,
      tabbar,
    },
    meta: {
      title: '我的',
      icon: 'user-o',
      tabbars: true,
    },
  },
  {
    path: '/tab/:id',
    name: 'HomeTab',
    components: {
      searchJump,
      tabScroll,
      default: ListHome,
      tabbar,
    },
  },
  {
    path: '/details/:id',
    name: 'Details',
    components: {
      default: Details,
      goodsAction,
    },
  },
]

export default routes
