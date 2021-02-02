// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise';
import 'core-js/es6/string';
import 'core-js/es7/array';
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import titleMixin from './mixins/titleMixin';

import VeeValidate from 'vee-validate';
// todo
// cssVars()

Vue.use(BootstrapVue);
Vue.mixin(titleMixin);


Vue.use(VeeValidate, {
    inject: true,
    fieldsBagName: 'veeFields',
    errorBagName: 'veeErrors'
  })

import store from "./store";

import CheckboxRadio from 'vue-checkbox-radio';

Vue.use(CheckboxRadio);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});