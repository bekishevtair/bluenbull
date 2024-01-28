<template>
  <!-- Benifits Section Strats-->
  <section
    class="section_container benifit_section"
    v-bind:class="{
      classA: scrollPosition < 100,
      classB: scrollPosition > 100,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 align-self-center title_section">
          <h2 class="main_title">
            {{ $t("home-page.benefits-section.heading") }} <span>ComfyFX</span>
          </h2>
        </div>
        <!-- Benifits Section Icon  Boxes-->
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="info_box">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/monitor.png"
                  alt="Reliable System"
              /></span>
            </div>
            <h3>{{ $t("home-page.benefits-section.reliable-title") }}</h3>
            <p>{{ $t("home-page.benefits-section.reliable-description") }}</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="info_box">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/lock.png"
                  alt="Encrypted Data"
              /></span>
            </div>
            <h3>{{ $t("home-page.benefits-section.encrypted-title") }}</h3>
            <p>{{ $t("home-page.benefits-section.encrypted-description") }}</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="info_box">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/graph.png"
                  alt="Trading Tools"
              /></span>
            </div>
            <h3>{{ $t("home-page.benefits-section.trading-title") }}</h3>
            <p>{{ $t("home-page.benefits-section.trading-description") }}</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="info_box">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/support.png"
                  alt="Exceptional Service"
              /></span>
            </div>
            <h3>{{ $t("home-page.benefits-section.exceptional-title") }}</h3>
            <p>
              {{ $t("home-page.benefits-section.exceptional-description") }}
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="info_box">
            <div class="info_image mb-3">
              <span
                ><img
                  class=""
                  src="../assets/img/icons-image/multiple-device.png"
                  alt="Multiple Platforms"
              /></span>
            </div>
            <h3>{{ $t("home-page.benefits-section.multiple-title") }}</h3>
            <p>{{ $t("home-page.benefits-section.multiple-description") }}</p>
          </div>
        </div>
        <!-- Benifits Section Icon  Boxes Ends-->
      </div>
    </div>
  </section>
  <!-- Benifits Section Ends-->
</template>

<script lang="ts">
export default {
  props: ["scrollPosition"],
};
</script>
