/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:lang",
      name: "home2",
      component: HomeView,
      meta: {
        title: 'ComfyFX',
        metaTags: [
          {
            name: 'description',
            content: 'We have the perfect platform for every type of trader.'
          },
          {
            property: 'og:description',
            content: 'We have the perfect platform for every type of trader.'
          }
        ]
      }
    },
    {
      path: "/",
      name: "home",
      redirect: to => {
        // the function receives the target route as the argument
        // a relative location doesn't start with `/`
        // or { path: 'profile'}
        return 'en'
      },
      meta: {
        title: 'ComfyFX',
        metaTags: [
          {
            name: 'description',
            content: 'We have the perfect platform for every type of trader.'
          },
          {
            property: 'og:description',
            content: 'We have the perfect platform for every type of trader.'
          }
        ]
      }
    },
    {
      path: "/:lang/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/:lang/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/:lang/registration",
      name: "registration",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/RegistrationView.vue"),
    },
    {
      path: "/:lang/accounts",
      name: "accounts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AccountView.vue"),
      meta: {
        title: 'Account',
        metaTags: [
          {
            name: 'description',
            content: 'Acoount'
          },
          {
            property: 'og:description',
            content: 'We have the perfect platform for every type of trader.'
          }
        ]
      }
    },
    {
      path: "/:lang/:catchAll(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
    {
      path: "/:lang/platforms",
      name: "platforms",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/PlatformsView.vue"),
    },
    {
      path: "/:lang/first-class-account",
      name: "first-class-account",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/FirstClassAccountView.vue"),
    },
    {
      path: "/:lang/live",
      name: "live-account",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/LiveAccountView.vue"),
    },
    {
      path: "/:lang/standard",
      name: "standard-account",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/StandardAccountView.vue"),
    },
    {
      path: "/:lang/demo",
      name: "demo-account",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/DemoAccountView.vue"),
    },
    {
      path: "/:lang/desktop-trader",
      name: "desktop-trader",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/DesktopTraderView.vue"),
    },
    {
      path: "/:lang/webtrader",
      name: "webtrader",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/WebtraderView.vue"),
    },
    {
      path: "/:lang/mobile",
      name: "mobile",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/MobileTraderView.vue"),
    },
    {
      path: "/:lang/webtrader-platform",
      name: "webtrader-platform",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/LaunchWebtrader.vue"),
    },
    {
      path: "/:lang/instruments",
      name: "instruments",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/InstrumentsView.vue"),
    },
    {
      path: "/:lang/stocks",
      name: "stocks",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/StocksView.vue"),
    },
    {
      path: "/:lang/indices",
      name: "indices",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/IndicesView.vue"),
    },
    {
      path: "/:lang/bonds",
      name: "bonds",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/BondsView.vue"),
    },
    {
      path: "/:lang/commodities",
      name: "commodities",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/CommoditiesView.vue"),
    },
    {
      path: "/:lang/cryptocurrencies",
      name: "cryptocurrencies",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/CryptocurrenciesView.vue"),
    },
    {
      path: "/:lang/forex",
      name: "forex",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/ForexView.vue"),
    },
    {
      path: "/:lang/bony-academy",
      name: "bony-academy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/BonyView.vue"),
    },
    {
      path: "/:lang/trading-tools",
      name: "trading-tools",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/TradingToolsView.vue"),
    },
    {
      path: "/:lang/holidays",
      name: "holidays",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/PublicHolidaysView.vue"),
    },
    {
      path: "/:lang/rollover",
      name: "rollover",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/RolloverView.vue"),
    },
    {
      path: "/:lang/dividends",
      name: "dividends",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/DividendsView.vue"),
    },
    {
      path: "/:lang/glossary",
      name: "glossary",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/GlossaryView.vue"),
    },
    {
      path: "/:lang/contacts",
      name: "contacts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/:lang/faq",
      name: "faq",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/FaqView.vue"),
    },
    {
      path: "/:lang/terms-conditions",
      name: "terms-conditions",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/TermsConditionsView.vue"),
    },
    {
      path: "/:lang/privacy-policy",
      name: "privacy-policy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/PrivacyPolicyView.vue"),
    },
    {
      path: "/:lang/partners",
      name: "partners",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/PartnersView.vue"),
    },
    {
      path: "/:lang/risk-disclaimer",
      name: "risk-disclaimer",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/RiskDisclaimerView.vue"),
    },
    {
      path: "/:lang/aml-kyc-policy",
      name: "aml-kyc-policy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/KYCPolicyView.vue"),
    },
    {
      path: "/:lang/refund-policy",
      name: "refund-policy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/RefundPolicyView.vue"),
    },
  ],
});

// ... 

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  Object.values(nearestWithMeta.meta.metaTags).map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

// ...

export default router;
