<template>
  <!-- Header Section Starts -->
  <section
    class="header_container"
    v-bind:class="{ is_fixed: scrollPosition > 0 }"
  >
    <div class="menubar_section">
      <!-- <TopBar /> -->
      <Header />
    </div>
  </section>
  <!-- Header Section Ends -->

  <!-- Page title holder Starts -->
  <div class="page_title_holder">
    <h1>{{ $t("desktop.main_heading") }}</h1>
    <div class="section_element">
      <img
        src="/src/assets/img/element-image/dotLine1.png"
        alt="Banner Left Element"
        class="banner_left_element flyIn"
      />
      <img
        src="/src/assets/img/element-image/dotsRight.png"
        alt="Banner Left Element"
        class="banner_right_element"
      />
    </div>
  </div>
  <!-- Page title holder Ends -->

  <!-- Page Content Starts -->
  <div class="desktop_trader_page page_content p-0">
    <!--Page Content Section-->
    <div class="container account_type_sec">
      <div class="section_container">
        <div class="row">
          <!-- Text Content-->
          <div class="col-12 ">
            <div class="page_content_area special_text_area bg-white">
              <p class="text-center">{{ $t("desktop.trade.heading") }}</p>
              <div class="text-center">
                <a
                  href="https://download.mql5.com/cdn/web/namir.trade.ltd/mt5/namirtrade5setup.exe"
                  target="_blank"
                  class="btn btn-secondary rounded-pill mx-2 mb-4 btn_download"
                >
                  <img
                    src="../assets/img/icons-image/windows.png"
                    alt="Download for windows"
                  />
                  <span class="button_text pt-1">
                    {{ $t("desktop.trade.download_for") }}
                  </span>
                </a>
                <!-- <a
                  href="https://www.metatrader4.com/en/trading-platform/help/userguide/install_mac"
                  target="_blank"
                  class="btn btn-primary rounded-pill mx-2 mb-4 btn_download"
                >
                  <img
                    src="../assets/img/icons-image/apple-logo.png"
                    alt="Download for MAc OS"
                  />
                  <span class="button_text">
                    <small>{{ $t("desktop.trade.download_for2") }}</small>
                    {{ $t("desktop.trade.macos") }}
                  </span>
                </a> -->
              </div>
            </div>
          </div>
          <!-- Text Content Ends -->
        </div>
        <div class="row pt-md-5 bg-white align-items-center">
          <div class="col-md-3 trader_info_icons">
            <div class="info_icon text-center my-5">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/tools.png"
                    alt="Configurable"
                /></span>
              </div>
              <h3>{{ $t("desktop.trade.heading_1") }}</h3>
              <p>{{ $t("desktop.trade.description_1") }}.</p>
            </div>
            <div class="info_icon text-center my-5">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/sitetree.png"
                    alt="Seamless"
                /></span>
              </div>
              <h3>{{ $t("desktop.trade.heading_3") }}</h3>
              <p>{{ $t("desktop.trade.description_3") }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <img
              class="w-100 flyIn trader_image"
              src="../assets/img/desktop_noor.png"
              alt="Desktop Trader"
            />
          </div>
          <div class="col-md-3 trader_info_icons">
            <div class="info_icon text-center my-5">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/lock.png"
                    alt="Secure"
                /></span>
              </div>
              <h3>{{ $t("desktop.trade.heading_2") }}</h3>
              <p>{{ $t("desktop.trade.description_2") }}</p>
            </div>
            <div class="info_icon text-center my-5">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/graph2.png"
                    alt="Analytical"
                /></span>
              </div>
              <h3>{{ $t("desktop.trade.heading_4") }}</h3>
              <p>{{ $t("desktop.trade.description_4") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Ends Page Content Section-->
  </div>
  <!-- Page Content Ends -->

  <HowToStart />
</template>

<style></style>

<script lang="ts">
import TopBar from "../components/TopBar.vue";
import Header from "../components/Header.vue";
import HowToStart from "../components/HowToStart.vue";
export default {
  props: ["scrollPosition"],
  components: { TopBar, Header, HowToStart },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
