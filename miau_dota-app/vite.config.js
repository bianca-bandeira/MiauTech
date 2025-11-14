import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/Miau-dota/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                detailsPet: resolve(__dirname, 'pages/details-pet.html')
            }
        }
    }
})