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
    <h1>{{ $t("platforms.main_heading") }}</h1>
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
  <div class="platforms_page page_content py-0">
    <section class="platforms_content section_container has_sec_element">
      <!--platforms_content Section-->
      <div class="container account_type_sec">
        <div class="row align_items_center_tab">
          <!-- Platforms Information-->
          <div class="col-md-6 bg-white">
            <!-- Page Main Title Starts -->
            <div class="title_section page_content_title">
              <h2 class="main_title">
                {{ $t("platforms.grow.heading")
                }}<span class="title_span">{{
                  $t("platforms.grow.heading_span")
                }}</span>
              </h2>
              <!-- <p>{{ $t("platforms.grow.description") }}</p> -->
            </div>
            <!-- Page Main Title Ends -->

            <div class="platforms_tab_sec">
              <ul
                class="nav nav-pills mb-3 platform_nav"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-desktop-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-desktop"
                    type="button"
                    role="tab"
                    aria-controls="pills-desktop"
                    aria-selected="true"
                  >
                    {{ $t("platforms.grow.desktop.heading") }}
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-webtrader-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-webtrader"
                    type="button"
                    role="tab"
                    aria-controls="pills-webtrader"
                    aria-selected="false"
                  >
                    {{ $t("platforms.grow.webtrader.heading") }}
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-mobile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-mobile"
                    type="button"
                    role="tab"
                    aria-controls="pills-mobile"
                    aria-selected="false"
                  >
                    {{ $t("platforms.grow.mobile.heading") }}
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-desktop"
                  role="tabpanel"
                  aria-labelledby="pills-desktop-tab"
                  tabindex="0"
                >
                  <p>{{ $t("platforms.grow.desktop.description") }}</p>
                  <ul class="compatible_list">
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.desktop.heading_1") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.desktop.heading_4") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.desktop.heading_2") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.desktop.heading_5") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.desktop.heading_3") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.desktop.heading_6") }}
                    </li>
                  </ul>
                  <router-link :to="'/' + $i18n.locale + '/desktop-trader'" class="read_more_link"
                    >{{ $t("platforms.grow.button_label") }}
                    <font-awesome-icon icon="fa-solid fa-arrow-right"
                  /></router-link>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-webtrader"
                  role="tabpanel"
                  aria-labelledby="pills-webtrader-tab"
                  tabindex="0"
                >
                  <p>{{ $t("platforms.grow.webtrader.description") }}</p>
                  <ul class="compatible_list">
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.webtrader.heading_1") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.webtrader.heading_4") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.webtrader.heading_2") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.webtrader.heading_5") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.webtrader.heading_3") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.webtrader.heading_6") }}
                    </li>
                  </ul>
                  <router-link :to="'/' + $i18n.locale + '/webtrader'" class="read_more_link"
                    >{{ $t("platforms.grow.button_label") }}
                    <font-awesome-icon icon="fa-solid fa-arrow-right"
                  /></router-link>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-mobile"
                  role="tabpanel"
                  aria-labelledby="pills-mobile-tab"
                  tabindex="0"
                >
                  <p>{{ $t("platforms.grow.mobile.description") }}</p>
                  <ul class="compatible_list">
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.mobile.heading_1") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.mobile.heading_4") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.mobile.heading_2") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.mobile.heading_5") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.mobile.heading_3") }}
                    </li>
                    <li>
                      <font-awesome-icon icon="fas fa-check-circle" />
                      {{ $t("platforms.grow.mobile.heading_6") }}
                    </li>
                  </ul>
                  <router-link :to="'/' + $i18n.locale + '/mobile'" class="read_more_link"
                    >{{ $t("platforms.grow.button_label") }}
                    <font-awesome-icon icon="fa-solid fa-arrow-right"
                  /></router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- Ends Platforms Information-->

          <!-- Platforms Image-->
          <div class="col-md-6">
            <div class="platforms_image image_with_element">
              <img
                class="w-100"
                src="../assets/img/platforms.png"
                alt="Platforms"
              />
              <img
                class="image_ring_element circle"
                src="../assets/img/element-image/ringImg.png"
                alt="Image Element"
              />
            </div>
          </div>
          <!-- Platforms Image Ends-->
        </div>
      </div>
      <!--Ends platforms_content Section-->
    </section>

    <!--Features Icon Section Starts-->
    <section class="section_container features_section" id="platforms_section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center title_section text-white">
            <h2 class="main_title section_title">
              {{ $t("platforms.utilize.heading") }}
            </h2>
          </div>
        </div>
        <div class="row platform_info_card">
          <div class="col-12 col-md-4 mb-3">
            <div class="info_box text-center text-white">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/Calender.png"
                    alt="Public Holidays"
                /></span>
              </div>
              <h3>{{ $t("platforms.utilize.heading_1") }}</h3>
              <p>{{ $t("platforms.utilize.description_1") }}</p>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-3">
            <div class="info_box text-center text-white">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/Rollover.png"
                    alt="Rollover"
                /></span>
              </div>
              <h3>{{ $t("platforms.utilize.heading_2") }}</h3>
              <p>{{ $t("platforms.utilize.description_2") }}</p>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-3">
            <div class="info_box text-center text-white">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/graphLine.png"
                    alt="Dividends"
                /></span>
              </div>
              <h3>{{ $t("platforms.utilize.heading_3") }}</h3>
              <p>{{ $t("platforms.utilize.description_3") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
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
    </section>
    <!--Features Icon Section Ends-->
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
