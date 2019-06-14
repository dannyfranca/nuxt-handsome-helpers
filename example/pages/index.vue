<template>
  <div>
    Works! Open console to see the helpers
  </div>
</template>

<script>
export default {
  created() {
    /*eslint-disable*/
    console.group('⛏ Look at this.$helpers:')
    console.log(this.$helpers)
    console.groupEnd()
  }
}
</script>
