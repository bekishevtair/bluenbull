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
    <h1>{{ $t("glossary.main_heading") }}</h1>
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
  <div class="instruments_page page_content">
    <div class="container instruments_contents">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-12  text-center">
          <div class="title_section page_content_title mobile_bg_white">
            <h2 class="main_title mb-0">
              {{ $t("glossary.heading")
              }}<span class="title_span">{{
                $t("glossary.heading_span")
              }}</span>
            </h2>
            <p class="py-3 py-md-5 mb-0 bg-white">
              {{ $t("glossary.description") }}
            </p>
          </div>
        </div>
        <!-- Page Main Title Ends -->
      </div>
    </div>

    <!--Text Box Section-->
    <section class="text_boxes_sec">
      <div class="container mb-md-5">
        <div class="row">
          <div class="col-md-12">
            <div class="searchBar">
              <input
                type="text"
                id="searchText"
                v-model="filter"
                class="form-control rounded-pill"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <ul class="text_boxes row list-unstyled" id="terms_boxes">
          <li
            v-for="term in filteredTerms"
            :key="term.id"
            class="col-md-4 text-center mb-4"
          >
            <div class="text_box">
              <h4>{{ term.name }}</h4>
              <p>{{ term.text }}</p>
            </div>
          </li>
        </ul>
        <div class="col-12 text-center">
          <a
            class="btn btn-secondary rounded-pill load_more_btn"
            @click="loadMore"
            v-if="currentPage * maxPerPage < terms.length"
            >{{ $t("glossary.load_more") }}</a
          >
        </div>
      </div>
    </section>
    <!--End Text Box Section-->
  </div>
  <!-- Page Content Ends -->

  <HowToStart />
</template>

<script lang="ts">
import TopBar from "../components/TopBar.vue";
import Header from "../components/Header.vue";
import HowToStart from "../components/HowToStart.vue";

