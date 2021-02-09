<template>
  <Carousel />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "/@/components/Carousel.vue";
export default defineComponent({
  name: "Home",
  components: {
    Carousel,
  },
  setup() {
    return {};
  },
});
</script>