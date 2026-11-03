self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 空的 fetch 事件，確保符合 PWA 安裝規範
});