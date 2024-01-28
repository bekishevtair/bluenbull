<template>
  <!-- Topbar section starts -->
  <div class="topbar_section px-sm-5">
    <div class="row align-items-center">
      <!-- Topbar contact info starts -->
      <div class="col text-center text-sm-start">
        <ul class="top_contact">
          <li class="top_contact_item">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <a href="tel:+61 862 302 765">+61 862 302 765</a>
          </li>
          <li class="top_contact_item">
            <font-awesome-icon icon="fa-solid   fa-envelope" />
            <a href="mailto:support@rosyfx.com">support@rosyfx.com</a>
          </li>
        </ul>
      </div>
      <!-- Topbar contact info ends -->
      <!-- Topbar login-registration starts -->
      <div class="col text-end login_links">
        <ul class="top_menu">
          <li>
            <a
              href="https://personal.rosyfx.com/Account/Login"
              target="_blank"
              class="btn btn-secondary rounded-pill log_btn"
              >{{ $t("header.login") }}</a
            >
          </li>
          <li>
            <a
              href="https://personal.rosyfx.com/accounts/live-trading-account-registration/"
              target="_blank"
              class="btn btn-secondary rounded-pill log_btn"
              >{{ $t("header.register") }}</a
            >
          </li>
          <li class="language_list">
            <a class="language_menu"
              ><img :src="imageSrc($i18n.locale)" alt="English" width="20" />
              {{ selectedLocale }}</a
            >
            <ul class="sub_menu list-unstyled text-start">
              <li
                class="menu-item"
                v-for="locale in $i18n.availableLocales"
                :key="locale"
                @click="switchLocale(locale)"
              >
                <a
                  ><img :src="imageSrc(locale)" :alt="locale" width="20" />
                  {{ $t(`header.${locale}`) }}</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Topbar login-registration ends -->
    </div>
  </div>
  <!-- Topbar section ends -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["scrollPosition"],
  data() {
    return {
      selectedLocale: this.$t(`header.${this.$i18n.locale}`),
    };
  },
  methods: {
    switchLocale(locale: string) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        if (locale === "en") {
          this.selectedLocale = "English (English)";
        } else if (locale === "es") {
          this.selectedLocale = "Español (Spanish)";
        } else if (locale === "vi") {
          this.selectedLocale = "Tiếng Việt (Vietnamese)";
        } else if (locale === "pt") {
          this.selectedLocale = "Portuguese (Brazil)";
        } else {
          this.selectedLocale = "English (English)";
        }
      }
      this.$router.push({ name: this.$route.name, params: { lang: this.$i18n.locale } })
      const html = document.documentElement
      html.setAttribute('lang', this.$i18n.locale)
    },
    imageSrc(localeer: string) {
      return new URL(`../assets/img/${localeer}.png`, import.meta.url).href;
    },
  },
  created() {
    let locale = this.$route.params.lang.toString();
    this.switchLocale(locale);
  },
});
</script>
