self.addEventListener('install', function (event) {
    console.log('Service worker installed');
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                cache.addAll([
                    './',
                    './index.html',
                    './src/js/app.js',
                    './src/css/app.css',
                    './src/images/pwa.jpg',
                    'https://fonts.googleapis.com/css?family=Raleway:400,700'
                ]);
            })
    );
});

self.addEventListener('activate', function () {
    console.log('Service worker activated');
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (res) {
                    return res;
                }
            })
    );
});