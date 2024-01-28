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
    <h1>{{ $t("faq.main_heading") }}</h1>
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
        <div class="faq_tab_sec mobile_bg_white">
          <ul
            class="nav nav-pills mb-3 faq_nav justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item mb-3 mb-md-4" role="presentation">
              <button
                class="nav-link active"
                id="pills-about-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-about-faq"
                type="button"
                role="tab"
                aria-controls="pills-about-faq"
                aria-selected="true"
              >
                {{ $t("faq.main_heading_1") }}
              </button>
            </li>
            <li class="nav-item mb-3 mb-md-4" role="presentation">
              <button
                class="nav-link"
                id="pills-deposits-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-deposits-faq"
                type="button"
                role="tab"
                aria-controls="pills-deposits-faq"
                aria-selected="false"
              >
                {{ $t("faq.button_label_1") }}
              </button>
            </li>
            <li class="nav-item mb-3 mb-md-4" role="presentation">
              <button
                class="nav-link"
                id="pills-account-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-account-faq"
                type="button"
                role="tab"
                aria-controls="pills-account-faq"
                aria-selected="false"
              >
                {{ $t("faq.button_label_2") }}
              </button>
            </li>
            <li class="nav-item mb-3 mb-md-4" role="presentation">
              <button
                class="nav-link"
                id="pills-trading-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-trading-faq"
                type="button"
                role="tab"
                aria-controls="pills-trading-faq"
                aria-selected="false"
              >
                {{ $t("faq.button_label_3") }}
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-about-faq"
              role="tabpanel"
              aria-labelledby="pills-about-faq-tab"
              tabindex="0"
            >
              <div class="accordion" id="AboutRosyFX">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutheading01">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutcollapse01"
                      aria-expanded="true"
                      aria-controls="aboutcollapse01"
                    >
                      {{ $t("faq.section_2.heading_1") }}
                    </button>
                  </h2>
                  <div
                    id="aboutcollapse01"
                    class="accordion-collapse collapse show"
                    aria-labelledby="aboutheading01"
                    data-bs-parent="#AboutRosyFX"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_2.description_1") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutheading02">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutcollapse02"
                      aria-expanded="false"
                      aria-controls="aboutcollapse02"
                    >
                      {{ $t("faq.section_2.heading_2") }}
                    </button>
                  </h2>
                  <div
                    id="aboutcollapse02"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutheading02"
                    data-bs-parent="#AboutRosyFX"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_2.description_2") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutheading03">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutcollapse03"
                      aria-expanded="false"
                      aria-controls="aboutcollapse03"
                    >
                      {{ $t("faq.section_2.heading_3") }}
                    </button>
                  </h2>
                  <div
                    id="aboutcollapse03"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutheading03"
                    data-bs-parent="#AboutRosyFX"
                  >
                    <div class="accordion-body">
                      <p>
                        <strong
                          >{{
                            $t("faq.section_2.description_3.heading")
                          }}&nbsp;</strong
                        >
                      </p>
                      <ul>
                        <li>{{ $t("faq.section_2.description_3.1") }}</li>
                        <li>{{ $t("faq.section_2.description_3.2") }}</li>
                      </ul>
                      <p>
                        <strong
                          >{{
                            $t(
                              "faq.section_2.description_3.heading_1.main_heading"
                            )
                          }}:</strong
                        >
                      </p>
                      <ul>
                        <li>
                          {{ $t("faq.section_2.description_3.heading_1.1") }}
                        </li>
                        <li>
                          {{ $t("faq.section_2.description_3.heading_1.2") }}
                        </li>
                        <li>
                          {{ $t("faq.section_2.description_3.heading_1.3") }}
                        </li>
                        <li>
                          {{ $t("faq.section_2.description_3.heading_1.4") }}
                        </li>
                      </ul>
                      <ol>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_1"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_2"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_3"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_4"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_5"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_6"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_7"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_8"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_9"
                            )
                          }}
                        </li>
                        <li>
                          {{
                            $t(
                              "faq.section_2.description_3.heading_1.description_10"
                            )
                          }}
                        </li>
                      </ol>
                      <p>
                        <em>{{
                          $t(
                            "faq.section_2.description_3.heading_1.description_11"
                          )
                        }}</em>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutheading04">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutcollapse04"
                      aria-expanded="false"
                      aria-controls="aboutcollapse04"
                    >
                      {{ $t("faq.section_2.heading_4") }}
                    </button>
                  </h2>
                  <div
                    id="aboutcollapse04"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutheading04"
                    data-bs-parent="#AboutRosyFX"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_2.description_4") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutheading05">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutcollapse05"
                      aria-expanded="false"
                      aria-controls="aboutcollapse05"
                    >
                      {{ $t("faq.section_2.heading_5") }}
                    </button>
                  </h2>
                  <div
                    id="aboutcollapse05"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutheading05"
                    data-bs-parent="#AboutRosyFX"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_2.description_5") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutheading06">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutcollapse06"
                      aria-expanded="false"
                      aria-controls="aboutcollapse06"
                    >
                      {{ $t("faq.section_2.heading_6") }}
                    </button>
                  </h2>
                  <div
                    id="aboutcollapse06"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutheading06"
                    data-bs-parent="#AboutRosyFX"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_2.description_6") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutheading07">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutcollapse07"
                      aria-expanded="false"
                      aria-controls="aboutcollapse07"
                    >
                      {{ $t("faq.section_2.heading_7") }}
                    </button>
                  </h2>
                  <div
                    id="aboutcollapse07"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutheading07"
                    data-bs-parent="#AboutRosyFX"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_2.description_7") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-deposits-faq"
              role="tabpanel"
              aria-labelledby="pills-deposits-faq-tab"
              tabindex="0"
            >
              <div class="accordion" id="deposits_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="depositsheading01">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#depositscollapse01"
                      aria-expanded="true"
                      aria-controls="depositscollapse01"
                    >
                      {{ $t("faq.section_3.heading_1") }}
                    </button>
                  </h2>
                  <div
                    id="depositscollapse01"
                    class="accordion-collapse collapse show"
                    aria-labelledby="depositsheading01"
                    data-bs-parent="#deposits_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_3.description_1.main_description") }}
                      </p>
                      <ul>
                        <li>{{ $t("faq.section_3.description_1.1") }}</li>
                        <li>{{ $t("faq.section_3.description_1.2") }}</li>
                      </ul>
                      <p>{{ $t("faq.section_3.description_1.3") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="depositsheading02">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#depositscollapse02"
                      aria-expanded="false"
                      aria-controls="depositscollapse02"
                    >
                      {{ $t("faq.section_3.heading_2") }}
                    </button>
                  </h2>
                  <div
                    id="depositscollapse02"
                    class="accordion-collapse collapse"
                    aria-labelledby="depositsheading02"
                    data-bs-parent="#deposits_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_3.description_2") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="depositsheading03">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#depositscollapse03"
                      aria-expanded="false"
                      aria-controls="depositscollapse03"
                    >
                      {{ $t("faq.section_3.heading_3") }}
                    </button>
                  </h2>
                  <div
                    id="depositscollapse03"
                    class="accordion-collapse collapse"
                    aria-labelledby="depositsheading03"
                    data-bs-parent="#deposits_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_3.description_3.main_description") }}
                      </p>
                      <ul>
                        <li>{{ $t("faq.section_3.description_3.1") }}</li>
                        <li>{{ $t("faq.section_3.description_3.2") }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="depositsheading04">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#depositscollapse04"
                      aria-expanded="false"
                      aria-controls="depositscollapse04"
                    >
                      {{ $t("faq.section_3.heading_4") }}
                    </button>
                  </h2>
                  <div
                    id="depositscollapse04"
                    class="accordion-collapse collapse"
                    aria-labelledby="depositsheading04"
                    data-bs-parent="#deposits_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_3.description_4.description_1") }}
                      </p>
                      <p>
                        {{ $t("faq.section_3.description_4.description_2")
                        }}<br />
                        {{ $t("faq.section_3.description_4.description_3")
                        }}<br />
                        {{ $t("faq.section_3.description_4.description_4")
                        }}<br />
                        {{ $t("faq.section_3.description_4.description_5") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="depositsheading05">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#depositscollapse05"
                      aria-expanded="false"
                      aria-controls="depositscollapse05"
                    >
                      {{ $t("faq.section_3.heading_5") }}
                    </button>
                  </h2>
                  <div
                    id="depositscollapse05"
                    class="accordion-collapse collapse"
                    aria-labelledby="depositsheading05"
                    data-bs-parent="#deposits_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_3.description_5.description_1") }}
                      </p>
                      <p>
                        {{ $t("faq.section_3.description_5.description_2") }}
                      </p>
                      <ul>
                        <li>{{ $t("faq.section_3.description_5.1") }}</li>
                        <li>{{ $t("faq.section_3.description_5.2") }}</li>
                        <li>{{ $t("faq.section_3.description_5.3") }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="depositsheading06">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#depositscollapse06"
                      aria-expanded="false"
                      aria-controls="depositscollapse06"
                    >
                      {{ $t("faq.section_3.heading_6") }}
                    </button>
                  </h2>
                  <div
                    id="depositscollapse06"
                    class="accordion-collapse collapse"
                    aria-labelledby="depositsheading06"
                    data-bs-parent="#deposits_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_3.description_6.1") }}</p>
                      <p>{{ $t("faq.section_3.description_6.2") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-account-faq"
              role="tabpanel"
              aria-labelledby="pills-account-faq-tab"
              tabindex="0"
            >
              <div class="accordion" id="account_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading01">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse01"
                      aria-expanded="true"
                      aria-controls="accountcollapse01"
                    >
                      {{ $t("faq.section_4.heading") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse01"
                    class="accordion-collapse collapse show"
                    aria-labelledby="accountheading01"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_4.description") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading02">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse02"
                      aria-expanded="false"
                      aria-controls="accountcollapse02"
                    >
                      {{ $t("faq.section_4.heading_1") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse02"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading02"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>{{ $t("faq.section_4.description_1.1") }}</li>
                        <li>{{ $t("faq.section_4.description_1.2") }}</li>
                      </ul>
                      <p>{{ $t("faq.section_4.description_1.3") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading03">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse03"
                      aria-expanded="false"
                      aria-controls="accountcollapse03"
                    >
                      {{ $t("faq.section_4.heading_2") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse03"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading03"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_4.description_2") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading04">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse04"
                      aria-expanded="false"
                      aria-controls="accountcollapse04"
                    >
                      {{ $t("faq.section_4.heading_3") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse04"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading04"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_4.description_3") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading05">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse05"
                      aria-expanded="false"
                      aria-controls="accountcollapse05"
                    >
                      {{ $t("faq.section_4.heading_4") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse05"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading05"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_4.description_4") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading06">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse06"
                      aria-expanded="false"
                      aria-controls="accountcollapse06"
                    >
                      {{ $t("faq.section_4.heading_5") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse06"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading06"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_5") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading07">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse07"
                      aria-expanded="false"
                      aria-controls="accountcollapse07"
                    >
                      {{ $t("faq.section_4.heading_6") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse07"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading07"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_6") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading08">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse08"
                      aria-expanded="false"
                      aria-controls="accountcollapse08"
                    >
                      {{ $t("faq.section_4.heading_7") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse08"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading07"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_7") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading09">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse09"
                      aria-expanded="false"
                      aria-controls="accountcollapse09"
                    >
                      {{ $t("faq.section_4.heading_8") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse09"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading09"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_8") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading10">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse10"
                      aria-expanded="false"
                      aria-controls="accountcollapse10"
                    >
                      {{ $t("faq.section_4.heading_9") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse10"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading10"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_9.1") }}</p>
                      <p>{{ $t("faq.section_4.description_9.2") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading11">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse11"
                      aria-expanded="false"
                      aria-controls="accountcollapse11"
                    >
                      {{ $t("faq.section_4.heading_10") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse11"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading11"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_10") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading12">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse12"
                      aria-expanded="false"
                      aria-controls="accountcollapse12"
                    >
                      {{ $t("faq.section_4.heading_11") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse12"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading12"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_11") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading13">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse13"
                      aria-expanded="false"
                      aria-controls="accountcollapse13"
                    >
                      {{ $t("faq.section_4.heading_12") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse13"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading13"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        {{ $t("faq.section_4.description_12") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="accountheading14">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accountcollapse14"
                      aria-expanded="false"
                      aria-controls="accountcollapse14"
                    >
                      {{ $t("faq.section_4.heading_13") }}
                    </button>
                  </h2>
                  <div
                    id="accountcollapse14"
                    class="accordion-collapse collapse"
                    aria-labelledby="accountheading12"
                    data-bs-parent="#account_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_4.description_13") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-trading-faq"
              role="tabpanel"
              aria-labelledby="pills-trading-faq-tab"
              tabindex="0"
            >
              <div class="accordion" id="trading_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading01">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse01"
                      aria-expanded="true"
                      aria-controls="tradingcollapse01"
                    >
                      {{ $t("faq.section_5.heading_1") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse01"
                    class="accordion-collapse collapse show"
                    aria-labelledby="tradingheading01"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_1.title") }}</p>
                      <ul>
                        <li>{{ $t("faq.section_5.description_1.1") }}</li>
                        <li>{{ $t("faq.section_5.description_1.2") }}</li>
                        <li>{{ $t("faq.section_5.description_1.3") }}</li>
                      </ul>
                      <p>{{ $t("faq.section_5.description_1.description") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading02">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse02"
                      aria-expanded="false"
                      aria-controls="tradingcollapse02"
                    >
                      {{ $t("faq.section_5.heading_2") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse02"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading02"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_2.title") }}</p>
                      <ul>
                        <li>{{ $t("faq.section_5.description_2.1") }}</li>
                        <li>{{ $t("faq.section_5.description_2.2") }}</li>
                        <li>{{ $t("faq.section_5.description_2.3") }}</li>
                        <li>{{ $t("faq.section_5.description_2.4") }}</li>
                        <li>{{ $t("faq.section_5.description_2.5") }}</li>
                        <li>{{ $t("faq.section_5.description_2.6") }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading03">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse03"
                      aria-expanded="false"
                      aria-controls="tradingcollapse03"
                    >
                      {{ $t("faq.section_5.heading_3") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse03"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading03"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_3.1") }}</p>
                      <p>{{ $t("faq.section_5.description_3.2") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading04">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse04"
                      aria-expanded="false"
                      aria-controls="tradingcollapse04"
                    >
                      {{ $t("faq.section_5.heading_4") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse04"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading04"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_4.1") }}</p>
                      <p>{{ $t("faq.section_5.description_4.2") }}</p>
                      <p>{{ $t("faq.section_5.description_4.3") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading05">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse05"
                      aria-expanded="false"
                      aria-controls="tradingcollapse05"
                    >
                      {{ $t("faq.section_5.heading_5") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse05"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading05"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_5") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading06">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse06"
                      aria-expanded="false"
                      aria-controls="tradingcollapse06"
                    >
                      {{ $t("faq.section_5.heading_6") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse06"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading06"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_6") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading07">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse07"
                      aria-expanded="false"
                      aria-controls="tradingcollapse07"
                    >
                      {{ $t("faq.section_5.heading_7") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse07"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading07"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_7") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading08">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse08"
                      aria-expanded="false"
                      aria-controls="tradingcollapse08"
                    >
                      {{ $t("faq.section_5.heading_8") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse08"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading07"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_8.1") }}</p>
                      <p>{{ $t("faq.section_5.description_8.2") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading09">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse09"
                      aria-expanded="false"
                      aria-controls="tradingcollapse09"
                    >
                      {{ $t("faq.section_5.heading_9") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse09"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading09"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_9") }}</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tradingheading10">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#tradingcollapse10"
                      aria-expanded="false"
                      aria-controls="tradingcollapse10"
                    >
                      {{ $t("faq.section_5.heading_10") }}
                    </button>
                  </h2>
                  <div
                    id="tradingcollapse10"
                    class="accordion-collapse collapse"
                    aria-labelledby="tradingheading10"
                    data-bs-parent="#trading_accordion"
                  >
                    <div class="accordion-body">
                      <p>{{ $t("faq.section_5.description_10.1") }}</p>
                      <p>{{ $t("faq.section_5.description_10.2") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Content Ends -->

  <HowToStart />
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
