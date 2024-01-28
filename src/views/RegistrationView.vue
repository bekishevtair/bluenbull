<template>
  <!-- Header Section Starts -->
  <section
    class="header_container"
    v-bind:class="{ is_fixed: scrollPosition > 0 }"
  >
    <div class="menubar_section">
      <TopBar />
    </div>
  </section>
  <!-- Header Section Ends -->

  <!-- Page title holder Starts -->
  <div class="page_title_holder only_logo">
    <router-link to="/" class="navbar-brand"
      ><img src="../assets/img/logo.png" alt="RosyFX"
    /></router-link>
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
  <div class="registration_page page_content pb-0">
    <div class="container">
      <div class="row">
        <!-- Page Main Title Starts -->
        <div class="col-12">
          <div class="title_section page_content_title text-center">
            <h2 class="main_title">
              <span>{{ $t("register.main_heading") }}</span
              >{{ $t("register.heading_span") }}
            </h2>
          </div>
          <div class="registration_option text-center py-3 py-md-5">
            <a
              :href="urlRegister"
              target="_blank"
              class="btn btn-secondary rounded-pill mx-1 mx-md-3 mb-3"
              >{{ $t("register.live") }}</a
            >
            <a
              href="https://personal.rosyfx.com/accounts/demo-account-registration/"
              target="_blank"
              class="btn btn-primary rounded-pill mx-1 mx-md-3 mb-3"
              >{{ $t("register.demo") }}</a
            >
          </div>
        </div>
        <!-- Page Main Title Ends -->

        <!-- registration form Holder Starts -->
        <div class="col-12">
          <div class="registration_content">
            <div class="card-body">
              <p class="fw-bold pt-3 pt-md-5">{{ $t("register.note") }}</p>
              <!-- registration form Starts -->
              <form
                class="form_style registration_form pt-3 pt-md-5"
                id="registration_form"
              >
                <div class="row clearfix">
                  <div class="col-md-4">
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <select class="form-select" aria-label="Title">
                          <option value="mr" selected>Mr.</option>
                          <option value="Miss">Miss.</option>
                          <option value="Mrs">Mrs.</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          class="form-control"
                          :placeholder="$t('register.first_name')"
                          aria-label="Enter First Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="lasttName"
                          id="lasttName"
                          class="form-control"
                          :placeholder="$t('register.last_name')"
                          aria-label="Enter Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          :placeholder="$t('register.username')"
                          aria-label="Enter Email"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-row row">
                      <div class="col-3 pe-0">
                        <div class="form-group mb-2">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="PhoneCountryCode"
                              id="PhoneCountryCode"
                              class="form-control"
                              :placeholder="$t('register.country')"
                              aria-label="lEnter Country Code"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-9">
                        <div class="form-group mb-2">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              class="form-control"
                              :placeholder="$t('register.phone')"
                              aria-label="Enter Phone Number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <select
                          class="form-select"
                          aria-label="CountryOfCitizenshipCode"
                          id="CountryOfCitizenshipCode"
                          name="CountryOfCitizenshipCode"
                        >
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="VG">British Virgin Islands</option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="CD">DR Congo</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyz Republic</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">Macedonia</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">St. Vincent</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="AN">Netherlands Antilles</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestine</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Réunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="SH">
                            Saint Helena, Ascension and Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="KR">South Korea</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UM">
                            U.S. Minor Outlying Islands
                          </option>
                          <option value="VI">U.S. Virgin Islands</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican City</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="referral"
                          id="referral"
                          class="form-control"
                          placeholder="Referral (If applicable)"
                          aria-label="Enter Referral"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <label for="GrossIncome">{{
                          $t("register.income")
                        }}</label>
                        <select
                          class="form-select"
                          aria-label="GrossIncome"
                          id="GrossIncome"
                        >
                          <option value="25" selected>Less than $25,000</option>
                          <option value="35">Less than $35,000</option>
                          <option value="45">Less than $45,000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="address1"
                          id="address1"
                          class="form-control"
                          :placeholder="$t('register.address_1')"
                          aria-label="Enter Address 1"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="address2"
                          id="address1"
                          class="form-control"
                          :placeholder="$t('register.address_2')"
                          aria-label="Enter Address 2"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <select class="form-select" aria-label="City" id="city">
                          <option selected>City</option>
                          <option value="City01">City 01</option>
                          <option value="City02">City 02</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="country"
                          id="country"
                          class="form-control"
                          :placeholder="$t('register.country')"
                          aria-label="Enter country"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          class="form-control"
                          :placeholder="$t('register.zip_code')"
                          aria-label="Enter Zip Code"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="register_company"
                          type="checkbox"
                          value=""
                        />
                        <label for="register_company">{{
                          $t("register.register_as_company")
                        }}</label>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          class="form-control"
                          :placeholder="$t('register.date_birth')"
                          aria-label="Enter Date of Birth"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mb-2">
                      <label for="AccountType">{{
                        $t("register.account_type")
                      }}</label>
                      <div class="mb-3">
                        <select
                          class="form-select"
                          aria-label="AccountType"
                          id="accountType"
                        >
                          <option value="standard">Standard</option>
                          <option value="premium">Premium</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <label for="currency">{{
                        $t("register.currency")
                      }}</label>
                      <div class="mb-3">
                        <select
                          class="form-select"
                          aria-label="Currency"
                          id="currency"
                        >
                          <option value="usd">USD</option>
                          <option value="eur">EUR</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <label for="leverage">{{
                        $t("register.leverage")
                      }}</label>
                      <div class="mb-3">
                        <select
                          class="form-select"
                          aria-label="Leverage"
                          id="leverage"
                        >
                          <option value="1">1:500</option>
                          <option value="2">1:400</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="mb-3">
                        <label for="password">{{
                          $t("register.password")
                        }}</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          class="form-control"
                          :placeholder="$t('register.:placeholder_password')"
                          aria-label="Enter Password"
                          required
                        />
                        <small>{{ $t("register.1") }}</small>
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <div class="d-flex align-items-center">
                        <input
                          class="styled-checkbox"
                          id="newsletter"
                          type="checkbox"
                          value=""
                        />
                        <label for="newsletter">{{ $t("register.2") }}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-8 d-block d-sm-flex align-items-center justify-content-between mt-4"
                >
                  <div class="d-flex align-items-center">
                    <input
                      class="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value2"
                      checked
                    />
                    <label for="styled-checkbox-2">
                      <a href="/privacy-policy">{{
                        $t("register.privacy_policy")
                      }}</a
                      >, <a href="/risk-disclaimer">{{ $t("register.risk") }}</a
                      >,
                      <a href="/terms-conditions">{{
                        $t("register.terms_conditions")
                      }}</a
                      >, {{ $t("register.agree") }}</label
                    >
                  </div>
                </div>
                <div class="py-5 text-center">
                  <button class="btn btn-secondary rounded-pill">
                    {{ $t("register.button_label") }}
                  </button>
                </div>
              </form>
              <!-- registration form Ends -->
            </div>
          </div>
        </div>
        <!-- registration form Holder Ends -->
      </div>
    </div>
  </div>
  <!-- Page Content Ends -->
</template>

<style>
.footer_section .container {
  display: none;
}
.footer_section {
  padding: 0;
  margin: 0;
}
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
export default {
  computed: {
    urlLogin() {
      return this.$t("header.login.link");
    },
    urlRegister() {
      return this.$t("header.register.link");
    },
  },
  props: ["scrollPosition"],
  components: { TopBar },
  mounted() {
    window.scroll(0, 0); // reset the scroll position to the top left of the document.
  },
};
</script>
