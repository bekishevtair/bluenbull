<template>
  <!-- Hero Section Starts-->
  <section class="hero_section">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <!-- Hero Section Text Content-->
        <div class="col-12 col-sm-5 hero_text_content">
          <h1 class="hero_section_title">
            {{ $t("home-page.hero-section.heading") }}
            <span class="text-secondary">ComfyFX</span>
          </h1>
          <p>{{ $t("home-page.hero-section.sub-heading") }}</p>
          <a
            :href="urlRegister"
            target="_blank"
            class="btn btn-secondary rounded-pill"
            >{{ $t("home-page.hero-section.button-label")
            }}<font-awesome-icon icon="fas fa-angle-double-right"
          /></a>
        </div>
        <!-- Hero Section Image-->
        <div class="col-12 col-sm-7 hero_image_holder">
          <div class="hero_main_image">
            <img
              class="w-100"
              src="../assets/img/heroImage.png"
              alt="HeroImage"
            />
            <div class="coins_holder">
              <img
                src="../assets/img/element-image/coinTop.png"
                alt="Coin"
                class="hero_coin_element_2"
              />
              <img
                src="../assets/img/element-image/coinMid.png"
                alt="Coin"
                class="hero_coin_element_1"
              />
              <img
                src="../assets/img/element-image/coinBtm.png"
                alt="Coin"
                class="hero_coin_element_3"
              />
            </div>
          </div>
          <div class="hero_image_element">
            <img
              src="../assets/img/element-image/corcleSmall1.png"
              alt="Hero Circle Element"
              class="hero_circle_element circle"
            />
            <img
              src="../assets/img/element-image/pie-chart.png"
              alt="Hero pie Element"
              class="hero_pie_element"
            />
            <img
              src="../assets/img/element-image/pie-chart.png"
              alt="Hero pie Element"
              class="hero_pie_element hero_pie_element_btm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section_element">
      <img
        src="../assets/img/element-image/dotLine1.png"
        alt="Banner Left Element"
        class="banner_left_element flyIn"
      />
      <img
        src="../assets/img/element-image/dotsRight.png"
        alt="Banner Left Element"
        class="banner_right_element"
      />
    </div>
  </section>
  <!-- Hero Section Ends-->
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
