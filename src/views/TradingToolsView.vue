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
    <h1>{{ $t("tradingtools.main_heading") }}</h1>
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
  <div class="account_page page_content">
    <div class="container account_type_sec">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-md-12 col-lg-4 bg-white">
          <div class="title_section page_content_title">
            <h2 class="main_title">
              <span>{{ $t("tradingtools.section_2.heading") }}</span
              >{{ $t("tradingtools.section_2.heading_span") }}
            </h2>
            <p>{{ $t("tradingtools.section_2.description") }}</p>
          </div>
        </div>
        <!-- Page Main Title Ends -->

        <!-- Tools Info Boxes -->
        <div class="col-md-6 col-lg-4 bg-white">
          <div class="acoount_info_box column_left">
            <div class="info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/DemoAccount.png"
                      alt="Public Holidays"
                  /></span>
                </div>
                <h3>{{ $t("tradingtools.section_2.heading_1") }}</h3>
                <p>{{ $t("tradingtools.section_2.description_1") }}</p>
                <router-link :to="'/' + $i18n.locale + '/holidays'"
                  >{{ $t("tradingtools.section_2.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
            <div class="info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/ProAccount.png"
                      alt="Dividends"
                  /></span>
                </div>
                <h3>{{ $t("tradingtools.section_2.heading_3") }}</h3>
                <p>{{ $t("tradingtools.section_2.description_3") }}</p>
                <router-link :to="'/' + $i18n.locale + '/dividends'"
                  >{{ $t("tradingtools.section_2.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="acoount_info_box column_right">
            <div class="info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/StandardAccount.png"
                      alt="Rollover"
                  /></span>
                </div>
                <h3>{{ $t("tradingtools.section_2.heading_2") }}</h3>
                <p>{{ $t("tradingtools.section_2.description_2") }}</p>
                <router-link :to="'/' + $i18n.locale + '/rollover'"
                  >{{ $t("tradingtools.section_2.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
            <div class="info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/FirstClassAccount.png"
                      alt="Glossary"
                  /></span>
                </div>
                <h3>{{ $t("tradingtools.section_2.heading_4") }}</h3>
                <p>{{ $t("tradingtools.section_2.description_4") }}</p>
                <router-link :to="'/' + $i18n.locale + '/glossary'"
                  >{{ $t("tradingtools.section_2.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Tools Info Boxes Ends -->
      </div>
      <div class="has_circle_element"></div>
    </div>
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
