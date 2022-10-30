import { createRouter, createWebHashHistory } from 'vue-router';

import { EmptyView } from './views/empty';
import { ImageView } from './views/image';

const routes = [
  {
    path: '/',
    name: 'empty',
    component: EmptyView,
  },
  {
    path: '/image',
    name: 'image',
    component: ImageView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
