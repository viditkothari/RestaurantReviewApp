let cacheItem = "udacity";
let cacheStore = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
  "./index.html",
  "./restaurant.html",
  "./css/styles.css",
  "./js/dbhelper.js",
  "./js/main.js",
  "./js/restaurant_info.js",
  "./data/restaurants.json"
];
self.addEventListener("install", function(ev) {
  ev.waitUntil(
    caches.open(cacheItem).then(function(cache) {
      return cache.addAll(cacheStore).catch(error => {
        console.log(error + "");
      });
    })
  );
});
self.addEventListener("fetch", function(ev) {
  ev.respondWith(
    caches.match(ev.request).then(function(response) {
      if (response !== undefined) {
        return response;
      } else {
        return fetch(ev.request)
          .then(function(response) {
            const clonedResponse = response.clone(); //Helping resource - https://stackoverflow.com/questions/45618984/why-does-fetch-request-have-to-be-cloned-in-service-worker
            caches.open(cacheItem).then(function(cache) {
              cache.put(ev.request, clonedResponse);
            });
            return response;
          })
          .catch(error => {
            console.log(error);
          });
      }
    })
  );
});
