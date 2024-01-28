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
    <h1>{{ $t("demo_account.main_heading") }}</h1>
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
  <div class="first_class_account_page page_content p-0">
    <!--Page Content Section-->
    <div class="container account_type_sec">
      <div class="section_container">
        <div class="row align_items_center_tab">
          <!-- Text Content-->
          <div class="col-12 col-md-6">
            <!-- Page Main Title Starts -->
            <div class="title_section page_content_title">
              <h2 class="main_title">
                {{ $t("demo_account.trade_for_free.heading")
                }}<span class="title_span">{{
                  $t("demo_account.trade_for_free.heading_span")
                }}</span>
              </h2>
            </div>
            <!-- Page Main Title Ends -->
            <div class="page_content_area bg-white">
              <p class="mb-4">
                {{ $t("demo_account.trade_for_free.description") }}
              </p>
              <a
                :href="urlRegister"
                target="_blank"
                class="btn btn-secondary rounded-pill"
                >{{ $t("demo_account.trade_for_free.button_label") }}
                <font-awesome-icon icon="fas fa-angle-double-right"
              /></a>
            </div>
          </div>
          <!-- Text Content Ends -->

          <!-- Image Section-->
          <div class="col-12 col-md-6">
            <div class="platforms_image image_with_element">
              <img
                class="w-100"
                src="../assets/img/demo_rosy.png"
                alt="Demo Account"
              />
              <img
                class="image_ring_element circle"
                src="../assets/img/element-image/ringImg.png"
                alt="Image Element"
              />
            </div>
          </div>
          <!-- Image Section Ends-->
        </div>
      </div>
    </div>
    <!--Ends Page Content Section-->

    <!--Features Icon Section Starts-->
    <section class="section_container features_section" id="platforms_section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center title_section text-white">
            <h2 class="main_title section_title">
              {{ $t("demo_account.benefits.heading") }}
            </h2>
          </div>
        </div>
        <div class="row platform_info_sec">
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/support2.png"
                    alt="24/5 Customer Support"
                /></span>
              </div>
              <h3>{{ $t("demo_account.benefits.heading_1") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/Currencies.png"
                    alt="Real-Market Conditions"
                /></span>
              </div>
              <h3>{{ $t("demo_account.benefits.heading_2") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/control.png"
                    alt="Access to All Platforms"
                /></span>
              </div>
              <h3>{{ $t("demo_account.benefits.heading_3") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/tools.png"
                    alt="Access to Trading Tools"
                /></span>
              </div>
              <h3>{{ $t("demo_account.benefits.heading_4") }}</h3>
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

    <!--Table Section-->
    <!-- <section class="page_section table_section account_table styled_table">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center title_section">
            <h2 class="main_title section_title">
              {{ $t("demo_account.account_breakdown.heading") }}
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Standard Account</th>
                    <th>Pro Account</th>
                    <th>First Class Account</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Initial Deposit</td>
                    <td>$100</td>
                    <td>$5,000</td>
                    <td>$10,000</td>
                  </tr>
                  <tr>
                    <td>Leverage</td>
                    <td>Up to 1:500</td>
                    <td>Up to 1:500</td>
                    <td>Up to 1:500</td>
                  </tr>
                  <tr>
                    <td>Margin Call</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>150%</td>
                  </tr>
                  <tr>
                    <td>Stop Out</td>
                    <td>50%</td>
                    <td>50%</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Min Order</td>
                    <td>0.01 lot</td>
                    <td>0.01 lot</td>
                    <td>0.1 lot</td>
                  </tr>
                  <tr>
                    <td>Max Order</td>
                    <td>20 lot</td>
                    <td>50 lot</td>
                    <td>100 lot</td>
                  </tr>
                  <tr>
                    <td>Commission</td>
                    <td>0</td>
                    <td>0</td>
                    <td>$7/lot</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section> -->
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
