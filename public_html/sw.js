/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1bfc9850-80d8bc70e840911b6321.js"
  },
  {
    "url": "1bfc9850-80d8bc70e840911b6321.js.map",
    "revision": "b7ef8d23e6ac9073abeca8be187eda3c"
  },
  {
    "url": "252f366e-b4ac2d01e6e1831f79fa.js"
  },
  {
    "url": "252f366e-b4ac2d01e6e1831f79fa.js.map",
    "revision": "706cb525446c1db8bf08236b6d794423"
  },
  {
    "url": "404.html",
    "revision": "dd3c489c6a54bd942a6131a8d808aea8"
  },
  {
    "url": "404/index.html",
    "revision": "bde609d39dc6e2dded0d4010aa7c8ee4"
  },
  {
    "url": "4453973e3442044ae37022e4b9a2937f1a7474cf-e64a9e7163e8347cf0c1.js"
  },
  {
    "url": "4453973e3442044ae37022e4b9a2937f1a7474cf-e64a9e7163e8347cf0c1.js.LICENSE.txt",
    "revision": "564025749d52cdf1fda7b34a53d48c73"
  },
  {
    "url": "4453973e3442044ae37022e4b9a2937f1a7474cf-e64a9e7163e8347cf0c1.js.map",
    "revision": "6fa5eb32245cd1d213f330c7d53f0734"
  },
  {
    "url": "95b64a6e-8fede62c222ddf606fe0.js"
  },
  {
    "url": "95b64a6e-8fede62c222ddf606fe0.js.map",
    "revision": "e23dce0685e74d3d803a9a28deda94ee"
  },
  {
    "url": "app-fee153aa17f66e94a757.js"
  },
  {
    "url": "app-fee153aa17f66e94a757.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-fee153aa17f66e94a757.js.map",
    "revision": "f738dbedb0c631b463cd1f165aa86ba4"
  },
  {
    "url": "chunk-map.json",
    "revision": "7dc98d96e3d87156372970c77efc6023"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a95b272f8c25b9a8a758.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a95b272f8c25b9a8a758.js.map",
    "revision": "eca9882055fc44168e454e97de46aa7c"
  },
  {
    "url": "component---src-pages-404-tsx-61429dbe934711fc08ab.js"
  },
  {
    "url": "component---src-pages-404-tsx-61429dbe934711fc08ab.js.map",
    "revision": "20ddbafc3098382e3454a137615e4e2f"
  },
  {
    "url": "component---src-pages-index-tsx-fcc2f18847771d93add2.js"
  },
  {
    "url": "component---src-pages-index-tsx-fcc2f18847771d93add2.js.map",
    "revision": "b773d920aa10d5b5bee5aff46bbe086f"
  },
  {
    "url": "component---src-pages-test-tsx-3c1395e967ad755ed33d.js"
  },
  {
    "url": "component---src-pages-test-tsx-3c1395e967ad755ed33d.js.map",
    "revision": "3064e06cfed51728b29c35aae6144612"
  },
  {
    "url": "css/animate.css"
  },
  {
    "url": "css/global.css"
  },
  {
    "url": "css/tailwind.css"
  },
  {
    "url": "d7eeaac4-2f5e1191b91ad783ae74.js"
  },
  {
    "url": "d7eeaac4-2f5e1191b91ad783ae74.js.map",
    "revision": "53360bc5213b7333a46ccb4b971040bc"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "02a739004ed6c95dd240fbc95aff8e93"
  },
  {
    "url": "framework-96f2a45b7f57ca14c9e2.js"
  },
  {
    "url": "framework-96f2a45b7f57ca14c9e2.js.LICENSE.txt",
    "revision": "f1d523c904ebbd453f563f0acfae6349"
  },
  {
    "url": "framework-96f2a45b7f57ca14c9e2.js.map",
    "revision": "00980416be3d0bbea93d81a14d410806"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "57e5f88d29e2dc2ecf956e8b31226a2a"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "85eb7daaee184853a3cc2b71d5c7f09e"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "69db4aeedd93e82f2663b7b7d9b0c50a"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "690055e1d166f913cf30dd7944cd307f"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "9a4e0061bb2916905ef99a782c68cc19"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "6b8933f1588b51a4c362ab1ed8f72356"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "ff39ced7d5dbeeab0da8fc4836990999"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "06becb89b2f5e35a049f8ddaf23217e1"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "images/about-me/selfie-boy.png",
    "revision": "557611a13ab6dfc07b7c78e198db3f42"
  },
  {
    "url": "images/icon.png",
    "revision": "f9679af87b8e0ab2788b9183b97382dc"
  },
  {
    "url": "images/logo_.png",
    "revision": "65f36a66470d23bc0561a7f5cc11a2ac"
  },
  {
    "url": "images/logo.png",
    "revision": "6afd16163add6aeee3cd0142c17907be"
  },
  {
    "url": "images/photo.png",
    "revision": "f5a9604ea81e7f3e0cb5811488c4045a"
  },
  {
    "url": "images/portfolio/acdo-240w.png",
    "revision": "0a68a896dd3a195279d3a6c4f4333833"
  },
  {
    "url": "images/portfolio/acdo-320w.png",
    "revision": "a3c5c5da9e15627af37b7f79d89189aa"
  },
  {
    "url": "images/portfolio/aceco-240w.png",
    "revision": "4e36e899fbc885e4b2818ffbc74f3b45"
  },
  {
    "url": "images/portfolio/aceco-320w.png",
    "revision": "534298b7b593e19af70b3797e5c165f1"
  },
  {
    "url": "images/portfolio/aceco.png",
    "revision": "e3f7b20c14b3fdb05a3802e19b1b34a6"
  },
  {
    "url": "images/portfolio/alejandro-bernabe-arquitectos-240w.png",
    "revision": "c22e07fecd90d54f657e3b6f7a112644"
  },
  {
    "url": "images/portfolio/alejandro-bernabe-arquitectos-320w.png",
    "revision": "58254836e90ff99c1fc3389a98100ac7"
  },
  {
    "url": "images/portfolio/alejandro-bernabe-arquitectos.png",
    "revision": "8228d095386bf43c4cd8123d90443f8d"
  },
  {
    "url": "images/portfolio/dietetica-aquelarre-240w.png",
    "revision": "fb3703dac5bdbcc27fd2cb96df471794"
  },
  {
    "url": "images/portfolio/dietetica-aquelarre-320w.png",
    "revision": "ee629cedf33fb3467a2db7ef8783fcdb"
  },
  {
    "url": "images/portfolio/dietetica-aquelarre.png",
    "revision": "b5981b301d53768469859552ccc29a68"
  },
  {
    "url": "images/portfolio/el-pinar-240w.png",
    "revision": "539eabb7088cab9ece814184847f6629"
  },
  {
    "url": "images/portfolio/el-pinar-320w.png",
    "revision": "9a2288315ecf3471ed319b1627e6b354"
  },
  {
    "url": "images/portfolio/el-pinar.png",
    "revision": "d47827a27ba555e79ed4f78c7f9de4e5"
  },
  {
    "url": "images/portfolio/gys-240w.png",
    "revision": "215d3bf6401ad38c2dec4ea52b8f3f17"
  },
  {
    "url": "images/portfolio/gys-320w.png",
    "revision": "eef8a31a041befe89081b4c5b43ee78d"
  },
  {
    "url": "images/portfolio/gys.png",
    "revision": "2d2b6b261c155aef2ed1448ba6ae9331"
  },
  {
    "url": "images/portfolio/la-cachirla-240w.png",
    "revision": "29f89a76f9c07aa32b339d4ffffa955a"
  },
  {
    "url": "images/portfolio/la-cachirla-320w.png",
    "revision": "7e52b33437ea793a594ab41e82146cf5"
  },
  {
    "url": "images/portfolio/la-cachirla.jpg",
    "revision": "29d569b70047177bb9dc42349f9e01db"
  },
  {
    "url": "images/portfolio/repliegue-240w.png",
    "revision": "62166376fcd391d6bb48b8fb8f4f4fef"
  },
  {
    "url": "images/portfolio/repliegue-320w.png",
    "revision": "1fcefcd3134ae514241b885fb2827c3b"
  },
  {
    "url": "images/portfolio/repliegue.png",
    "revision": "cfa1f408af35b321ec502b1bb67b2d65"
  },
  {
    "url": "images/portfolio/taller-rocca-240w.png",
    "revision": "435a8872e79fd66ba522cc1d2eed5458"
  },
  {
    "url": "images/portfolio/taller-rocca-320w.png",
    "revision": "0a4a9bd1516066c89cc49e167f44e7ad"
  },
  {
    "url": "images/portfolio/taller-rocca.png",
    "revision": "a645e9f47648e91002716cf771e42596"
  },
  {
    "url": "images/projects/mi-cv-240w.png",
    "revision": "77dc7f4e4d2398d8075213a188c82997"
  },
  {
    "url": "images/projects/mi-cv-320w.png",
    "revision": "4aa0b6ac5cffbb0e9e9ba7cc4570cc3e"
  },
  {
    "url": "images/resume/preview.png",
    "revision": "2aa59663e58354bec49e51d2c6bd10d6"
  },
  {
    "url": "images/share.png",
    "revision": "62e4b00bcb211c7de86ae7ace9bcae62"
  },
  {
    "url": "images/skills/android.png",
    "revision": "8e0b048da80c2cdab277bc72f5448b46"
  },
  {
    "url": "images/skills/angular.png",
    "revision": "2ed6525940a535066abe1591a5881f68"
  },
  {
    "url": "images/skills/database.png",
    "revision": "7268e8ad3f7ebbc25b2736ba14e2a666"
  },
  {
    "url": "images/skills/fcpx.png",
    "revision": "0cfdd8aabddfbc9c1a5c20a644eea6e3"
  },
  {
    "url": "images/skills/flutter.png",
    "revision": "d6b809d0a522236b5aaae57f8545858c"
  },
  {
    "url": "images/skills/gatsby.png",
    "revision": "b7637c262ad964cf2f70abbbfc9e1f93"
  },
  {
    "url": "images/skills/git.png",
    "revision": "8202b9ff985a20b8c482843b88e6a580"
  },
  {
    "url": "images/skills/graphql.png",
    "revision": "61813d297ca6716edced8a19fa2f9259"
  },
  {
    "url": "images/skills/material-ui.png",
    "revision": "5689bd001fdea2d0788e032329715250"
  },
  {
    "url": "images/skills/next-js.png",
    "revision": "6a27b43d958a4ccf1ebc9ceb8c52de7e"
  },
  {
    "url": "images/skills/next-js.svg",
    "revision": "b5d25ca3c0decaea251b75c69a934e8b"
  },
  {
    "url": "images/skills/nodejs.png",
    "revision": "394d4a6d64b33c86aa71e6ec7896c283"
  },
  {
    "url": "images/skills/photography.png",
    "revision": "9c441f34ec47c9100fa442880a08b99c"
  },
  {
    "url": "images/skills/python.png",
    "revision": "3afb5a499062c7582791a16f967c51cc"
  },
  {
    "url": "images/skills/react-native.png",
    "revision": "94a2afdf5adee19f494a4566e7208937"
  },
  {
    "url": "images/skills/react.png",
    "revision": "0601b5678a8dd1e0d2f2914248436804"
  },
  {
    "url": "images/skills/seo.png",
    "revision": "35261891568ab6bb0697b2ee03e45d98"
  },
  {
    "url": "images/skills/sequelize.png",
    "revision": "fb2908c99b35364c2fdf3d62dee602f2"
  },
  {
    "url": "images/skills/sketch.png",
    "revision": "0ae19800753980c5ce212371f138f227"
  },
  {
    "url": "images/skills/socket.io.png",
    "revision": "1642c11a19ef9e30d3f9246b4e2db396"
  },
  {
    "url": "images/skills/styled-components.png",
    "revision": "3745d5de0728ec47786eb328c7076356"
  },
  {
    "url": "images/skills/tensorflow.png",
    "revision": "3d1319a937789deb7589e73bef70fe8a"
  },
  {
    "url": "images/skills/web.png",
    "revision": "3500eb903f7a9c057b45b789cfc5da63"
  },
  {
    "url": "images/skills/wordpress.png",
    "revision": "378a6ff3904ba54a8e1fc97cc14fabc5"
  },
  {
    "url": "images/yo.jpg",
    "revision": "9975addb85d6946ab8d7b1e532619bc8"
  },
  {
    "url": "index.html",
    "revision": "ded45012ba9be45906e2284b168a4331"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e4fd0c56d535341e52b0ac2114ebdac0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "eb1eda4892cb0f3146d80625c80ca432"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "cace30450d05cb34a4bc4d3c30e1672a"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "ec4b264096ec487cb411bc9df44fabbf"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "29252a20e2bef25dad99ca4c37ae6bac"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "eab973f37a4f5fb75912c9569a8fd445"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/sq/d/1231508858.json",
    "revision": "091e0950056d6d000f88b6a3e5f0581d"
  },
  {
    "url": "page-data/sq/d/2532418358.json",
    "revision": "dc5aebbf2e17d8dc3c531c55d223808d"
  },
  {
    "url": "page-data/sq/d/3195219088.json",
    "revision": "3884bfe52c42f288afbfd7040acce691"
  },
  {
    "url": "page-data/sq/d/3698118358.json",
    "revision": "13a11294787acb44f2c51d158aa67d7b"
  },
  {
    "url": "page-data/sq/d/4144595818.json",
    "revision": "6cd34c4975c7fa5f175621e1f8f3fd7b"
  },
  {
    "url": "page-data/sq/d/752792606.json",
    "revision": "24388777484c97a70b7c52d713f275e5"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "5e425f5b62d3d26ec058ac46e3e56c93"
  },
  {
    "url": "polyfill-168333cf396c59294c97.js"
  },
  {
    "url": "polyfill-168333cf396c59294c97.js.map",
    "revision": "073014f09b47ca2267c88eefd6517c9b"
  },
  {
    "url": "robots.txt",
    "revision": "44a29f5c624d180ed9a5515fe0a1fa9b"
  },
  {
    "url": "sitemap.xml",
    "revision": "f35cf188f14183294c3b5bbedb1bb2e2"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js.map",
    "revision": "c5efe2c790546eb72253e52cf8b2489c"
  },
  {
    "url": "styles.94153fe20822e9503c5c.css"
  },
  {
    "url": "test/index.html",
    "revision": "1459f5f56af5174966a22f680a82a095"
  },
  {
    "url": "webpack-runtime-21930e29cbb054e37318.js"
  },
  {
    "url": "webpack-runtime-21930e29cbb054e37318.js.map",
    "revision": "a335638d95ec36352c80f4b9ee0cc953"
  },
  {
    "url": "webpack.stats.json",
    "revision": "2a766cbdb39ebbef33f596192217c26b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-fee153aa17f66e94a757.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
