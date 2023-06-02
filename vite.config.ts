import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const root = process.cwd();
const pathResolve = (dir: string) => {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '/@': pathResolve('./src/'),
      }
    }
  }
})
