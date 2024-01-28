<template>
  <!-- Header Section Starts -->
  <section class="header_container">
    <div class="menubar_section">
      <!-- <TopBar :scrollPosition="scrollPosition" /> -->
      <Header></Header>
    </div>
  </section>
  <!-- Header Section Ends -->

  <div class="about">
    <h1 class="m-auto">This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: block;
    align-items: center;
    text-align: center;
  }
}
</style>

<script lang="ts">
import TopBar from "../components/TopBar.vue";
import Header from "../components/Header.vue";
export default {
  props: ["scrollPosition"],
  components: { TopBar, Header },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
