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
    <h1>{{ $t("header.policies-1") }}</h1>
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
  <div>
    <div v-if="getLocale === 'en'">
      <EnTerms />
    </div>
    <div v-else-if="getLocale === 'ar'">
      <EnTerms />
    </div>
    <div v-else-if="getLocale === 'vi'">
      <ViTerms />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import { defineComponent } from "vue";
import EnTerms from "../components/Terms/EnTerms.vue";
import EsTerms from "../components/Terms/EsTerms.vue";
import ViTerms from "../components/Terms/ViTerms.vue";
import ArTerms from "../components/Terms/ArTerms.vue";
export default defineComponent({
  props: ["scrollPosition"],
  components: { Header, EnTerms, EsTerms, ViTerms, ArTerms},
  computed: {
    getLocale() {
      return this.$i18n.locale;
    },
  },
});
</script>
