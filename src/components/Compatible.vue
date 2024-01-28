<template>
  <!--Compatible Section Starts-->
  <section
    class="compatible_section section_container section_left_dots"
    id="compatible_section"
  >
    <div class="container">
      <div class="row align-items-center">
        <!-- Compatible Left Section-->
        <div class="col-md-6 title_section compatible_left">
          <h2 class="main_title">
            {{ $t("home-page.compatible-section.heading") }}
            <span>{{ $t("home-page.compatible-section.heading-span") }}</span>
          </h2>
          <p>{{ $t("home-page.compatible-section.sub-heading") }}</p>
          <ul class="compatible_list">
            <li>
              <font-awesome-icon icon="fas fa-check-circle" /> Windows 2000
            </li>
            <li><font-awesome-icon icon="fas fa-check-circle" /> Mac OS</li>
            <li><font-awesome-icon icon="fas fa-check-circle" /> Linux</li>
            <li>
              <font-awesome-icon icon="fas fa-check-circle" /> Android
            </li>
            <li>
              <font-awesome-icon icon="fas fa-check-circle" />
              {{ $t("home-page.compatible-section.li-internet") }}
            </li>
            <li>
              <font-awesome-icon icon="fas fa-check-circle" /> CPU: 2.0GHz
            </li>
            <li><font-awesome-icon icon="fas fa-check-circle" /> 512MB RAM</li>
            <li>
              <font-awesome-icon icon="fas fa-check-circle" />
              {{ $t("home-page.compatible-section.li-screen") }}
            </li>
          </ul>
          <router-link :to="'/' + $i18n.locale + '/platforms'" class="btn btn-secondary rounded-pill"            >{{ $t("home-page.compatible-section.button-label") }}
            <font-awesome-icon icon="fas fa-angle-double-right"
          /></router-link>
        </div>

        <!-- Compatible Right Section-->
        <div class="col-md-6 Compatible_right_img">
          <img
            class="w-100"
            src="../assets/img/laptop.png"
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
      </div>
    </div>
  </section>
  <!--Compatible Section Ends-->
</template>
