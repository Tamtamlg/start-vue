'use strict';



window.onload = function () {
  svg4everybody();

  Vue.component('tab-component', {
    template: `#myTab`,
    data: function() {
      return {
        activeTab: 1,
      }
    }
  })
  Vue.component('tab2-component', {
    template: `#myTab2`,
    data: function() {
      return {
        activeTab: 1,
      }
    }
  })


  var arr = new Vue({
    el: '#app',
    data: function() {
      return {
        isLoad : true,
        aboutText: 'Стартовый проект с Gulp, Pug, Bootstrap и Vue.js',
        // activeTab: 1,
        modalShow: false,
        collapse: false,
        dropdown: false
      }
    },
    // components: {
    //   'tabComponent': tabComponent
    // },
    methods: {
      toggleModal: function() {
        this.modalShow = !this.modalShow;
      },
      hideModal: function(event) {
        if (!this.$refs.modalDialog.contains(event.target)) {
          this.modalShow = false
        }
      }
    },
    computed: {
      modalStyle() {
        return this.modalShow ? { 'padding-left': '0px;', display: 'block' } : {};
      }
    },
    created: function() {
      this.isLoad = false;
    }
  })
};
