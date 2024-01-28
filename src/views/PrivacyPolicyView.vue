<template>
  <!-- Header Section Starts -->
  <section
    class="header_container"
    v-bind:class="{ is_fixed: scrollPosition > 0 }"
  >
    <div class="menubar_section">
      <Header />
    </div>
  </section>
  <!-- Header Section Ends -->

  <!-- Page title holder Starts -->
  <div class="page_title_holder">
    <h1>{{ $t("privacy_policy.main_heading") }}</h1>
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
      <EnPrivacy />
    </div>
    <div v-if="getLocale === 'vi'">
      <ViPrivacy />
    </div>
    <div v-if="getLocale === 'ar'">
      <ArPrivacy />
    </div>
  </div>

  <!-- Page Content Ends -->
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import EnPrivacy from "../components/PrivacyPolicy/EnPrivacy.vue";
import ViPrivacy from "../components/PrivacyPolicy/ViPrivacy.vue";
import ArPrivacy from "../components/PrivacyPolicy/ArPrivacy.vue";

export default {
  props: ["scrollPosition"],
  components: { Header, EnPrivacy, ViPrivacy, ArPrivacy },
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
