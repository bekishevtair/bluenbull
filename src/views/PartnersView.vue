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
    <h1>{{ $t("partners.main_heading") }}</h1>
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
  <div class="partners_page page_content">
    <div class="container">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-12 col-lg-8 offset-lg-2 text-center">
          <div class="title_section page_content_title mobile_bg_white">
            <h2 class="main_title mb-0">
              {{ $t("partners.heading")
              }}<span class="title_span">{{
                $t("partners.heading_span")
              }}</span>
            </h2>
          </div>
          <div class="special_text_area">
            <p class="py-3 py-md-5 mb-0 text-primary mobile_bg_white fw-bold">
              {{ $t("partners.description") }}
            </p>
          </div>
        </div>
        <!-- Page Main Title Ends -->
      </div>
    </div>

    <!--Become Partner Section Starts-->
    <section
      class="area howToStart_section section_container pt-0 bg-white"
      id="howToStart_section"
    >
      <div class="container">
        <div class="start_steps d-block d-md-flex justify-content-center">
          <div class="step_item mt-3">
            <div class="step_box text-center">
              <div class="step_icon mb-3">
                <span class="position-relative">
                  <img
                    class=""
                    src="../assets/img/icons-image/document.png"
                    alt="Register"
                  />
                  <label class="badge rounded-circle">{{
                    $t("partners.1")
                  }}</label>
                </span>
              </div>
              <h3>{{ $t("partners.heading_1") }}</h3>
            </div>
          </div>
          <span class="step_arrow mt-3"
            ><img
              class="shake"
              src="../assets/img/step-next.png"
              alte="Step Next"
          /></span>
          <div class="step_item mt-3">
            <div class="step_box text-center">
              <div class="step_icon mb-3">
                <span class="position-relative">
                  <img
                    class=""
                    src="../assets/img/icons-image/refer.png"
                    alt="Refer Clients"
                  />
                  <label class="badge rounded-circle">{{
                    $t("partners.2")
                  }}</label>
                </span>
              </div>
              <h3>{{ $t("partners.heading_2") }}</h3>
            </div>
          </div>
          <span class="step_arrow mt-3"
            ><img
              class="shake"
              src="../assets/img/step-last.png"
              alte="Step Next"
          /></span>
          <div class="step_item mt-3">
            <div class="step_box text-center">
              <div class="step_icon mb-3">
                <span class="position-relative">
                  <img
                    class=""
                    src="../assets/img/icons-image/moneyBag.png"
                    alt="Start Earning"
                  />
                  <label class="badge rounded-circle">{{
                    $t("partners.3")
                  }}</label>
                </span>
              </div>
              <h3>{{ $t("partners.heading_3") }}</h3>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <a
            :href="urlRegister"
            target="_blank"
            class="w-auto mx-auto btn btn-secondary rounded-pill mt-3 mt-md-5"
            >{{ $t("partners.button_label") }}
            <font-awesome-icon icon="fas fa-angle-double-right"
          /></a>
        </div>
      </div>
    </section>
    <!--Become Partner Section Ends-->
  </div>
  <!-- Page Content Ends -->
</template>

<script lang="ts">
import TopBar from "../components/TopBar.vue";
import Header from "../components/Header.vue";

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
  components: { TopBar, Header },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
