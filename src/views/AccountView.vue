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
    <h1>{{ $t("account.main_heading") }}</h1>
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
  <div class="account_page page_content pb-0">
    <!--Account Types Section-->
    <div class="container account_type_sec">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-md-12 col-lg-4 bg-white">
          <div class="title_section page_content_title">
            <h2 class="main_title">
              <span>{{ $t("account.trader_profile.sub_heading") }}</span
              >{{ $t("account.trader_profile.heading") }}
            </h2>
            <p>{{ $t("account.trader_profile.description") }}</p>
          </div>
        </div>
        <!-- Page Main Title Ends -->

        <!-- Acoount Info Boxes -->
        <div class="col-md-6 col-lg-4 bg-white">
          <div class="acoount_info_box column_left">
            <div class="info_box_holder mb-4">
              <div class="info_box text-center">
                <div class="info_image mb-3">
                  <span
                    ><img
                      class=""
                      src="../assets/img/icons-image/DemoAccount.png"
                      alt="Demo Account"
                  /></span>
                </div>
                <h3>{{ $t("account.trader_profile.heading_1") }}</h3>
                <p>{{ $t("account.trader_profile.details_1") }}</p>
                <router-link :to="'/' + $i18n.locale + '/demo'"
                  >{{ $t("account.trader_profile.button_label") }}
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
                      src="../assets/img/icons-image/ProAccount.png"
                      alt="Live Account"
                  /></span>
                </div>
                <h3>{{ $t("account.trader_profile.heading_2") }}</h3>
                <p>{{ $t("account.trader_profile.details_2") }}</p>
                <router-link :to="'/' + $i18n.locale + '/live'"
                  >{{ $t("account.trader_profile.button_label") }}
                  <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Acoount Info Boxes Ends -->
      </div>
      <div class="has_circle_element"></div>
    </div>
    <!--Ends Account Types Section-->

    <!--Account Table Section-->
    <!-- <section class="page_section table_section account_table styled_table">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center title_section">
            <h2 class="main_title section_title">
              {{ $t("account.account_breakdown.heading") }}
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
    <!--Account Table Section-->

    <!--Features Icon Section Starts-->
    <section class="section_container features_section" id="platforms_section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center title_section text-white">
            <h2 class="main_title section_title">
              {{ $t("account.why_choose.heading") }}
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
                    alt="Support"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_1") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/Currencies.png"
                    alt="Currencies"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_2") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/MetaTrader.png"
                    alt="MetaTrader"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_3") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/globe.png"
                    alt="Webtrader"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_4") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/mobile.png"
                    alt="Android & iOS"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_5") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/user.png"
                    alt="Personal Trading Assistant"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_6") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/tools.png"
                    alt="Trading Tools"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_7") }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <div class="info_icon text-center">
              <div class="info_image mb-3">
                <span
                  ><img
                    class=""
                    src="../assets/img/icons-image/control.png"
                    alt="Full Control"
                /></span>
              </div>
              <h3>{{ $t("account.why_choose.heading_8") }}</h3>
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
