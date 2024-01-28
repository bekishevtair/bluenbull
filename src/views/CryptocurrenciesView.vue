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
    <h1>{{ $t("cryptocurrencies.main_heading") }}</h1>
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
  <div class="instrument_sub_page page_content p-0">
    <!-- Information Section-->
    <div class="container account_type_sec">
      <div class="section_container">
        <div class="row align_items_center_tab">
          <!-- Image Section-->
          <div class="col-12 col-md-6">
            <div class="platforms_image image_with_element">
              <img
                class="mobile_full_image"
                src="../assets/img/Cryptocurrencies.png"
                alt="Cryptocurrencies"
              />
              <img
                class="image_ring_element circle"
                src="../assets/img/element-image/ringImg.png"
                alt="Image Element"
              />
            </div>
          </div>
          <!-- Image Section Ends-->

          <!-- Text Content-->
          <div class="col-12 col-md-6 mobile_bg_white">
            <!-- Page Main Title Starts -->
            <div class="title_section page_content_title">
              <h2 class="main_title">
                {{ $t("cryptocurrencies.high.heading")
                }}<span class="title_span">{{
                  $t("cryptocurrencies.high.heading_span")
                }}</span>
              </h2>
            </div>
            <!-- Page Main Title Ends -->
            <div class="page_content_area bg-white">
              <p class="mb-4">{{ $t("cryptocurrencies.high.description") }}</p>
              <a
                :href="urlRegister"
                target="_blank"
                class="btn btn-secondary rounded-pill"
                >{{ $t("cryptocurrencies.high.button_label") }}
                <font-awesome-icon icon="fas fa-angle-double-right"
              /></a>
            </div>
          </div>
          <!-- Text Content Ends -->
        </div>
      </div>
    </div>
    <!-- Ends Information Section-->

    <!--Features Icon Section Starts-->
    <section class="section_container features_section" id="platforms_section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center title_section text-white">
            <h2 class="main_title section_title">
              {{ $t("cryptocurrencies.heading") }}
            </h2>
          </div>
        </div>
        <div class="row platform_info_sec">
          <div class="col-6 col-md-4 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/Volatility.png"
                    alt="Volatility"
                /></span>
              </div>
              <h3>{{ $t("cryptocurrencies.heading_1") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-4 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/sitetree.png"
                    alt="High Liquidity"
                /></span>
              </div>
              <h3>{{ $t("cryptocurrencies.heading_2") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-4 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/control.png"
                    alt="Go Long or Short"
                /></span>
              </div>
              <h3>{{ $t("cryptocurrencies.heading_3") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-4 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/clock.png"
                    alt="24/7 Market Hours"
                /></span>
              </div>
              <h3>{{ $t("cryptocurrencies.heading_4") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-4 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/NoFees.png"
                    alt="Zero Fees"
                /></span>
              </div>
              <h3>{{ $t("cryptocurrencies.heading_6") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-4 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/compare.png"
                    alt="Leveraged Exposure"
                /></span>
              </div>
              <h3>{{ $t("cryptocurrencies.heading_5") }}</h3>
            </div>
          </div>
        </div>
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
    <!--Features Icon Section Ends-->

    <!--Table Section-->
    <section class="page_section table_section account_table styled_table">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center title_section">
            <h2 class="main_title section_title">
              {{ $t("cryptocurrencies.trading_condition") }}
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <iframe
                src="https://wp-api.pineal.eu/table-api/show?id=19&amp;styles=https://comfyfx.com/assets/comfyfx-table.css"
                style="border: none; width: 100%; height: 650px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Ends Table Section-->
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
