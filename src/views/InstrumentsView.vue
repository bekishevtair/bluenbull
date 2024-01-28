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
    <h1>{{ $t("instruments.main_heading") }}</h1>
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
  <div class="instruments_page page_content">
    <div class="container instruments_contents">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-12 text-center mb-md-5">
          <div class="title_section page_content_title">
            <h2 class="main_title bg-white mb-0">
              {{ $t("instruments.explore.heading") }}
              <span class="title_span">{{
                $t("instruments.explore.heading_span")
              }}</span>
            </h2>
            <p class="bg-white py-3 py-md-5 mb-0">
              {{ $t("instruments.explore.description") }}
            </p>
            <a
              :href="urlRegister"
              target="_blank"
              class="btn btn-secondary rounded-pill"
              >{{ $t("instruments.explore.button_label") }}</a
            >
          </div>
        </div>
        <!-- Page Main Title Ends -->

        <!-- Instruments Info Boxes -->
        <div class="bg-white pt-5">
          <div class="row acoount_info_box instruments_box">
            <div class="col-md-4 info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/commodities-3.png"
                      alt="Commodities"
                  /></span>
                </div>
                <h3>{{ $t("instruments.heading_1") }}</h3>
                <p>{{ $t("instruments.description_1") }}</p>
                <router-link :to="'/' + $i18n.locale + '/commodities'"
                  >{{ $t("instruments.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
            <div class="col-md-4 info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/Indices.png"
                      alt="Indices"
                  /></span>
                </div>
                <h3>{{ $t("instruments.heading_2") }}</h3>
                <p>{{ $t("instruments.description_2") }}</p>
                <router-link :to="'/' + $i18n.locale + '/indices'"
                  >{{ $t("instruments.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
            <div class="col-md-4 info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/Stocks.png"
                      alt="Stocks"
                  /></span>
                </div>
                <h3>{{ $t("instruments.heading_3") }}</h3>
                <p>{{ $t("instruments.description_3") }}</p>
                <router-link :to="'/' + $i18n.locale + '/stocks'"
                  >{{ $t("instruments.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
            <div class="col-md-4 info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/Bonds.png"
                      alt="Bonds"
                  /></span>
                </div>
                <h3>{{ $t("instruments.heading_4") }}</h3>
                <p>{{ $t("instruments.description_4") }}</p>
                <router-link :to="'/' + $i18n.locale + '/bonds'"
                  >{{ $t("instruments.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
            <div class="col-md-4 info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/Cryptocurrencies.png"
                      alt="Cryptocurrencies"
                  /></span>
                </div>
                <h3>{{ $t("instruments.heading_5") }}</h3>
                <p>{{ $t("instruments.description_5") }}</p>
                <router-link :to="'/' + $i18n.locale + '/cryptocurrencies'"
                  >{{ $t("instruments.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
            <div class="col-md-4 info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/forex.png"
                      alt="Forex"
                  /></span>
                </div>
                <h3>{{ $t("instruments.heading_6") }}</h3>
                <p>{{ $t("instruments.description_6") }}</p>
                <router-link :to="'/' + $i18n.locale + '/forex'"
                  >{{ $t("instruments.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Instruments Info Boxes Ends -->
      </div>
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
  computed: {
    urlLogin() {
      return this.$t("header.login.link");
    },
    urlRegister() {
      return this.$t("header.register.link");
    },
  },
  props: ["scrollPosition"],
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { TopBar, Header, HowToStart },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
