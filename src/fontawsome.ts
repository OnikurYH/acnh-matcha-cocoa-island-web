import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faCircle, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faMinus, faCircle, faArrowDown);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
