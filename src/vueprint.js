var VuePrint = require('./vPrint.vue')

exports.install = function (Vue) {
  Vue.component('v-print', VuePrint)

  Vue.directive('print-only', {
  	bind: function () {
    	var className = 'print-only'
     	if (this.el.classList)
       	this.el.classList.add(className)
     	else
       	this.el.className += ' ' + className
    }
  })

  Vue.directive('print-exclude', {
  	bind: function () {
    	var className = 'print-exclude'
     	if (this.el.classList)
       	this.el.classList.add(className)
     	else
       	this.el.className += ' ' + className
    }
  })

  Vue.mixin({
    methods: {
      print: function () {
      	window.print()
      }
    }
  })
}
