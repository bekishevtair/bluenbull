<script lang="ts">
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSection.vue";
import BonySection from "../components/BonySection.vue";
import Benifits from "../components/Benifits.vue";
import OurPlatforms from "../components/OurPlatforms.vue";
import Compatible from "../components/Compatible.vue";
import HowToStart from "../components/HowToStart.vue";

export default {
  props: ["scrollPosition"],
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    HeroSection,
    BonySection,
    Benifits,
    OurPlatforms,
    Compatible,
    HowToStart,
  },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>

<template>
  <!-- Header Section Starts -->
  <section
    class="header_container"
    v-bind:class="{ is_fixed: scrollPosition > 0 }"
  >
    <div class="menubar_section">
      <!-- <TopBar :scrollPosition="scrollPosition" /> -->
      <Header></Header>
    </div>
  </section>
  <!-- Header Section Ends -->

  <HeroSection />

  <!-- Benifit Section Starts -->
  <Benifits :scrollPosition="scrollPosition" />
  <!-- Benifit Section Ends -->

  <!-- Our Platform Section Starts -->
  <BonySection />
  <!-- Our Platform Section Ends -->

  <!-- Our Platform Section Starts -->
  <OurPlatforms />
  <!-- Our Platform Section Ends -->

  <!-- Compatible Section Starts -->
  <Compatible />
  <!-- Compatible Section Ends -->

  <!-- How To Start Steps Section Starts -->
  <HowToStart />
  <!-- How To Start Steps Section Ends -->
</template>
