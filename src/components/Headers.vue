<template>
  <div id="header" :class="isScrolled ? 'float' : 'fixed'">
    <div id="top"></div>
    <div id="nav">
      <i class="iconfont"></i>
    </div>
  </div>
  <div id="spare_tire" v-if="isScrolled"></div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "Headers",
  props: {
    isScrolled: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>
<style scoped>
#header {
  z-index: 1;
}
#spare_tire {
  height: 38px;
  background: red;
}
.float {
  width: 100%;
  position: fixed;
  top: 0;
}
.float #nav {
  background: white;
}
#top {
  color: white;
  display: table;
  height: 38px;
  width: 100%;
  background: #242424;
}
#nav {
  position: absolute;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid transparent;
  background: transparent;
  white-space: nowrap;
}
</style>