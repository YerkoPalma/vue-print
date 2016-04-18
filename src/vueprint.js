(function () {
  function install(Vue) {
    var style = require('./vueprint.css')
    console.log(style)
    
    var VuePrint = Vue.extend({
      template: '<template>'
                + '    <div id=\'printable\' :class=\"{ \'print-only\': !this.visible }\">'
                + '      <slot></slot>'
                + '    </div>'
                + ' </template>',
      props: {
      	visible: {
        	type: Boolean,
          default: true
        }
      }
    })
    
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
          if (window)
        	  window.print()
      	  else
      	    console.log('Can\'t print outside the browser')
        }
      }
    })
  }

  if (typeof exports == "object") {
    module.exports = install
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    Vue.use(install)
  }
}())
