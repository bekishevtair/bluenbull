<template>
  <!-- Header Section Starts -->
  <section
    class="header_container"
    v-bind:class="{ is_fixed: scrollPosition > 0 }"
  >
    <div class="menubar_section">
      <TopBar />
    </div>
  </section>
  <!-- Header Section Ends -->

  <!-- Page title holder Starts -->
  <div class="page_title_holder only_logo">
    <router-link to="/" class="navbar-brand"
      ><img src="../assets/img/logo.png" alt="RosyFX"
    /></router-link>
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
  <div class="login_page page_content pb-0">
    <div class="container">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-12">
          <div class="title_section page_content_title text-center">
            <h2 class="main_title">
              <span>{{ $t("login.main_heading") }}</span
              >{{ $t("login.heading_span") }}
            </h2>
            <p>{{ $t("login.description") }}</p>
          </div>
        </div>
        <!-- Page Main Title Ends -->

        <!-- Login Image For Mobile-->
        <div class="login_image_holder d-block d-md-none">
          <img class="login_image" src="../assets/img/login.png" alt="login" />
        </div>
        <!-- End Login Image For Mobile-->

        <!-- Login form Holder Starts -->
        <div class="col-lg-8 offset-lg-2">
          <div class="card login_card">
            <div class="card-body">
              <!-- Login form Starts -->
              <form class="form_style login_form" id="login_form">
                <div class="form-group mb-2">
                  <label for="Password">{{ $t("login.email") }}</label>
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon1"
                        ><img
                          src="../assets/img/icons-image/email.png"
                          alt="email"
                      /></span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder=""
                      aria-label="Enter Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div class="form-group mb-2">
                  <label for="Password">{{ $t("login.password") }}</label>
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2"
                        ><img
                          src="../assets/img/icons-image/password.png"
                          alt="password"
                      /></span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      placeholder=""
                      aria-label="Enter Password"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
                <div
                  class="d-block d-sm-flex align-items-center justify-content-between mt-4"
                >
                  <div class="d-flex align-items-center">
                    <input
                      class="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                      checked
                    />
                    <label for="styled-checkbox-2">{{
                      $t("login.keep_logged_in")
                    }}</label>
                  </div>
                  <div class="forgot_link">
                    <a href="#">{{ $t("login.forget_password") }}</a>
                  </div>
                </div>
                <div class="py-3 text-center">
                  <button class="btn btn-secondary rounded-pill">
                    {{ $t("login.button_label") }}
                  </button>
                </div>
                <div class="pt-2 text-center fw-bold">
                  {{ $t("login.new_user") }}
                  <a :href="urlRegister" target="_blank" class="register_link">
                    {{ $t("login.create_an_account") }}</a
                  >
                </div>
              </form>
              <!-- Login form Ends -->
            </div>
          </div>
        </div>
        <!-- Login form Holder Ends -->
      </div>
    </div>
    <!-- Login Image For Desktop-->
    <div class="login_image_holder d-none d-md-block">
      <img
        class="login_image flyIn"
        src="../assets/img/login.png"
        alt="login"
      />
    </div>
    <!-- End Login Image For Desktop-->
  </div>
  <!-- Page Content Ends -->
</template>

<style>
.footer_section .container {
  display: none;
}
.footer_section {
  padding: 0;
  margin: 0;
}
</style>

<script lang="ts">
import TopBar from "../components/TopBar.vue";
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
  components: { TopBar },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
