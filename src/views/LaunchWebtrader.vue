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
    <h1>{{ $t("webtrader.launch_webtrader") }}</h1>
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
    <div class="container account_type_sec">
      <div class="section_container">
        <div class="row">
          <div id="webterminal" style="width: 100%; height: 600px">
            <iframe
              allowfullscreen="true"
              src="https://metatraderweb.app/trade?version=5&trade_server=NamirTrade-Demo&servers=NamirTrade-Demo,NamirTrade-Live&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.comfyfx.com"
              style="width: 100%; height: 100%; border: none"
            ></iframe>
          </div>
        </div>
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
  props: ["scrollPosition"],
  components: { TopBar, Header, HowToStart },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
