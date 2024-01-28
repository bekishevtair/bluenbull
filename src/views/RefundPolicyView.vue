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
    <h1>{{ $t("refund_policy.main_heading") }}</h1>
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
  <div class="policy_page page_content">
    <div class="container instruments_contents">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-12 text-center">
          <div
            class="title_section page_content_title mobile_bg_white mobile_bg_white"
          >
            <h2 class="main_title mb-0">
              {{ $t("refund_policy.header_1")
              }}<span class="title_span">{{
                $t("refund_policy.header_span")
              }}</span>
            </h2>
          </div>
        </div>
        <!-- Page Main Title Ends -->
      </div>

      <!-- Policy Text-->

      <div>
        <div v-if="getLocale === 'en'">
          <EnRefund />
        </div>
        <div v-if="getLocale === 'vi'">
          <ViRefund />
        </div>
        <div v-if="getLocale === 'ar'">
          <EnRefund />
        </div>
      </div>

      <!-- Policy Text Ends-->
    </div>
  </div>
  <!-- Page Content Ends -->
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import EnRefund from "../components/RefundPolicy/EnRefund.vue";
import ViRefund from "../components/RefundPolicy/ViRefund.vue";
import ArRefund from "../components/RefundPolicy/ArRefund.vue";

export default {
  props: ["scrollPosition"],
  components: { Header, EnRefund, ViRefund, ArRefund },
  computed: {
    getLocale() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
