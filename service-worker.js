"use strict";var precacheConfig=[["/nao-nasci-pra-ser-a-outra/index.html","67d24772b0d1ed911857a718145c497d"],["/nao-nasci-pra-ser-a-outra/static/css/main.80abee9e.css","800b60f88809f72c9da6af17ff796884"],["/nao-nasci-pra-ser-a-outra/static/js/main.1d5df365.js","54dd6525de6244648d8ab4242378b107"],["/nao-nasci-pra-ser-a-outra/static/media/Gloss_And_Bloom.34424cb4.ttf","34424cb4a9c03b72de3d38ed59634c6e"],["/nao-nasci-pra-ser-a-outra/static/media/Gobold-Regular.dcc29e96.otf","dcc29e9629db789a619ecb3a76106028"],["/nao-nasci-pra-ser-a-outra/static/media/bg-part1.9acbc082.jpg","9acbc082fca9ad45152c9fea2b068a41"],["/nao-nasci-pra-ser-a-outra/static/media/bg-part2.c49b366d.jpg","c49b366d795a648e94f6357504d5548e"],["/nao-nasci-pra-ser-a-outra/static/media/bg-part3.13378def.jpg","13378deffc4c0d551689b68df0320ff8"],["/nao-nasci-pra-ser-a-outra/static/media/bg-part4.e0d94447.jpg","e0d944479fceb8250f4773a6b4a128be"],["/nao-nasci-pra-ser-a-outra/static/media/img-left-part1.3869746e.png","3869746e66bdb1868db9d87ce3dda8e8"],["/nao-nasci-pra-ser-a-outra/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/nao-nasci-pra-ser-a-outra/static/media/logo.968018f1.png","968018f1237186d574320d08f6e7fd9c"],["/nao-nasci-pra-ser-a-outra/static/media/pac-man-ghost.7962d5df.svg","7962d5df940693817aae748e96a0a8f1"],["/nao-nasci-pra-ser-a-outra/static/media/r1.3f03f018.jpg","3f03f0181d5f5aa2b6b666e105ea8126"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/nao-nasci-pra-ser-a-outra/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});