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
    <h1>{{ $t("webtrader.main_heading") }}</h1>
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
          <div class="col-12 col-md-8 offset-md-2">
            <div class="page_content_area special_text_area bg-white">
              <p class="text-center">{{ $t("webtrader.section_2.heading") }}</p>
              <div class="text-center">
                <router-link
                :to="'/' + $i18n.locale + '/webtrader-platform'"
                  class="btn btn-secondary rounded-pill mx-2 mb-4 btn_download text-center d-inline-block"
                >
                  <span class="button_text">
                    {{ $t("webtrader.section_2.button_label") }}
                  </span>
                </router-link>
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
                    src="../assets/img/icons-image/like.png"
                    alt="Convenient"
                /></span>
              </div>
              <h3>{{ $t("webtrader.section_2.heading_1") }}</h3>
              <p>{{ $t("webtrader.section_2.description_1") }}</p>
            </div>
            <div class="info_icon text-center my-5">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/lock.png"
                    alt="Secure"
                /></span>
              </div>
              <h3>{{ $t("webtrader.section_2.heading_2") }}</h3>
              <p>{{ $t("webtrader.section_2.description_2") }}.</p>
            </div>
          </div>
          <div class="col-md-6">
            <img
              class="w-100 flyIn trader_image"
              src="../assets/img/laptop_noor.png"
              alt="Web Trader"
            />
          </div>
          <div class="col-md-3 trader_info_icons">
            <div class="info_icon text-center my-5">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/heart.png"
                    alt="User-Friendly"
                /></span>
              </div>
              <h3>{{ $t("webtrader.section_2.heading_3") }}</h3>
              <p>{{ $t("webtrader.section_2.description_3") }}</p>
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
              <h3>{{ $t("webtrader.section_2.heading_4") }}</h3>
              <p>{{ $t("webtrader.section_2.description_4") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Ends Account Types Content Section-->
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
