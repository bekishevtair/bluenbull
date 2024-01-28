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
    <h1>{{ $t("contacts.main_heading") }}</h1>
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
  <div class="contact_page page_content pt-0">
    <!--Contact Content Section-->
    <div class="container">
      <div class="section_container">
        <div class="row contact_area">
          <div class="col-12 col-md-6">
            <!-- Page Title Starts -->
            <div class="title_section page_content_title">
              <h2 class="main_title">
                <span>{{ $t("contacts.description") }}</span
                >{{ $t("contacts.heading_1") }}
              </h2>
              <p>{{ $t("contacts.description_1") }}</p>
            </div>
            <!-- Page Title Ends -->
            <!-- Contact Information -->
            <div class="contact_information pt-3">
              <div class="conatact_box d-flex mb-2">
                <div class="contact_icon">
                  <span
                    ><img
                      src="../assets/img/icons-image/location.png"
                      alt="Location"
                  /></span>
                </div>
                <div class="contact_text">
                  <h4 class="text-primary">{{ $t("contacts.heading_2") }}</h4>
                  <p>{{ $t("contacts.description_2") }}</p>
                </div>
              </div>
              <div class="conatact_box d-flex mb-2">
                <div class="contact_icon">
                  <span
                    ><img
                      src="../assets/img/icons-image/envelope.png"
                      alt="Email us"
                  /></span>
                </div>
                <div class="contact_text">
                  <h4 class="text-primary">{{ $t("contacts.heading_3") }}</h4>
                  <p>
                    {{ $t("contacts.description_3") }}<br /><a
                      href="mailto:support@comfyfx.com"
                      >{{ $t("contacts.mail") }}</a
                    >
                  </p>
                </div>
              </div>
              <!-- <div class="conatact_box d-flex mb-2">
                <div class="contact_icon">
                  <span
                    ><img
                      src="../assets/img/icons-image/call.png"
                      alt="Call Us"
                  /></span>
                </div>
                <div class="contact_text">
                  <h4 class="text-primary">{{ $t("contacts.heading_4") }}</h4>
                  <p>
                    {{ $t("contacts.description_4") }}<br /><a
                      href="tel:+61862302765"
                      >{{ $t("contacts.number") }}</a
                    >
                  </p>
                </div>
              </div> -->
            </div>
            <!-- Contact Information Ends -->
          </div>

          <!-- Map Section-->
          <div class="col-12 col-md-6">
            <div class="map_area">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7770.314158306107!2d-61.222893!3d13.15249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x852ca13a834a3fd9!2sFirst%20St%20Vincent%20Bank!5e0!3m2!1sen!2scz!4v1666849889591!5m2!1sen!2scz"
                width="100%"
                height="700"
                style="border: 0"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <!-- Map Section Ends-->
        </div>
      </div>
    </div>
    <!--Ends Contact Content Section-->
  </div>
  <!-- Page Content Ends -->
</template>

<style></style>

<script lang="ts">
import TopBar from "../components/TopBar.vue";
import Header from "../components/Header.vue";
import HowToStart from "../components/HowToStart.vue";
export default {
  props: ["scrollPosition"],
  components: { TopBar, Header, HowToStart },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
