<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <!-- Header section starts -->
  <header class="header_section" id="header_section">
    <div class="container-fluid px-sm-5">
      <div class="row align-items-center">
        <!-- Logo Holder-->
        <div class="col-6 col-md-2 logo_holder">
          <router-link :to="'/' + $i18n.locale + '/'" class="navbar-brand"
            ><img src="../assets/img/logo.png" alt="RosyFX"
          /></router-link>
        </div>
        <!-- Navbar Holder-->
        <div class="col-6 col-md-10 text-end">
          <!-- Nav Section Start -->
          <nav
            class="navbar navbar-expand-lg navbar-dark mobile_no_x_padding justify-content-end"
          >
            <button
              class="navbar-toggler menu-tab"
              type="button"
              @click="toggleMenu"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"
                ><font-awesome-icon icon="fa-solid fa-bars-staggered"
              /></span>
            </button>
            <div class="main_menu" :class="{ show: showMenu }">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <button class="menu-close" @click="toggleMenu">
                  <font-awesome-icon icon="fa-solid fa-times" />
                </button>
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item active dropdown">
                    <router-link :to="'/' + $i18n.locale + '/accounts'" class="nav-link">{{
                      $t("header.accounts")
                    }}</router-link>
                    <span
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      ><font-awesome-icon icon="fas fa-angle-down"
                    /></span>
                    <!-- Sub menu  -->
                    <ul class="sub_menu list-unstyled text-start dropdown-menu">
                      <!-- <li class="menu-item">
                        <router-link to="/first-class-account">{{
                          $t("header.accounts-1")
                        }}</router-link>
                      </li> -->
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/live'">{{
                          $t("header.accounts-2")
                        }}</router-link>
                      </li>
                      <!-- <li class="menu-item">
                        <router-link to="/standard">{{
                          $t("header.accounts-3")
                        }}</router-link>
                      </li> -->
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/demo'">{{
                          $t("header.accounts-4")
                        }}</router-link>
                      </li>
                    </ul>
                    <!-- Sub menu ends -->
                  </li>
                  <li class="nav-item">
                    <router-link :to="'/' + $i18n.locale + '/bony-academy'" class="nav-link">{{
                      $t("header.academy")
                    }}</router-link>
                    <!-- Sub menu ends -->
                  </li>
                  <li class="nav-item">
                    <router-link :to="'/' + $i18n.locale + '/instruments'" class="nav-link">{{
                      $t("header.instruments")
                    }}</router-link>
                    <span
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      ><font-awesome-icon icon="fas fa-angle-down"
                    /></span>
                    <!-- Sub menu  -->
                    <ul class="sub_menu list-unstyled text-start dropdown-menu">
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/stocks'">{{
                          $t("header.instruments-1")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/indices'">{{
                          $t("header.instruments-2")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/bonds'">{{
                          $t("header.instruments-3")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/commodities'">{{
                          $t("header.instruments-4")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/cryptocurrencies'">{{
                          $t("header.instruments-5")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/forex'">{{
                          $t("header.instruments-6")
                        }}</router-link>
                      </li>
                    </ul>
                    <!-- Sub menu ends -->
                  </li>
                  <li class="nav-item">
                    <router-link :to="'/' + $i18n.locale + '/platforms'" class="nav-link">{{
                      $t("header.platforms")
                    }}</router-link>
                    <span
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      ><font-awesome-icon icon="fas fa-angle-down"
                    /></span>
                    <!-- Sub menu  -->
                    <ul class="sub_menu list-unstyled text-start dropdown-menu">
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/desktop-trader'">{{
                          $t("header.platforms-1")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/webtrader'">{{
                          $t("header.platforms-2")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/mobile'">{{
                          $t("header.platforms-3")
                        }}</router-link>
                      </li>
                    </ul>
                    <!-- Sub menu ends -->
                  </li>
                  <li class="nav-item">
                    <router-link :to="'/' + $i18n.locale + '/trading-tools'" class="nav-link">{{
                      $t("header.trading")
                    }}</router-link>
                    <span
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      ><font-awesome-icon icon="fas fa-angle-down"
                    /></span>
                    <!-- Sub menu  -->
                    <ul class="sub_menu list-unstyled text-start dropdown-menu">
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/holidays'">{{
                          $t("header.trading-1")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/rollover'">{{
                          $t("header.trading-2")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/dividends'">{{
                          $t("header.trading-3")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/glossary'">{{
                          $t("header.trading-4")
                        }}</router-link>
                      </li>
                    </ul>
                    <!-- Sub menu ends -->
                  </li>
             
                  <li class="nav-item">
                    <a href="#" class="nav-link">{{ $t("header.policies") }}</a>
                    <span
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      ><font-awesome-icon icon="fas fa-angle-down"
                    /></span>
                    <!-- Sub menu  -->
                    <ul class="sub_menu list-unstyled text-start dropdown-menu">
                      <li class="menu-item">
                        <router-link target="_blank" :to="'/files/'+ $i18n.locale + '/Terms_and_Conditions.pdf'">{{
                          $t("header.policies-1")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link target="_blank" :to="'/files/'+ $i18n.locale + '/Privacy_Policy.pdf'">{{
                          $t("header.policies-2")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link target="_blank" :to="'/files/'+ $i18n.locale + '/Risk_Disclaimer.pdf'">{{
                          $t("header.policies-3")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link target="_blank" :to="'/files/'+ $i18n.locale + '/AML_and_KYC_Policy.pdf'">{{
                          $t("header.policies-4")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link target="_blank" :to="'/files/'+ $i18n.locale + '/Refund_Policy.pdf'">{{
                          $t("header.policies-5")
                        }}</router-link>
                      </li>
                    </ul>
                    <!-- Sub menu ends -->
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">{{ $t("header.about") }}</a>
                    <span
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      ><font-awesome-icon icon="fas fa-angle-down"
                    /></span>
                    <!-- Sub menu  -->
                    <ul class="sub_menu list-unstyled text-start dropdown-menu">
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/contacts'">{{
                          $t("header.about-1")
                        }}</router-link>
                      </li>
                      <li class="menu-item">
                        <router-link :to="'/' + $i18n.locale + '/faq'">{{
                          $t("header.about-2")
                        }}</router-link>
                      </li>
                    </ul>
                    <!-- Sub menu ends -->
                  </li>
                  <li class="nav-item">
                    <a class="language_menu nav-link"
                      ><img
                        :src="imageSrc($i18n.locale)"
                        alt="English"
                        width="20"
                      />
                      <!-- {{ selectedLocale }} -->
                    </a>
                    <span
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      ><font-awesome-icon icon="fas fa-angle-down"
                    /></span>
                    <!-- Sub menu  -->
                    <ul
                      class="sub_menu list-unstyled text-start text-start dropdown-menu"
                    >
                      <li
                        class="menu-item"
                        v-for="locale in $i18n.availableLocales"
                        :key="locale"
                        @click="switchLocale(locale)"
                      >
                        <a
                          ><img
                            :src="imageSrc(locale)"
                            :alt="locale"
                            width="20"
                          />

                          {{ $t(`header.${locale}`) }}
                        </a>
                      </li>
                    </ul>
                    <!-- Sub menu ends -->
                  </li>
                  <ul
                    class="mobile_login_menu p-0 d-flex list-unstyled justify-content-center align-items-center"
                  >
                    <li>
                      <a
                        :href="urlLogin"
                        target="_blank"
                        class="btn btn-secondary rounded-pill log_btn m-1"
                      >
                        {{ $t("header.login.button-label") }}
                      </a>
                      >
                    </li>
                    <li>
                      <a
                        :href="urlRegister"
                        target="_blank"
                        class="btn btn-secondary rounded-pill log_btn m-1"
                      >
                        {{ $t("header.register.button-label") }}
                      </a>
                    </li>
                  </ul>
                </ul>
                <!-- Login Registration Buttons For Mobile Menu -->

                <!-- Login Registration Buttons For Mobile Menu Ends -->
              </div>
            </div>
          </nav>
          <!-- Nav Section End -->
        </div>
      </div>
    </div>
  </header>
  <!-- Header section ends -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      showMenu: false,
      selectedLocale: this.$t(`header.${this.$i18n.locale}`),
    };
  },
  computed: {
    urlLogin() {
      return this.$t("header.login.link");
    },
    urlRegister() {
      return this.$t("header.register.link");
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.setBodyClass("open_menu_nav");
    },
    setBodyClass(className: string) {
      var body = document.body;
      body.classList.toggle(className);
    },
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
      html.setAttribute('lang', this.$i18n.locale);
    },
    imageSrc(localeer: string) {
      return new URL(`../assets/img/${localeer}.png`, import.meta.url).href;
    },
  },

  created() {
    let locale = this.$route.params.lang.toString();
    this.switchLocale(locale)
  },
});
</script>
