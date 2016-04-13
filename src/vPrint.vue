<style>
  @media print {
    body * {
      visibility: hidden;
    }
    #printable, #printable * {
      visibility: visible;
    }
    #printable {
      position: absolute;
      left: 0;
      top: 0;
    }
    #printable .print-only {
      visibility: visible;
      display: block;
    }
    #printable .print-exclude {
      visibility: hidden;
      display: none;
    }
  }

  @media not print {
    .print-only {
      display: none;
    }
  }
</style>
<template>
  <div id='printable' :class="{ 'print-only': !this.visible }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
  	visible: {
    	type: Boolean,
      default: true
    }
  }
}
</script>
