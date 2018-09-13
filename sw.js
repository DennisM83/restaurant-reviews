self.addEventListener('install', function(event) {
    const urlToCache = [
        '/',
        '/restaurant-reviews/index.html',
        '/restaurant.html',
        '/restaurant-reviews/css/styles.css',
        '/js/dbhelper.js',
        '/restaurant-reviews/js/main.js',
        '/js/restaurant_info.js',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg'
    ];
    event.waitUntil(
        caches.open('x1').then(function(cache) {
            return cache.addAll(urlToCache);
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response) return response;
            return fetch(event.request);
        })
    )
});
