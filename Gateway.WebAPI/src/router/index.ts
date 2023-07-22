import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'MainLayout',
		component: MainLayout
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router
