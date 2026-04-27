self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetPath = event.notification?.data?.path || '/';
    event.waitUntil((async () => {
        const clientList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        for (const client of clientList) {
            if ('focus' in client) {
                client.postMessage({ type: 'notification-click', path: targetPath });
                return client.focus();
            }
        }
        if (self.clients.openWindow) {
            return self.clients.openWindow(targetPath);
        }
    })());
});
