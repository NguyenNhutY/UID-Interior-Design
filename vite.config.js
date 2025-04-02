import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/UID-Interior-Design/', // Đường dẫn repo của bạn
  chunkSizeWarningLimit: 1000, // Thay đổi giá trị này để phù hợp với yêu cầu của bạn
  server: {
    port: 3000, // Cổng mà bạn muốn sử dụng cho server phát triển
    open: true, // Tự động mở trình duyệt khi server khởi động
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString(); // Chia nhỏ theo package
          }
        },
      },
    },
    outDir: 'dist', // Thư mục đầu ra cho build sản phẩm
    sourcemap: true, // Tạo sourcemap cho việc gỡ lỗi
  },
})
