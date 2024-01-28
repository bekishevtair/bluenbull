<template>
  <!--Compatible Section Starts-->
  <section
    class="compatible_section section_container section_left_dots"
    id="compatible_section"
  >
    <div class="container">
      <div class="row align-items-center">
         <!-- Compatible Right Section-->
         <div class="col-md-6 Compatible_right_img">
          <img
            class="w-100"
            src="../assets/img/bonyacademy.png"
            alt="Compatible for most operating systems"
          />
          <div class="Compatible_right_elementImg">
            <img
              class="ringImg circle"
              src="../assets/img/element-image/ringImg.png"
              alt="compatibleElement"
            />
            <img
              class="dotsRight"
              src="../assets/img/element-image/dotsRight.png"
              alt="compatibleElement"
            />
        
          </div>
        </div>
        <!-- Compatible Left Section-->
        <div class="col-md-6 title_section compatible_left">
          <h2 class="main_title">
            {{ $t("home-page.bony-section.heading") }}
            <br>
            <span>{{ $t("home-page.bony-section.heading-span") }}</span>
          </h2>
          <p>
            {{ $t("home-page.bony-section.description_1") }}
          </p>
          <p>
            {{ $t("home-page.bony-section.description_2") }}
          </p>
          <p class="mb-5">
            {{ $t("home-page.bony-section.description_3") }}
          </p>
          <router-link :to="'/' + $i18n.locale + '/bony-academy'" class="btn btn-secondary rounded-pill">{{ $t("home-page.bony-section.button-label") }}
            <font-awesome-icon icon="fas fa-angle-double-right"
          /></router-link>
      
        </div>

       
      </div>
    </div>
  </section>
  <!--Compatible Section Ends-->
</template>
