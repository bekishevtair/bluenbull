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
    <h1>{{ $t("holidays.main_heading") }}</h1>
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
          <div class="title_section page_content_title mobile_bg_white">
            <h2 class="main_title mb-0">
              {{ $t("holidays.heading") }}
              <span class="title_span">{{ $t("holidays.heading_span") }}</span>
            </h2>
            <p class="py-3 py-md-5 mb-0">{{ $t("holidays.description") }}</p>
          </div>
        </div>
        <!-- Page Main Title Ends -->
      </div>
    </div>

    <!--Table Section-->
    <section class="table_section account_table">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <iframe
                src="https://wp-api.pineal.eu/table-api/show?id=22&amp;styles=https://comfyfx.com/assets/comfyfx-table.css"
                style="border: none; width: 100%; height: 600px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Table Section-->
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
