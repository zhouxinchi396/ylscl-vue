<template>
  <Headers :isScrolled="isScrolled" />
  <router-view></router-view>
  <Footer />
</template>
<script lang="ts">
import Headers from "./components/Headers.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";

import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "App",
  components: {
    Headers,
    Footer,
    Home,
  },
  setup() {
    const isScrolled = ref(false);
    const handleScroll = () => {
      isScrolled.value = window.pageYOffset > 0;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, true);
    });

    return {
      isScrolled,
    };
  },
});
</script>