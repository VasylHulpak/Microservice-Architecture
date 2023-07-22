import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import { usersRoutes } from './users'
import { productsRoutes } from './products'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'MainLayout',
		component: MainLayout
	},
	usersRoutes,
	productsRoutes
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router