import { defineComponent } from "vue";
export default defineComponent({
  props: ["scrollPosition"],
  components: { TopBar, Header, HowToStart },
  data() {
    return {
      showMenu: false,
      filter: "",
      currentPage: 1,
      maxPerPage: 9,
      showReadMore: true,
    };
  },
  computed: {
    terms() {
      return [
        {
          id: 1,
          name: this.$t("glossary.terms.term_1.name"),
          text: this.$t("glossary.terms.term_1.text"),
        },
        {
          id: 2,
          name: this.$t("glossary.terms.term_2.name"),
          text: this.$t("glossary.terms.term_2.text"),
        },
        {
          id: 3,
          name: this.$t("glossary.terms.term_3.name"),
          text: this.$t("glossary.terms.term_3.text"),
        },
        {
          id: 4,
          name: this.$t("glossary.terms.term_4.name"),
          text: this.$t("glossary.terms.term_4.text"),
        },
        {
          id: 5,
          name: this.$t("glossary.terms.term_5.name"),
          text: this.$t("glossary.terms.term_5.text"),
        },
        {
          id: 6,
          name: this.$t("glossary.terms.term_6.name"),
          text: this.$t("glossary.terms.term_6.text"),
        },
        {
          id: 7,
          name: this.$t("glossary.terms.term_7.name"),
          text: this.$t("glossary.terms.term_7.text"),
        },
        {
          id: 8,
          name: this.$t("glossary.terms.term_8.name"),
          text: this.$t("glossary.terms.term_8.text"),
        },
        {
          id: 9,
          name: this.$t("glossary.terms.term_9.name"),
          text: this.$t("glossary.terms.term_9.text"),
        },
        {
          id: 10,
          name: this.$t("glossary.terms.term_10.name"),
          text: this.$t("glossary.terms.term_10.text"),
        },
        {
          id: 11,
          name: this.$t("glossary.terms.term_11.name"),
          text: this.$t("glossary.terms.term_11.text"),
        },
        {
          id: 12,
          name: this.$t("glossary.terms.term_12.name"),
          text: this.$t("glossary.terms.term_12.text"),
        },
        {
          id: 13,
          name: this.$t("glossary.terms.term_13.name"),
          text: this.$t("glossary.terms.term_13.text"),
        },
        {
          id: 14,
          name: this.$t("glossary.terms.term_14.name"),
          text: this.$t("glossary.terms.term_14.text"),
        },
        {
          id: 15,
          name: this.$t("glossary.terms.term_15.name"),
          text: this.$t("glossary.terms.term_15.text"),
        },
        {
          id: 16,
          name: this.$t("glossary.terms.term_16.name"),
          text: this.$t("glossary.terms.term_16.text"),
        },
        {
          id: 17,
          name: this.$t("glossary.terms.term_17.name"),
          text: this.$t("glossary.terms.term_17.text"),
        },
        {
          id: 18,
          name: this.$t("glossary.terms.term_18.name"),
          text: this.$t("glossary.terms.term_18.text"),
        },
        {
          id: 19,
          name: this.$t("glossary.terms.term_19.name"),
          text: this.$t("glossary.terms.term_19.text"),
        },
        {
          id: 20,
          name: this.$t("glossary.terms.term_20.name"),
          text: this.$t("glossary.terms.term_20.text"),
        },
        {
          id: 21,
          name: this.$t("glossary.terms.term_21.name"),
          text: this.$t("glossary.terms.term_21.text"),
        },
        {
          id: 22,
          name: this.$t("glossary.terms.term_22.name"),
          text: this.$t("glossary.terms.term_22.text"),
        },
        {
          id: 23,
          name: this.$t("glossary.terms.term_23.name"),
          text: this.$t("glossary.terms.term_23.text"),
        },
        {
          id: 24,
          name: this.$t("glossary.terms.term_24.name"),
          text: this.$t("glossary.terms.term_24.text"),
        },
        {
          id: 25,
          name: this.$t("glossary.terms.term_25.name"),
          text: this.$t("glossary.terms.term_25.text"),
        },
        {
          id: 26,
          name: this.$t("glossary.terms.term_26.name"),
          text: this.$t("glossary.terms.term_26.text"),
        },
        {
          id: 27,
          name: this.$t("glossary.terms.term_27.name"),
          text: this.$t("glossary.terms.term_27.text"),
        },
        {
          id: 28,
          name: this.$t("glossary.terms.term_28.name"),
          text: this.$t("glossary.terms.term_28.text"),
        },
        {
          id: 29,
          name: this.$t("glossary.terms.term_29.name"),
          text: this.$t("glossary.terms.term_29.text"),
        },
        {
          id: 30,
          name: this.$t("glossary.terms.term_30.name"),
          text: this.$t("glossary.terms.term_30.text"),
        },
        {
          id: 31,
          name: this.$t("glossary.terms.term_31.name"),
          text: this.$t("glossary.terms.term_31.text"),
        },
        {
          id: 32,
          name: this.$t("glossary.terms.term_32.name"),
          text: this.$t("glossary.terms.term_32.text"),
        },
        {
          id: 33,
          name: this.$t("glossary.terms.term_33.name"),
          text: this.$t("glossary.terms.term_33.text"),
        },
        {
          id: 34,
          name: this.$t("glossary.terms.term_34.name"),
          text: this.$t("glossary.terms.term_34.text"),
        },
        {
          id: 35,
          name: this.$t("glossary.terms.term_35.name"),
          text: this.$t("glossary.terms.term_35.text"),
        },
        {
          id: 36,
          name: this.$t("glossary.terms.term_36.name"),
          text: this.$t("glossary.terms.term_36.text"),
        },
        {
          id: 37,
          name: this.$t("glossary.terms.term_37.name"),
          text: this.$t("glossary.terms.term_37.text"),
        },
        {
          id: 38,
          name: this.$t("glossary.terms.term_38.name"),
          text: this.$t("glossary.terms.term_38.text"),
        },
        {
          id: 39,
          name: this.$t("glossary.terms.term_39.name"),
          text: this.$t("glossary.terms.term_39.text"),
        },
        {
          id: 40,
          name: this.$t("glossary.terms.term_40.name"),
          text: this.$t("glossary.terms.term_40.text"),
        },
        {
          id: 41,
          name: this.$t("glossary.terms.term_41.name"),
          text: this.$t("glossary.terms.term_41.text"),
        },
        {
          id: 42,
          name: this.$t("glossary.terms.term_42.name"),
          text: this.$t("glossary.terms.term_42.text"),
        },
        {
          id: 43,
          name: this.$t("glossary.terms.term_43.name"),
          text: this.$t("glossary.terms.term_43.text"),
        },
        {
          id: 44,
          name: this.$t("glossary.terms.term_44.name"),
          text: this.$t("glossary.terms.term_44.text"),
        },
        {
          id: 45,
          name: this.$t("glossary.terms.term_45.name"),
          text: this.$t("glossary.terms.term_45.text"),
        },
        {
          id: 46,
          name: this.$t("glossary.terms.term_46.name"),
          text: this.$t("glossary.terms.term_46.text"),
        },
        {
          id: 47,
          name: this.$t("glossary.terms.term_47.name"),
          text: this.$t("glossary.terms.term_47.text"),
        },
        {
          id: 48,
          name: this.$t("glossary.terms.term_48.name"),
          text: this.$t("glossary.terms.term_48.text"),
        },
        {
          id: 49,
          name: this.$t("glossary.terms.term_49.name"),
          text: this.$t("glossary.terms.term_49.text"),
        },
        {
          id: 50,
          name: this.$t("glossary.terms.term_50.name"),
          text: this.$t("glossary.terms.term_50.text"),
        },
        {
          id: 51,
          name: this.$t("glossary.terms.term_51.name"),
          text: this.$t("glossary.terms.term_51.text"),
        },
        {
          id: 52,
          name: this.$t("glossary.terms.term_52.name"),
          text: this.$t("glossary.terms.term_52.text"),
        },
        {
          id: 53,
          name: this.$t("glossary.terms.term_53.name"),
          text: this.$t("glossary.terms.term_53.text"),
        },
        {
          id: 54,
          name: this.$t("glossary.terms.term_54.name"),
          text: this.$t("glossary.terms.term_54.text"),
        },
        {
          id: 55,
          name: this.$t("glossary.terms.term_55.name"),
          text: this.$t("glossary.terms.term_55.text"),
        },
        {
          id: 56,
          name: this.$t("glossary.terms.term_56.name"),
          text: this.$t("glossary.terms.term_56.text"),
        },
        {
          id: 57,
          name: this.$t("glossary.terms.term_57.name"),
          text: this.$t("glossary.terms.term_57.text"),
        },
        {
          id: 58,
          name: this.$t("glossary.terms.term_58.name"),
          text: this.$t("glossary.terms.term_58.text"),
        },
        {
          id: 59,
          name: this.$t("glossary.terms.term_59.name"),
          text: this.$t("glossary.terms.term_59.text"),
        },
        {
          id: 60,
          name: this.$t("glossary.terms.term_60.name"),
          text: this.$t("glossary.terms.term_60.text"),
        },
        {
          id: 61,
          name: this.$t("glossary.terms.term_61.name"),
          text: this.$t("glossary.terms.term_61.text"),
        },
        {
          id: 62,
          name: this.$t("glossary.terms.term_62.name"),
          text: this.$t("glossary.terms.term_62.text"),
        },
        {
          id: 63,
          name: this.$t("glossary.terms.term_63.name"),
          text: this.$t("glossary.terms.term_63.text"),
        },
        {
          id: 64,
          name: this.$t("glossary.terms.term_64.name"),
          text: this.$t("glossary.terms.term_64.text"),
        },
        {
          id: 65,
          name: this.$t("glossary.terms.term_65.name"),
          text: this.$t("glossary.terms.term_65.text"),
        },
        {
          id: 66,
          name: this.$t("glossary.terms.term_66.name"),
          text: this.$t("glossary.terms.term_66.text"),
        },
        {
          id: 67,
          name: this.$t("glossary.terms.term_67.name"),
          text: this.$t("glossary.terms.term_67.text"),
        },
        {
          id: 68,
          name: this.$t("glossary.terms.term_68.name"),
          text: this.$t("glossary.terms.term_68.text"),
        },
        {
          id: 69,
          name: this.$t("glossary.terms.term_69.name"),
          text: this.$t("glossary.terms.term_69.text"),
        },
        {
          id: 70,
          name: this.$t("glossary.terms.term_70.name"),
          text: this.$t("glossary.terms.term_70.text"),
        },
        {
          id: 71,
          name: this.$t("glossary.terms.term_71.name"),
          text: this.$t("glossary.terms.term_71.text"),
        },
        {
          id: 72,
          name: this.$t("glossary.terms.term_72.name"),
          text: this.$t("glossary.terms.term_72.text"),
        },
        {
          id: 73,
          name: this.$t("glossary.terms.term_73.name"),
          text: this.$t("glossary.terms.term_73.text"),
        },
        {
          id: 74,
          name: this.$t("glossary.terms.term_74.name"),
          text: this.$t("glossary.terms.term_74.text"),
        },
        {
          id: 75,
          name: this.$t("glossary.terms.term_75.name"),
          text: this.$t("glossary.terms.term_75.text"),
        },
        {
          id: 76,
          name: this.$t("glossary.terms.term_76.name"),
          text: this.$t("glossary.terms.term_76.text"),
        },
        {
          id: 77,
          name: this.$t("glossary.terms.term_77.name"),
          text: this.$t("glossary.terms.term_77.text"),
        },
        {
          id: 78,
          name: this.$t("glossary.terms.term_78.name"),
          text: this.$t("glossary.terms.term_78.text"),
        },
        {
          id: 79,
          name: this.$t("glossary.terms.term_79.name"),
          text: this.$t("glossary.terms.term_79.text"),
        },
        {
          id: 80,
          name: this.$t("glossary.terms.term_80.name"),
          text: this.$t("glossary.terms.term_80.text"),
        },
        {
          id: 81,
          name: this.$t("glossary.terms.term_81.name"),
          text: this.$t("glossary.terms.term_81.text"),
        },
        {
          id: 82,
          name: this.$t("glossary.terms.term_82.name"),
          text: this.$t("glossary.terms.term_82.text"),
        },
        {
          id: 83,
          name: this.$t("glossary.terms.term_83.name"),
          text: this.$t("glossary.terms.term_83.text"),
        },
        {
          id: 84,
          name: this.$t("glossary.terms.term_84.name"),
          text: this.$t("glossary.terms.term_84.text"),
        },
        {
          id: 85,
          name: this.$t("glossary.terms.term_85.name"),
          text: this.$t("glossary.terms.term_85.text"),
        },
        {
          id: 86,
          name: this.$t("glossary.terms.term_86.name"),
          text: this.$t("glossary.terms.term_86.text"),
        },
        {
          id: 87,
          name: this.$t("glossary.terms.term_87.name"),
          text: this.$t("glossary.terms.term_87.text"),
        },
        {
          id: 88,
          name: this.$t("glossary.terms.term_88.name"),
          text: this.$t("glossary.terms.term_88.text"),
        },
        {
          id: 89,
          name: this.$t("glossary.terms.term_89.name"),
          text: this.$t("glossary.terms.term_89.text"),
        },
        {
          id: 90,
          name: this.$t("glossary.terms.term_90.name"),
          text: this.$t("glossary.terms.term_90.text"),
        },
        {
          id: 91,
          name: this.$t("glossary.terms.term_91.name"),
          text: this.$t("glossary.terms.term_91.text"),
        },
        {
          id: 92,
          name: this.$t("glossary.terms.term_92.name"),
          text: this.$t("glossary.terms.term_92.text"),
        },
        {
          id: 93,
          name: this.$t("glossary.terms.term_93.name"),
          text: this.$t("glossary.terms.term_93.text"),
        },
        {
          id: 94,
          name: this.$t("glossary.terms.term_94.name"),
          text: this.$t("glossary.terms.term_94.text"),
        },
        {
          id: 95,
          name: this.$t("glossary.terms.term_95.name"),
          text: this.$t("glossary.terms.term_95.text"),
        },
        {
          id: 96,
          name: this.$t("glossary.terms.term_96.name"),
          text: this.$t("glossary.terms.term_96.text"),
        },
        {
          id: 97,
          name: this.$t("glossary.terms.term_97.name"),
          text: this.$t("glossary.terms.term_97.text"),
        },
        {
          id: 98,
          name: this.$t("glossary.terms.term_98.name"),
          text: this.$t("glossary.terms.term_98.text"),
        },
        {
          id: 99,
          name: this.$t("glossary.terms.term_99.name"),
          text: this.$t("glossary.terms.term_99.text"),
        },
        {
          id: 100,
          name: this.$t("glossary.terms.term_100.name"),
          text: this.$t("glossary.terms.term_100.text"),
        },
        {
          id: 101,
          name: this.$t("glossary.terms.term_101.name"),
          text: this.$t("glossary.terms.term_101.text"),
        },
        {
          id: 102,
          name: this.$t("glossary.terms.term_102.name"),
          text: this.$t("glossary.terms.term_102.text"),
        },
        {
          id: 103,
          name: this.$t("glossary.terms.term_103.name"),
          text: this.$t("glossary.terms.term_103.text"),
        },
        {
          id: 104,
          name: this.$t("glossary.terms.term_104.name"),
          text: this.$t("glossary.terms.term_104.text"),
        },
        {
          id: 105,
          name: this.$t("glossary.terms.term_105.name"),
          text: this.$t("glossary.terms.term_105.text"),
        },
        {
          id: 106,
          name: this.$t("glossary.terms.term_106.name"),
          text: this.$t("glossary.terms.term_106.text"),
        },
        {
          id: 107,
          name: this.$t("glossary.terms.term_107.name"),
          text: this.$t("glossary.terms.term_107.text"),
        },
        {
          id: 108,
          name: this.$t("glossary.terms.term_108.name"),
          text: this.$t("glossary.terms.term_108.text"),
        },
        {
          id: 109,
          name: this.$t("glossary.terms.term_109.name"),
          text: this.$t("glossary.terms.term_109.text"),
        },
        {
          id: 110,
          name: this.$t("glossary.terms.term_110.name"),
          text: this.$t("glossary.terms.term_110.text"),
        },
        {
          id: 111,
          name: this.$t("glossary.terms.term_111.name"),
          text: this.$t("glossary.terms.term_111.text"),
        },
        {
          id: 112,
          name: this.$t("glossary.terms.term_112.name"),
          text: this.$t("glossary.terms.term_112.text"),
        },
        {
          id: 113,
          name: this.$t("glossary.terms.term_113.name"),
          text: this.$t("glossary.terms.term_113.text"),
        },
        {
          id: 114,
          name: this.$t("glossary.terms.term_114.name"),
          text: this.$t("glossary.terms.term_114.text"),
        },
        {
          id: 115,
          name: this.$t("glossary.terms.term_115.name"),
          text: this.$t("glossary.terms.term_115.text"),
        },
        {
          id: 116,
          name: this.$t("glossary.terms.term_116.name"),
          text: this.$t("glossary.terms.term_116.text"),
        },
        {
          id: 117,
          name: this.$t("glossary.terms.term_117.name"),
          text: this.$t("glossary.terms.term_117.text"),
        },
        {
          id: 118,
          name: this.$t("glossary.terms.term_118.name"),
          text: this.$t("glossary.terms.term_118.text"),
        },
        {
          id: 119,
          name: this.$t("glossary.terms.term_119.name"),
          text: this.$t("glossary.terms.term_119.text"),
        },
        {
          id: 120,
          name: this.$t("glossary.terms.term_120.name"),
          text: this.$t("glossary.terms.term_120.text"),
        },
        {
          id: 121,
          name: this.$t("glossary.terms.term_121.name"),
          text: this.$t("glossary.terms.term_121.text"),
        },
        {
          id: 122,
          name: this.$t("glossary.terms.term_122.name"),
          text: this.$t("glossary.terms.term_122.text"),
        },
        {
          id: 123,
          name: this.$t("glossary.terms.term_123.name"),
          text: this.$t("glossary.terms.term_123.text"),
        },
        {
          id: 124,
          name: this.$t("glossary.terms.term_124.name"),
          text: this.$t("glossary.terms.term_124.text"),
        },
        {
          id: 125,
          name: this.$t("glossary.terms.term_125.name"),
          text: this.$t("glossary.terms.term_125.text"),
        },
        {
          id: 126,
          name: this.$t("glossary.terms.term_126.name"),
          text: this.$t("glossary.terms.term_126.text"),
        },
        {
          id: 127,
          name: this.$t("glossary.terms.term_127.name"),
          text: this.$t("glossary.terms.term_127.text"),
        },
        {
          id: 128,
          name: this.$t("glossary.terms.term_128.name"),
          text: this.$t("glossary.terms.term_128.text"),
        },
        {
          id: 129,
          name: this.$t("glossary.terms.term_129.name"),
          text: this.$t("glossary.terms.term_129.text"),
        },
        {
          id: 130,
          name: this.$t("glossary.terms.term_130.name"),
          text: this.$t("glossary.terms.term_130.text"),
        },
        {
          id: 131,
          name: this.$t("glossary.terms.term_131.name"),
          text: this.$t("glossary.terms.term_131.text"),
        },
        {
          id: 132,
          name: this.$t("glossary.terms.term_132.name"),
          text: this.$t("glossary.terms.term_132.text"),
        },
        {
          id: 133,
          name: this.$t("glossary.terms.term_133.name"),
          text: this.$t("glossary.terms.term_133.text"),
        },
        {
          id: 134,
          name: this.$t("glossary.terms.term_134.name"),
          text: this.$t("glossary.terms.term_134.text"),
        },
        {
          id: 135,
          name: this.$t("glossary.terms.term_135.name"),
          text: this.$t("glossary.terms.term_135.text"),
        },
        {
          id: 136,
          name: this.$t("glossary.terms.term_136.name"),
          text: this.$t("glossary.terms.term_136.text"),
        },
        {
          id: 137,
          name: this.$t("glossary.terms.term_137.name"),
          text: this.$t("glossary.terms.term_137.text"),
        },
        {
          id: 138,
          name: this.$t("glossary.terms.term_138.name"),
          text: this.$t("glossary.terms.term_138.text"),
        },
        {
          id: 139,
          name: this.$t("glossary.terms.term_139.name"),
          text: this.$t("glossary.terms.term_139.text"),
        },
        {
          id: 140,
          name: this.$t("glossary.terms.term_140.name"),
          text: this.$t("glossary.terms.term_140.text"),
        },
        {
          id: 141,
          name: this.$t("glossary.terms.term_141.name"),
          text: this.$t("glossary.terms.term_141.text"),
        },
        {
          id: 142,
          name: this.$t("glossary.terms.term_142.name"),
          text: this.$t("glossary.terms.term_142.text"),
        },
        {
          id: 143,
          name: this.$t("glossary.terms.term_143.name"),
          text: this.$t("glossary.terms.term_143.text"),
        },
        {
          id: 144,
          name: this.$t("glossary.terms.term_144.name"),
          text: this.$t("glossary.terms.term_144.text"),
        },
        {
          id: 145,
          name: this.$t("glossary.terms.term_145.name"),
          text: this.$t("glossary.terms.term_145.text"),
        },
        {
          id: 146,
          name: this.$t("glossary.terms.term_146.name"),
          text: this.$t("glossary.terms.term_146.text"),
        },
        {
          id: 147,
          name: this.$t("glossary.terms.term_147.name"),
          text: this.$t("glossary.terms.term_147.text"),
        },
        {
          id: 148,
          name: this.$t("glossary.terms.term_148.name"),
          text: this.$t("glossary.terms.term_148.text"),
        },
        {
          id: 149,
          name: this.$t("glossary.terms.term_149.name"),
          text: this.$t("glossary.terms.term_149.text"),
        },
        {
          id: 150,
          name: this.$t("glossary.terms.term_150.name"),
          text: this.$t("glossary.terms.term_150.text"),
        },
        {
          id: 151,
          name: this.$t("glossary.terms.term_151.name"),
          text: this.$t("glossary.terms.term_151.text"),
        },
        {
          id: 152,
          name: this.$t("glossary.terms.term_152.name"),
          text: this.$t("glossary.terms.term_152.text"),
        },
        {
          id: 153,
          name: this.$t("glossary.terms.term_153.name"),
          text: this.$t("glossary.terms.term_153.text"),
        },
        {
          id: 154,
          name: this.$t("glossary.terms.term_154.name"),
          text: this.$t("glossary.terms.term_154.text"),
        },
        {
          id: 155,
          name: this.$t("glossary.terms.term_155.name"),
          text: this.$t("glossary.terms.term_155.text"),
        },
        {
          id: 156,
          name: this.$t("glossary.terms.term_156.name"),
          text: this.$t("glossary.terms.term_156.text"),
        },
        {
          id: 157,
          name: this.$t("glossary.terms.term_157.name"),
          text: this.$t("glossary.terms.term_157.text"),
        },
        {
          id: 158,
          name: this.$t("glossary.terms.term_158.name"),
          text: this.$t("glossary.terms.term_158.text"),
        },
        {
          id: 159,
          name: this.$t("glossary.terms.term_159.name"),
          text: this.$t("glossary.terms.term_159.text"),
        },
        {
          id: 160,
          name: this.$t("glossary.terms.term_160.name"),
          text: this.$t("glossary.terms.term_160.text"),
        },
        {
          id: 161,
          name: this.$t("glossary.terms.term_161.name"),
          text: this.$t("glossary.terms.term_161.text"),
        },
        {
          id: 162,
          name: this.$t("glossary.terms.term_162.name"),
          text: this.$t("glossary.terms.term_162.text"),
        },
        {
          id: 163,
          name: this.$t("glossary.terms.term_163.name"),
          text: this.$t("glossary.terms.term_163.text"),
        },
        {
          id: 164,
          name: this.$t("glossary.terms.term_164.name"),
          text: this.$t("glossary.terms.term_164.text"),
        },
        {
          id: 165,
          name: this.$t("glossary.terms.term_165.name"),
          text: this.$t("glossary.terms.term_165.text"),
        },
        {
          id: 166,
          name: this.$t("glossary.terms.term_166.name"),
          text: this.$t("glossary.terms.term_166.text"),
        },
        {
          id: 167,
          name: this.$t("glossary.terms.term_167.name"),
          text: this.$t("glossary.terms.term_167.text"),
        },
        {
          id: 168,
          name: this.$t("glossary.terms.term_168.name"),
          text: this.$t("glossary.terms.term_168.text"),
        },
        {
          id: 169,
          name: this.$t("glossary.terms.term_169.name"),
          text: this.$t("glossary.terms.term_169.text"),
        },
        {
          id: 170,
          name: this.$t("glossary.terms.term_170.name"),
          text: this.$t("glossary.terms.term_170.text"),
        },
        {
          id: 171,
          name: this.$t("glossary.terms.term_171.name"),
          text: this.$t("glossary.terms.term_171.text"),
        },
        {
          id: 172,
          name: this.$t("glossary.terms.term_172.name"),
          text: this.$t("glossary.terms.term_172.text"),
        },
        {
          id: 173,
          name: this.$t("glossary.terms.term_173.name"),
          text: this.$t("glossary.terms.term_173.text"),
        },
        {
          id: 174,
          name: this.$t("glossary.terms.term_174.name"),
          text: this.$t("glossary.terms.term_174.text"),
        },
        {
          id: 175,
          name: this.$t("glossary.terms.term_175.name"),
          text: this.$t("glossary.terms.term_175.text"),
        },
        {
          id: 176,
          name: this.$t("glossary.terms.term_176.name"),
          text: this.$t("glossary.terms.term_176.text"),
        },
        {
          id: 177,
          name: this.$t("glossary.terms.term_177.name"),
          text: this.$t("glossary.terms.term_177.text"),
        },
        {
          id: 178,
          name: this.$t("glossary.terms.term_178.name"),
          text: this.$t("glossary.terms.term_178.text"),
        },
        {
          id: 179,
          name: this.$t("glossary.terms.term_179.name"),
          text: this.$t("glossary.terms.term_179.text"),
        },
        {
          id: 180,
          name: this.$t("glossary.terms.term_180.name"),
          text: this.$t("glossary.terms.term_180.text"),
        },
        {
          id: 181,
          name: this.$t("glossary.terms.term_181.name"),
          text: this.$t("glossary.terms.term_181.text"),
        },
        {
          id: 182,
          name: this.$t("glossary.terms.term_182.name"),
          text: this.$t("glossary.terms.term_182.text"),
        },
        {
          id: 183,
          name: this.$t("glossary.terms.term_183.name"),
          text: this.$t("glossary.terms.term_183.text"),
        },
        {
          id: 184,
          name: this.$t("glossary.terms.term_184.name"),
          text: this.$t("glossary.terms.term_184.text"),
        },
        {
          id: 185,
          name: this.$t("glossary.terms.term_185.name"),
          text: this.$t("glossary.terms.term_185.text"),
        },
        {
          id: 186,
          name: this.$t("glossary.terms.term_186.name"),
          text: this.$t("glossary.terms.term_186.text"),
        },
        {
          id: 187,
          name: this.$t("glossary.terms.term_187.name"),
          text: this.$t("glossary.terms.term_187.text"),
        },
        {
          id: 188,
          name: this.$t("glossary.terms.term_188.name"),
          text: this.$t("glossary.terms.term_188.text"),
        },
        {
          id: 189,
          name: this.$t("glossary.terms.term_189.name"),
          text: this.$t("glossary.terms.term_189.text"),
        },
        {
          id: 190,
          name: this.$t("glossary.terms.term_190.name"),
          text: this.$t("glossary.terms.term_190.text"),
        },
        {
          id: 191,
          name: this.$t("glossary.terms.term_191.name"),
          text: this.$t("glossary.terms.term_191.text"),
        },
      ];
    },
    filteredTerms() {
      let terms = this.terms.filter((term) => {
        return term.name.toLowerCase().indexOf(this.filter.toLowerCase()) != -1;
      });

      return terms.slice(0, this.currentPage * this.maxPerPage);
    },
    totalResults() {
      return Object.keys(this.terms).length;
    },
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffest() {
      return this.maxPerPage * this.currentPage;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.setBodyClass("open_menu_nav");
    },
    setBodyClass(className: string) {
      var body = document.body;
      body.classList.toggle(className);
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
});
</script>
