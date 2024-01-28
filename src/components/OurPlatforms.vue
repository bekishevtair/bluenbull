<template>
  <!--Our Platform Section Starts-->
  <section class="platforms_section section_container" id="platforms_section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center title_section text-white">
          <h2 class="main_title section_title">
            {{ $t("home-page.platforms-section.heading") }}
          </h2>
          <p>{{ $t("home-page.platforms-section.sub-heading") }}</p>
        </div>
      </div>
      <!--Our Platform Info Boxes-->
      <div class="row platform_info_sec">
        <div class="col-12 col-md-4 mb-3">
          <div class="info_box text-center">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/desktop.png"
                  alt="Desktop"
              /></span>
            </div>
            <h3>{{ $t("home-page.platforms-section.desktop-heading") }}</h3>
            <p>{{ $t("home-page.platforms-section.desktop-description") }}</p>
            <router-link :to="'/' + $i18n.locale + '/desktop-trader'">
              {{ $t("home-page.platforms-section.button-label") }}
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="info_box text-center">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/webtrader.png"
                  alt="Webtrader"
              /></span>
            </div>
            <h3>{{ $t("home-page.platforms-section.webtrader-heading") }}</h3>
            <p>
              {{ $t("home-page.platforms-section.webtrader-descdription") }}
            </p>
            <router-link :to="'/' + $i18n.locale + '/webtrader'">
              {{ $t("home-page.platforms-section.button-label") }}
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="info_box text-center">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/mobileTrader.png"
                  alt="Mobile Trader"
              /></span>
            </div>
            <h3>{{ $t("home-page.platforms-section.mobile-heading") }}</h3>
            <p>{{ $t("home-page.platforms-section.mobile-description") }}</p>
            <router-link :to="'/' + $i18n.locale + '/mobile'">
              {{ $t("home-page.platforms-section.button-label") }}
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </router-link>
          </div>
        </div>
      </div>
      <!--Our Platform Info Boxes Ends-->
    </div>
    <!-- Section Animation Element -->
    <div class="section_animate_element">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!-- Section Animation Element Ends -->
  </section>
  <!--Our Platform Section Ends-->
</template>
