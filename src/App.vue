<script lang="ts">
import FooterSection from "./components/FooterSection.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { FooterSection },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
});
</script>

<template>
  <main>
    <router-view :scrollPosition="scrollPosition" :key="$route.fullPath"></router-view>
  </main>

  <!-- Footer Section Starts -->
  <FooterSection />
  <!-- Footer Section Ends -->
</template>
