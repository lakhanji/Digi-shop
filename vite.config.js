import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@material-tailwind/react': '@material-tailwind/react',
//     },
//   },
// });

