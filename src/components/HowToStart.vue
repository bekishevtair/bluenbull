<template>
  <!--How To Start Section Starts-->
  <section
    class="area howToStart_section section_container"
    id="howToStart_section"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 text-center title_section">
          <h2 class="main_title section_title">
            {{ $t("home-page.how-to-start-section.heading") }}
          </h2>
        </div>
      </div>
      <!-- Start Steps Section-->
      <div class="start_steps d-block d-md-flex">
        <div class="step_item">
          <div class="step_box text-center">
            <div class="step_icon mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/document.png"
                  alt="Register"
                /><label class="badge rounded-circle">1</label></span
              >
            </div>
            <h3>{{ $t("home-page.how-to-start-section.register-heading") }}</h3>
            <p>
              {{ $t("home-page.how-to-start-section.register-description") }}
            </p>
          </div>
        </div>
        <span class="step_arrow"
          ><img
            class="shake"
            src="../assets/img/step-next.png"
            alte="Step Next"
        /></span>
        <div class="step_item">
          <div class="step_box text-center">
            <div class="step_icon mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/check.png"
                  alt="Verify"
                /><label class="badge rounded-circle">2</label></span
              >
            </div>
            <h3>{{ $t("home-page.how-to-start-section.verify-heading") }}</h3>
            <p>
              {{ $t("home-page.how-to-start-section.verify-descdription") }}
            </p>
          </div>
        </div>
        <span class="step_arrow"
          ><img
            class="shake"
            src="../assets/img/step-last.png"
            alte="Step Next"
        /></span>
        <div class="step_item">
          <div class="step_box text-center">
            <div class="step_icon mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/moneyBag.png"
                  alt="Deposit"
                /><label class="badge rounded-circle">3</label></span
              >
            </div>
            <h3>{{ $t("home-page.how-to-start-section.deposit-heading") }}</h3>
            <p>
              {{ $t("home-page.how-to-start-section.deposit-description") }}
            </p>
          </div>
        </div>
      </div>
      <!-- Start Steps Section Ends-->

      <div class="row text-center">
        <a
          :href="urlRegister"
          target="_blank"
          class="w-auto mx-auto btn btn-secondary rounded-pill"
          >{{ $t("home-page.how-to-start-section.button-label") }}
          <font-awesome-icon icon="fas fa-angle-double-right"
        /></a>
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
  <!--How To Start Section Ends-->
</template>
<script lang="ts">
export default {
  computed: {
    urlLogin() {
      return this.$t("header.login.link");
    },
    urlRegister() {
      return this.$t("header.register.link");
    },
  },
};
</script>
