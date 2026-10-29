import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/ollama': {
        target: 'http://localhost:11434',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ollama/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (_proxyReq, req: any) => {
            if (req.url?.includes('/api/chat') || req.url?.includes('/api/generate')) {
              console.log('\n\x1b[35m======================================================\x1b[0m');
              console.log('\x1b[36m🤖 [Scheme Sathi AI] User Message Sent to Ollama Qwen\x1b[0m');
              console.log('\x1b[35m======================================================\x1b[0m');
            }
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            if (req.url?.includes('/api/chat') || req.url?.includes('/api/generate')) {
              console.log('\x1b[33m⚡ [Qwen Generating Live in Terminal]:\x1b[0m\n');
              proxyRes.on('data', (chunk) => {
                const text = chunk.toString();
                const lines = text.split('\n').filter(Boolean);
                for (const line of lines) {
                  try {
                    const parsed = JSON.parse(line);
                    const token = parsed.message?.content || parsed.response || '';
                    if (token) process.stdout.write('\x1b[32m' + token + '\x1b[0m');
                  } catch {
                    // ignore partial json
                  }
                }
              });
              proxyRes.on('end', () => {
                console.log('\n\n\x1b[36m✔ [Generation Finished]\x1b[0m\n');
              });
            }
          });
        }
      },
    },
  },
})
