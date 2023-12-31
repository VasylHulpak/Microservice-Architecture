import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@/': '/src/'
		}
	},
	plugins: [
		vue(),
		WindiCSS(),
		mkcert()
	],
	server: {
		port: 3000,
		host: '0.0.0.0',
		proxy: {
			'^(/gateway)': {
				target: 'https://localhost:5001/',
				changeOrigin: true,
				secure: false,
				ws: true
			}
		},
		open: false,
		hmr: {
			overlay: false
		}
	}
})
