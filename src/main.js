import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faBookOpen,
  faGears,
  faClock,
  faVideo,
  faCheck,
  faUserPen,
  faGraduationCap,
  faCertificate,
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBookOpen,
  faGears,
  faClock,
  faVideo,
  faCheck,
  faEnvelope,
  faUserPen,
  faGraduationCap,
  faCertificate,
  faMobileScreenButton,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faFacebookF
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
