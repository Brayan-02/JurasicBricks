import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/JurasicBricks/', // Asegura que las rutas funcionen en GitHub Pages
});
