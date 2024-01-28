<template>
  <footer>
    <!-- Footer Section Starts  -->
    <div
      class="footer_section text-white section_container"
      id="footer_section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-5 footer_left">
            <img class="mb-4" src="../assets/img/logo.png" alt="ComfyFX" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 footer_left">
            <p>
              {{ $t("footer.heading") }}
            </p>
          </div>
          <div class="col-12 col-sm-4 pt-3">
            <div class="contact_info d-flex">
              <div class="contact_box d-flex mb-2">
                <div class="contact_icon">
                  <span
                    ><img
                      src="../assets/img/icons-image/location.png"
                      alt="Location"
                  /></span>
                </div>
                <div class="contact_text">
                  <h4 class="text-white">{{ $t("footer.visit-heading") }}</h4>
                  <p>
                    P.B. 1257 Bonovo Road, Fomboni, Comoros, KM.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-3 pt-3">
            <div class="contact_info d-flex">
              <div class="contact_box d-flex mb-2">
                <div class="contact_icon">
                  <span
                    ><img
                      src="../assets/img/icons-image/envelope.png"
                      alt="Email us"
                  /></span>
                </div>
                <div class="contact_text">
                  <h4 class="text-white">{{ $t("footer.email-heading") }}</h4>
                  <p>
                    {{ $t("footer.email-description") }}<br /><a
                      href="mailto:support@comfyfx.com"
                      >support@comfyfx.com</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer Contact Information -->
        </div>
        <div class="row">
          <div class="col-sm-5 footer_left">
            <p>
              {{ $t("footer.sub-heading") }}
            </p>
          </div>
          <!-- Footer Contact Information -->

          <div class="col-sm-7 footer_left">
            <p>{{ $t("footer.sub-heading-2") }}<br /><br /></p>
          </div>
        </div>
        
        <div class="row"></div>
      </div>
      <div class="copyright_section text-center text-white py-4">
        Copyright 2023 © ComfyFX
      </div>
    </div>
    <!-- Footer Section Ends  -->
  </footer>
</template>
