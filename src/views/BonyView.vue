<template>
  <!-- Header Section Starts -->
  <section
    class="header_container "
    v-bind:class="{ is_fixed: scrollPosition > 0 }"
  >
    <div class="menubar_section">
      <Header />
    </div>
  </section>
  <!-- Header Section Ends -->

  <!-- Page title holder Starts -->
  <div class="page_title_holder">
    <h1>{{ $t("bony-academy.main_heading") }}</h1>
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
  <div class="account_page section_container page_content">
    <!--Account Types Section-->
    <div class="container account_type_sec">
      <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-4 align-self-center title_section">
          <div class="title_section page_content_title">
            <h2 class="main_title">
              <span>{{ $t("bony-academy.heading_span") }}</span
              >{{ $t("bony-academy.main_heading") }}
            </h2>
          </div>
          <p>
            {{ $t("bony-academy.description_3") }}
          </p>
          <p>
            {{ $t("bony-academy.description_4") }}
          </p>
          <span class="text-warning">
            *{{ $t("bony-academy.warning") }}
          </span>
        </div>
        <!-- Benifits Section Icon  Boxes-->
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="info_box">
            <div class="info_image mb-4">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/monitor.png"
                  alt="Reliable System"
              /></span>
            </div>
            <p>{{ $t("bony-academy.description_1") }}</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="info_box">
            <div class="info_image mb-4">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/education.png"
                  alt="Encrypted Data"
              /></span>
            </div>
            <p>{{ $t("bony-academy.description_2") }}</p>
            
          </div>
        </div>
       
        <!-- Benifits Section Icon  Boxes Ends-->
      </div>
      <div class="row text-center">
        <a
          :href="urlToBony"
          target="_blank"
          class="w-auto mx-auto btn btn-secondary rounded-pill mb-3"
          >{{ $t("bony-academy.button_label") }}
          <font-awesome-icon icon="fas fa-angle-double-right"
        />
      
        </a>
      
      </div>
      <div class="has_circle_element"></div>
    </div>
    <!--Ends Account Types Section-->

    <!--Account Table Section-->

  </div>
  <!-- Page Content Ends -->

  <HowToStart />
</template>

<style></style>

<script lang="ts">
import Header from "../components/Header.vue";
import HowToStart from "../components/HowToStart.vue";
export default {
  props: ["scrollPosition"],
  components: { Header, HowToStart },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
  computed: {
    urlToBony() {
      return this.$t("bony-academy.button_link");
    },
    urlLogin() {
      return this.$t("header.login.link");
    },
    urlRegister() {
      return this.$t("header.register.link");
    },
  },
};
</script>
