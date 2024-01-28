import { createApp } from "vue";
import { createPinia } from "pinia";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { createI18n } from "vue-i18n";

// import messages from "@intlify/unplugin-vue-i18n/messages";
import en from "./locales/en.json";
import vi from "./locales/vi.json";
import ar from "./locales/ar.json";
// import en from "./locales/en.json";
// import es from "./locales/es.json";
// import pt from "./locales/pt.json";

/* add icons to the library */
library.add(
  faPhone,
  faEnvelope,
  faArrowRight,
  faCheckCircle,
  faAngleDoubleRight,
  faBarsStaggered,
  faTimes,
  faAngleDown
);

import "./assets/theme.css";

type MessageSchema = typeof en;

// const i18n = createI18n<[MessageSchema], "en" | "es" | "pt" | "vi">({
const i18n = createI18n<[MessageSchema], "en" | "vi" | "ar">({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "vi", "ar"],
  messages: { en, vi, ar },
  // availableLocales: ["en", "es", "pt", "vi"],
  // messages: { en, es, pt, vi },
});

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://c913a9d8b5fc454b9dfe24c5daba6f27@o4503969830862848.ingest.sentry.io/4503969846525952",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  logErrors: true,
});

app.use(i18n);
app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
