self.addEventListener('install', function(e) {

 e.waitUntil(

   caches.open('MyDark-store').then(function(cache) {

     return cache.addAll([

       '/DarkPortfolio/',

       '/DarkPortfolio/index.html',

       '/DarkPortfolio/index.js',

       '/DarkPortfolio/css/font-awesome.css',

       '/DarkPortfolio/css/font-awesome.min.css',

       '/DarkPortfolio/css/w3.css',

       '/DarkPortfolio/fonts/FontAwesome.otf',

       '/DarkPortfolio/fonts/fontawesome-webfont.eot',

       '/DarkPortfolio/fonts/fontawesome-webfont.svg',

       '/DarkPortfolio/fonts/fontawesome-webfont.ttf',

       '/DarkPortfolio/fonts/fontawesome-webfont.woff',

       '/DarkPortfolio/fonts/fontawesome-webfont.woff2',

       '/DarkPortfolio/w3images/underwater512.jpg',

       '/DarkPortfolio/w3images/avatar_g2.jpg',

       '/DarkPortfolio/w3images/avatar_smoke.jpg',

       '/DarkPortfolio/w3images/bandmember.jpg',

       '/DarkPortfolio/w3images/chef.jpg',

       '/DarkPortfolio/w3images/man_smoke.jpg',

       '/DarkPortfolio/w3images/p6.jpg',

       '/DarkPortfolio/w3images/rocks.jpg',

       '/DarkPortfolio/w3images/sailboat.jpg',

       '/DarkPortfolio/w3images/underwater.jpg',

       '/DarkPortfolio/w3images/wedding.jpg',

         '/DarkPortfolio/w3images/underwater512.png'

     ]);

   })

 );

});


self.addEventListener('fetch', function(e) {

  console.log(e.request.url);

  e.respondWith(

    caches.match(e.request).then(function(response) {

      return response || fetch(e.request);

    })

  );

});