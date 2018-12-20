import Vue from 'vue'
import { Button, Card, Menu, Submenu,
  MenuItem, MenuItemGroup,
  Row, Col, Input, Pagination,
  Breadcrumb, BreadcrumbItem } from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Button)
Vue.use(Card)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
